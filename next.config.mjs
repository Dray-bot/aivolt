/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['undraw.co'], domains: ['img.clerk.com'], // ✅ Add unDraw image domain here
  },
  async rewrites() {
    return [
      {
        source: '/sign-up',
        destination: '/sign-up',
      },
    ];
  },
};

export default nextConfig;
