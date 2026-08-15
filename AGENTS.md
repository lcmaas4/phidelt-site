# Agent Documentation

This document describes the AI agents configured for this project, their responsibilities, and guidelines for working with them.

## Agent: Next.js Development Agent

### Purpose

Assists with Next.js-specific development tasks, including routing, components, framework-specific features, database interactions, and media CDN management.

### Responsibilities

- Next.js App Router configuration and optimization
- Server and client component implementation
- Image optimization and font loading
- Serverless API route and Server Action development
- MongoDB Atlas database operations and schema management
- Cloudinary media asset lifecycle management (upload, transform, delete)
- Build configuration and deployment guidance

### Important Constraints

<!-- BEGIN:nextjs-agent-rules -->

**This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide at https://nextjs.org/docs before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

---

## Agent Guidelines: MongoDB Atlas & Cloudinary Operations

When an AI agent is tasked with uploading, editing, or deleting assets or database records, the agent must follow these standard procedures using the credentials in `.env` / `.env.local`.

### 1. Environment & Security Rules
- Environment variables (`MONGODB_URI`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `NOTION_PASSWORD`, `ADMIN_API_KEY`) are stored in `.env.local` and `.env`.
- **Zero Client Leakage**: Never import `src/lib/db.ts`, `src/lib/cloudinary.ts`, or `src/lib/auth.ts` into client components (`'use client'`).
- **Zero Secret Exposure**: Never prefix server secrets with `NEXT_PUBLIC_`. Never output raw secret connection strings to console/logs.

---

### 2. Media Asset Lifecycle (Cloudinary)

#### A. Uploading Media Assets
When adding an image or video to the project:
1. Upload the file to Cloudinary using the Node SDK in a quick `npx tsx` execution or the upload utility:
   ```ts
   import { v2 as cloudinary } from 'cloudinary';
   cloudinary.config({
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
     api_key: process.env.CLOUDINARY_API_KEY,
     api_secret: process.env.CLOUDINARY_API_SECRET,
     secure: true,
   });

   const res = await cloudinary.uploader.upload(filePath, {
     folder: 'phidelt-site/<category>', // e.g. 'phidelt-site/heroes', 'phidelt-site/about', 'phidelt-site/composites', 'phidelt-site/videos'
     public_id: '<asset-name>',
     resource_type: isVideo ? 'video' : 'image',
     overwrite: true,
   });
   ```
2. **Index in MongoDB**: Create or upsert a corresponding record in the `Asset` model (`src/models/Asset.ts`).
3. **Register in Code**: Add or update the CDN URL mapping in `src/lib/siteAssets.ts` using `getCloudinaryImageUrl('phidelt-site/...')` or `getCloudinaryVideoUrl('phidelt-site/...')`.
4. **Delete Local Binary**: Always remove the local image/video from `public/` after upload so large binary files are not committed to git.

#### B. Deleting Media Assets
1. Use `deleteCloudinaryAsset(publicId, resourceType)` from `src/lib/cloudinary.ts`.
2. Remove the asset record from the `Asset` collection in MongoDB.
3. Remove or update references in `src/lib/siteAssets.ts` or `Brother.imageUrl`.

---

### 3. Database Roster Operations (MongoDB Atlas)

#### A. Adding or Updating Brothers
1. Use the Mongoose connection manager:
   ```ts
   import connectToDatabase from '@/lib/db';
   import Brother from '@/models/Brother';

   await connectToDatabase();
   ```
2. Create or update brother records conforming to `src/models/Brother.ts`:
   - `name`: string (required)
   - `role`: string (e.g. 'President', 'VP of Standards', etc.)
   - `category`: `'exec'` | `'council'` | `'active'` | `'alumni'`
   - `classSymbol`: string (e.g. `'AB'`, `'AA'`, `'Ω'`, `'Ψ'`, `'Χ'`, `'Φ'`)
   - `imageUrl`: Cloudinary CDN URL string
   - `cloudinaryPublicId`: Cloudinary public ID for asset lifecycle management
   - `hometown`: string
   - `major`: string
   - `order`: number (for sorting priority)
   - `isActive`: boolean (`true`)

#### B. Deleting Brothers
1. Retrieve the brother record to check for `cloudinaryPublicId`.
2. If `cloudinaryPublicId` exists, delete the image from Cloudinary using `deleteCloudinaryAsset(brother.cloudinaryPublicId)`.
3. Delete the document: `await Brother.findByIdAndDelete(id)`.

---

### 4. Executing Operations via REST API
For HTTP-based management, authenticated routes require the `Authorization: Bearer <token>` or `x-admin-token: <token>` header (matching `ADMIN_API_KEY` or `NOTION_PASSWORD`):
- `POST /api/brothers` — Create brother
- `PUT /api/brothers/:id` — Update brother fields
- `DELETE /api/brothers/:id` — Delete brother and clean up Cloudinary headshot
- `POST /api/cloudinary/upload` — Multipart FormData upload to Cloudinary and MongoDB
- `POST /api/cloudinary/sign` — Generate signed direct-upload parameters

---

### 5. Verification Checklist
After making database or asset changes:
- Run `npm run lint` and `npm run build` to verify zero TypeScript or Next.js build regressions.
- Verify that `/public` contains no binary image/video files (only web icons, manifest, and fonts).
