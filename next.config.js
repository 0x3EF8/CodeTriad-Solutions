/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/CodeTriad-Solutions',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CodeTriad-Solutions' : '', 
};

module.exports = nextConfig;
