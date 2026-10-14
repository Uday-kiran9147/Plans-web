import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/feedback", destination: "/feedback-form.html" }];
  },
};

export default nextConfig;
