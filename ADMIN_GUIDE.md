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
> - **NEVER** import `@/lib/db` or `@/lib/cloudinary` into any file marked with `'use client'`.
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
  "category": "exec", // Options: "exec" | "council" | "active" | "alumni"
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
3. The live `/brothers` page will automatically refresh with the new brother within 60 seconds (due to ISR caching).

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
4. In [`src/lib/siteAssets.ts`](file:///Users/lcmaas4/Desktop/projects/phidelt-site/src/lib/siteAssets.ts), add the video entry under `siteAssets.rush`:
   ```ts
   fall26Video: getCloudinaryVideoUrl('phidelt-site/videos/fallrush26'),
   fall26Poster: getCloudinaryVideoPosterUrl('phidelt-site/videos/fallrush26'),
   ```
5. Add the `<video>` block to [`src/app/rush/page.tsx`](file:///Users/lcmaas4/Desktop/projects/phidelt-site/src/app/rush/page.tsx).

---

## 6. Programmatic Backend API Reference

The site exposes serverless REST endpoints for programmatic management:

- **`GET /api/brothers?grouped=true`**: Returns brothers grouped by Exec, Council, and Classes.
- **`GET /api/brothers?category=exec`**: Filter by category (`exec`, `council`, `active`).
- **`POST /api/brothers`**: Create a new brother (JSON body validated with Zod).
- **`PUT /api/brothers/:id`**: Update brother profile fields.
- **`DELETE /api/brothers/:id`**: Deletes brother and automatically removes their Cloudinary photo.
- **`POST /api/cloudinary/upload`**: Multipart file upload endpoint that streams directly to Cloudinary and registers the asset in MongoDB.
