/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
