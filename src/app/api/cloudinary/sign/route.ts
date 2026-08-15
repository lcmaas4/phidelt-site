import { NextRequest, NextResponse } from 'next/server';
import { generateUploadSignature } from '@/lib/cloudinary';
import { verifyAdminAuth, unauthorizedResponse } from '@/lib/auth';

/**
 * POST /api/cloudinary/sign
 * Protected administrator endpoint to generate signed direct-upload parameters for Cloudinary.
 *
 * @param request - Incoming NextRequest with optional folder and customParams.
 * @returns NextResponse with Cloudinary signature payload.
 */
export async function POST(request: NextRequest) {
  const auth = verifyAdminAuth(request);
  if (!auth.authorized) {
    return unauthorizedResponse(auth.error);
  }

  try {
    const body = await request.json().catch(() => ({}));
    const folder = typeof body.folder === 'string' ? body.folder : 'phidelt-site';
    const customParams = typeof body.params === 'object' && body.params !== null ? body.params : {};

    const signData = generateUploadSignature(folder, customParams);

    return NextResponse.json({
      success: true,
      data: signData,
    });
  } catch (error: unknown) {
    console.error('Error generating Cloudinary signature:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
