/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {},
  rewrites: async () => [
    {
      source: '/api/v1/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/:path*`,
    },
  ],
};

module.exports = nextConfig;
