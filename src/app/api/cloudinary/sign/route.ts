import { NextRequest, NextResponse } from 'next/server';
import { generateUploadSignature } from '@/lib/cloudinary';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const folder = body.folder || 'phidelt-site';
    const customParams = body.params || {};

    const signData = generateUploadSignature(folder, customParams);

    return NextResponse.json({
      success: true,
      data: signData,
    });
  } catch (error: unknown) {
    const errMessage =
      error instanceof Error ? error.message : 'Failed to generate upload signature';
    console.error('Error generating Cloudinary signature:', error);
    return NextResponse.json(
      {
        success: false,
        error: errMessage,
      },
      { status: 500 }
    );
  }
}
