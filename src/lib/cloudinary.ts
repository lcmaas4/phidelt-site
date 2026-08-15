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
 * Generates a secure timestamped signature for direct client-to-Cloudinary uploads.
 * Keeps the API secret on the server while allowing direct browser uploads.
 *
 * @param folder - Target folder in Cloudinary.
 * @param customParams - Additional upload parameters to include in the signature.
 * @returns Object containing timestamp, signature, apiKey, cloudName, and folder.
 * @throws Error if Cloudinary credentials are not configured.
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
 * Uploads an in-memory Buffer directly to Cloudinary using an upload stream.
 *
 * @param buffer - File data Buffer.
 * @param options - Cloudinary upload stream options (e.g. folder, resource_type).
 * @returns Promise resolving to the Cloudinary UploadApiResponse.
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
 * Deletes a media asset from Cloudinary by its public ID.
 *
 * @param publicId - Cloudinary asset public ID.
 * @param resourceType - Resource type ('image', 'video', 'raw'). Defaults to 'image'.
 * @returns Promise resolving to the Cloudinary deletion result.
 */
export async function deleteCloudinaryAsset(
  publicId: string,
  resourceType: 'image' | 'video' | 'raw' = 'image'
) {
  return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
}

export default cloudinary;
