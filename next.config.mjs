import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "darul-arqam.mbgm.id",
      },
    ],
  },
  reactStrictMode: true,
  ...withPWA,
};

export default nextConfig;
