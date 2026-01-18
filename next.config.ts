import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'open.feishu.cn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'internal-api-lark.feishu.cn',
        pathname: '/**',
      },
    ],
  },

  turbopack: {},

  reactStrictMode: true,

  poweredByHeader: false,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}
 
export default nextConfig