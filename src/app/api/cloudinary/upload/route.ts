import { NextRequest, NextResponse } from 'next/server';
import { uploadBufferToCloudinary } from '@/lib/cloudinary';
import connectToDatabase from '@/lib/db';
import Asset, { AssetCategory } from '@/models/Asset';
import { verifyAdminAuth, unauthorizedResponse } from '@/lib/auth';

const ALLOWED_CATEGORIES = new Set<AssetCategory>([
  'composite',
  'background',
  'rush',
  'impact',
  'general',
]);

const ALLOWED_IMAGE_MIMES = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/avif',
]);

const ALLOWED_VIDEO_MIMES = new Set([
  'video/mp4',
  'video/webm',
  'video/quicktime',
]);

const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB

/**
 * POST /api/cloudinary/upload
 * Protected administrator endpoint to upload a media file to Cloudinary and register its metadata in MongoDB.
 *
 * @param request - Incoming NextRequest with multipart FormData (file, category, altText).
 * @returns NextResponse with Cloudinary asset details and MongoDB record id.
 */
export async function POST(request: NextRequest) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return unauthorizedResponse(auth.error);
  }

  try {
    const formData = await request.formData();
    const rawFile = formData.get('file');

    if (!rawFile || !(rawFile instanceof File)) {
      return NextResponse.json(
        { success: false, error: 'A valid file is required.' },
        { status: 400 }
      );
    }

    const rawCategory = (formData.get('category') as string) || 'general';
    if (!ALLOWED_CATEGORIES.has(rawCategory as AssetCategory)) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid category. Allowed categories: ${Array.from(ALLOWED_CATEGORIES).join(', ')}`,
        },
        { status: 400 }
      );
    }
    const category = rawCategory as AssetCategory;
    const folder = `phidelt-site/${category}`;

    const mimeType = rawFile.type.toLowerCase();
    const isImage = ALLOWED_IMAGE_MIMES.has(mimeType);
    const isVideo = ALLOWED_VIDEO_MIMES.has(mimeType);

    if (!isImage && !isVideo) {
      return NextResponse.json(
        {
          success: false,
          error: 'Unsupported file type. Allowed types: JPEG, PNG, WebP, GIF, AVIF, MP4, WebM, QuickTime.',
        },
        { status: 400 }
      );
    }

    const maxAllowedSize = isVideo ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;
    if (rawFile.size > maxAllowedSize) {
      const limitMb = maxAllowedSize / (1024 * 1024);
      return NextResponse.json(
        { success: false, error: `File size exceeds the ${limitMb}MB limit for this media type.` },
        { status: 400 }
      );
    }

    const altText = (formData.get('altText') as string) || '';
    const resourceType = isVideo ? 'video' : 'image';

    const bytes = await rawFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadResult = await uploadBufferToCloudinary(buffer, {
      folder,
      resource_type: resourceType,
    });

    // Save metadata record to MongoDB if DB is connected
    let savedAssetId: unknown = null;
    try {
      await connectToDatabase();
      const savedAsset = await Asset.create({
        publicId: uploadResult.public_id,
        url: uploadResult.url,
        secureUrl: uploadResult.secure_url,
        format: uploadResult.format,
        resourceType,
        folder,
        category,
        bytes: uploadResult.bytes,
        width: uploadResult.width,
        height: uploadResult.height,
        originalFilename: rawFile.name,
        altText,
        tags: uploadResult.tags || [],
      });
      savedAssetId = savedAsset._id;
    } catch (dbErr) {
      console.warn('Could not save asset record to database (continuing with upload result):', dbErr);
    }

    return NextResponse.json({
      success: true,
      data: {
        publicId: uploadResult.public_id,
        url: uploadResult.secure_url,
        format: uploadResult.format,
        resourceType,
        bytes: uploadResult.bytes,
        width: uploadResult.width,
        height: uploadResult.height,
        dbRecord: savedAssetId ? { _id: savedAssetId, publicId: uploadResult.public_id, category } : null,
      },
      message: 'Asset uploaded successfully',
    });
  } catch (error: unknown) {
    console.error('Upload route error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
