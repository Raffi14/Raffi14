/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export', // Tambahkan ini untuk ekspor statis
    distDir: 'out'
};

export default nextConfig;
