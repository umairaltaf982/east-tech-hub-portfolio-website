/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/services/web-development-seo', destination: '/services/software-development', permanent: true },
    ];
  },
};

export default nextConfig;
