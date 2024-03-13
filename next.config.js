/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gsm-networking-bucket.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bucket.gsm-networking.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/api/v1/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/:path*`,
    },
  ],
};

module.exports = nextConfig;
