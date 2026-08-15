import type { NextConfig } from 'next';

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'j66ihmue';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: `/${cloudName}/**`,
        search: '',
      },
      // Allowlist for legitimate remote database-backed image URLs
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
