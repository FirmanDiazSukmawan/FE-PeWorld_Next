/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "i.pravatar.cc",
      "unsplash.com",
    ],
  },
};

module.exports = nextConfig;
