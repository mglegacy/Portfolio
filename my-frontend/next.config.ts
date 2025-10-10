/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000", // a porta do seu backend
        pathname: "/files/**", // permite qualquer arquivo dentro de /files
      },
    ],
  },
};

module.exports = nextConfig;