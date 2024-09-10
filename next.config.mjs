/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    use: {
        extraHTTPHeaders: {
          'x-vercel-protection-bypass': "gx2q2PoKvJdbUtbonyHuEWCLrU6rikNQ",
          'x-vercel-set-bypass-cookie': true,
        }
      },
};

export default nextConfig;
