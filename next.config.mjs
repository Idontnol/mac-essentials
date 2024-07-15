/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns:[{
        protocol: 'https',
        hostname: '**'
      }],
      unoptimized: true, //helps to remove blury from images
    }
};

export default nextConfig;
