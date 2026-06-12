/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This ignores linting errors during the build process
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