/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "usioiuiauydnbpfwfawx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  //static site generation
  // output: "export",
  // then after npm run build we will get an out directory that is similar to the dist, and can be deployed to hosting provider
  // dynamic sites can be deployed using Vercel - it supports them
};

export default nextConfig;
