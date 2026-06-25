import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'manjulaskitchen.com' },
      { protocol: 'https', hostname: 'www.vegrecipesofindia.com' },
      { protocol: 'https', hostname: 'www.licious.in' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'www.cookwithmanali.com' },
    ],
  },
};

export default nextConfig;
