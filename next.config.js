/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  rewrites: async () => [
    {
      source: '/api/v1/:path*',
      destination: `${process.env.API_BASE_URL}/api/v1/:path*`,
    },
  ],
};

module.exports = nextConfig;
