import type { NextConfig } from "next";

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: `${process.env.NEXT_PUBLIC_SAMPLE_IMAGE}`,
          port: '',
          pathname: '/**',
        },
      ],
    },   
  };

export default nextConfig;
