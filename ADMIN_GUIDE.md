# Webmaster & Contributor Admin Guide

This guide details how to manage content, media assets, and database records for the **Phi Delta Theta - Massachusetts Epsilon** website.

---

## 1. System Architecture Overview

```
Frontend (Next.js 16 App Router)
   │
   ├── Public Media/Videos ───────► Cloudinary CDN (Fast, optimized delivery)
   │
   └── Dynamic Roster Data ───────► Next.js Serverless API ───► MongoDB Atlas
```

- **MongoDB Atlas**: Stores dynamic structured data (Brother profiles, Executive Board, Council, active classes, asset index).
- **Cloudinary CDN**: Hosts all media files (composite headshots, rush videos, hero backgrounds, event photos).
- **Netlify**: Builds and hosts the frontend and executes serverless API routes (`/api/...`).

---

## 2. Security & Environment Variable Rules

> [!CAUTION]
> **Zero Exposure Rule for Database & Cloudinary Secrets:**
> - `MONGODB_URI`, `CLOUDINARY_API_SECRET`, and `CLOUDINARY_API_KEY` are **server-only** secrets.
> - **NEVER** prefix them with `NEXT_PUBLIC_`.
> - **NEVER** import `@/lib/db`, `@/lib/cloudinary`, or `@/lib/auth` into any file marked with `'use client'`.
> - Only `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is safe for client-side bundle exposure.

---

## 3. Managing Access for Chapter Webmasters

To ensure smooth transitions between chapter webmasters and avoid sharing personal root logins:

### A. Shared Service Account (Recommended)
Create a dedicated chapter webmaster email (e.g., `webmaster.phidelt.neu@gmail.com` or chapter tech chair account):
1. **Cloudinary**: Create the free tier under the chapter account and invite trusted contributors under **Settings** → **Users**.
2. **MongoDB Atlas**: Under **Security** → **Database Access**, create individual scoped database users with `readWrite` permissions on the `phidelt` database (do **not** grant `atlasAdmin` to normal contributors).

---

## 4. How to Manage the Brother Roster

Brother data is stored in the **`brothers`** collection in MongoDB Atlas.

### Document Schema Reference
```json
{
  "name": "First Last",
  "role": "President",
  "category": "exec", // Rendered categories: "exec" | "council" | "active". "alumni" records can be stored in the DB but are not rendered on the /brothers roster page.
  "classSymbol": "AB", // Greek class letter (e.g., "AB", "AA", "Ω", "Ψ")
  "imageUrl": "https://res.cloudinary.com/j66ihmue/image/upload/phidelt-site/composites/headshot.jpg",
  "cloudinaryPublicId": "phidelt-site/composites/headshot",
  "alt": "First Last",
  "hometown": "Boston, MA",
  "major": "Computer Science",
  "order": 0,
  "isActive": true
}
```

### Adding a New Brother via MongoDB Atlas:
1. Log into MongoDB Atlas → **Browse Collections** → `phidelt` → `brothers`.
2. Click **Insert Document** and fill in the fields matching the schema above.
3. The `/brothers` page uses Next.js ISR (Incremental Static Regeneration). Changes will be served with stale-while-revalidate behavior on subsequent page requests after the revalidation window.

---

## 5. How to Upload & Manage Media in Cloudinary

All media should be uploaded to the designated Cloudinary folders:

| Media Type | Cloudinary Folder Path | Resource Type |
| :--- | :--- | :--- |
| **Brother Headshots** | `phidelt-site/composites` | Image |
| **Rush Videos** | `phidelt-site/videos` | Video |
| **Page Backgrounds / Heroes** | `phidelt-site/heroes` | Image |
| **About Page Photos** | `phidelt-site/about` | Image |
| **Impact / Philanthropy Photos**| `phidelt-site/impact` | Image |
| **Brand Logos** | `phidelt-site/branding` | Image |

### Adding a New Rush Video:
1. Log into the Cloudinary Media Library.
2. Navigate to `phidelt-site/videos/`.
3. Upload the new MP4 video (e.g. `fallrush26.mp4`).
4. In [`src/lib/siteAssets.ts`](src/lib/siteAssets.ts), add the video entry under `siteAssets.rush`:
   ```ts
   fall26Video: getCloudinaryVideoUrl('phidelt-site/videos/fallrush26'),
   fall26Poster: getCloudinaryVideoPosterUrl('phidelt-site/videos/fallrush26'),
   ```
5. Add the `<video>` block to [`src/app/rush/page.tsx`](src/app/rush/page.tsx).

---

## 6. Programmatic Backend API Reference

The site exposes serverless REST endpoints for programmatic management.

> [!IMPORTANT]
> **Authentication for Mutating Endpoints:**
> All write operations (`POST`, `PUT`, `DELETE`, upload, and signature generation) require administrator credentials provided via the `Authorization: Bearer <token>` or `x-admin-token: <token>` HTTP header (matching `ADMIN_API_KEY` or `NOTION_PASSWORD`).

- **`GET /api/brothers?grouped=true`**: Public endpoint. Returns brothers grouped by Exec, Council, and Classes.
- **`GET /api/brothers?category=exec`**: Public endpoint. Filter by category (`exec`, `council`, `active`).
- **`POST /api/brothers`**: *Protected (Admin)*. Create a new brother (JSON body validated with Zod).
- **`PUT /api/brothers/:id`**: *Protected (Admin)*. Update brother profile fields (validated against strict allowlist).
- **`DELETE /api/brothers/:id`**: *Protected (Admin)*. Deletes brother and automatically removes their Cloudinary photo with retry verification.
- **`POST /api/cloudinary/sign`**: *Protected (Admin)*. Generates signed direct-upload parameters for client uploads.
- **`POST /api/cloudinary/upload`**: *Protected (Admin)*. Accepts multipart FormData (`file`, `category`, `altText`), buffers the upload server-side to Cloudinary, and persists metadata in the MongoDB `Asset` collection.
