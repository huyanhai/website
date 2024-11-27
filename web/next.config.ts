import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      resolveAlias: {
        '@base/*': ['../packages/*']
      }
    }
  }
};

export default nextConfig;
