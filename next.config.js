/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["fastly.picsum.photos"]
  },
};

module.exports = nextConfig;
