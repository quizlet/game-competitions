/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/game',
        destination: `http://localhost:4001/game`,
      },
      {
        source: '/game/:path*',
        destination: `http://localhost:4001/game/:path*`,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  reactStrictMode: true,
  transpilePackages: ['dataset'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
