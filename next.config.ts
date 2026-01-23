import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['farookhridoy.com'],
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;
