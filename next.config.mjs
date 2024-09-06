/** @type {import('next').NextConfig} */

/**
 * path:  next.config.mjs
 */

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Replace Babel with SWC for next/font files
    config.module.rules.push({
      test: /next[\\/]font/,
      use: {
        loader: 'next-swc-loader',
      },
    });

    return config;
  },
};

export default nextConfig;
