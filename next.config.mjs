/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'geist-font.vercel.app',
            },
        ],
    },
};

export default nextConfig;
