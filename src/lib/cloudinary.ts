import { v2 as cloudinary, UploadApiResponse, UploadApiOptions } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export interface UploadSignatureResponse {
  timestamp: number;
  signature: string;
  apiKey: string;
  cloudName: string;
  folder: string;
}

/**
 * Generate a secure signature for direct client-to-Cloudinary uploads.
 * This keeps the API Secret safe on the server while allowing the browser
 * to upload large files (videos/images) directly without hitting serverless timeout/size limits.
 */
export function generateUploadSignature(
  folder = 'phidelt-site',
  customParams: Record<string, string | number> = {}
): UploadSignatureResponse {
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const cloudName =
    process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!apiKey || !apiSecret || !cloudName) {
    throw new Error('Cloudinary environment variables are not fully configured.');
  }

  const timestamp = Math.round(new Date().getTime() / 1000);

  const paramsToSign: Record<string, string | number> = {
    folder,
    timestamp,
    ...customParams,
  };

  const signature = cloudinary.utils.api_sign_request(paramsToSign, apiSecret);

  return {
    timestamp,
    signature,
    apiKey,
    cloudName,
    folder,
  };
}

/**
 * Server-side direct buffer upload to Cloudinary.
 */
export async function uploadBufferToCloudinary(
  buffer: Buffer,
  options: UploadApiOptions = { folder: 'phidelt-site' }
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error || !result) {
        return reject(error || new Error('Upload failed with no result.'));
      }
      resolve(result);
    });

    uploadStream.end(buffer);
  });
}

/**
 * Delete an asset from Cloudinary by its public ID.
 */
export async function deleteCloudinaryAsset(
  publicId: string,
  resourceType: 'image' | 'video' | 'raw' = 'image'
) {
  return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}

export default cloudinary;
