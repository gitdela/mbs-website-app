/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'mybitstores.com',
      'babebitstore.s3.us-west-2.amazonaws.com',
      'coin-images.coingecko.com',
      'assets.coingecko.com',
    ],
  },
};

export default nextConfig;
