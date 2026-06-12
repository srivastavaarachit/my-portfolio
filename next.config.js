/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'api.iconify.design',
      },
    ],
  },
};

module.exports = nextConfig;
