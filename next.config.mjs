/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'ik.imagekit.io',
            },
            {
                hostname: 'example.com',
            }
        ]
    }
};

export default nextConfig;
