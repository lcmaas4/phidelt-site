import { NextRequest, NextResponse } from 'next/server';
import { uploadBufferToCloudinary } from '@/lib/cloudinary';
import connectToDatabase from '@/lib/db';
import Asset, { AssetCategory } from '@/models/Asset';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const category = (formData.get('category') as AssetCategory) || 'general';
    const altText = (formData.get('altText') as string) || '';
    const folder = (formData.get('folder') as string) || `phidelt-site/${category}`;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Determine resource type
    const isVideo = file.type.startsWith('video/');
    const resourceType = isVideo ? 'video' : 'image';

    const uploadResult = await uploadBufferToCloudinary(buffer, {
      folder,
      resource_type: resourceType,
    });

    // Save to Mongo if DB is connected
    let savedAsset = null;
    try {
      await connectToDatabase();
      savedAsset = await Asset.create({
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
        originalFilename: file.name,
        altText,
        tags: uploadResult.tags || [],
      });
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
        dbRecord: savedAsset,
      },
      message: 'Asset uploaded successfully',
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'File upload failed';
    console.error('Upload route error:', error);
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    );
  }
}
