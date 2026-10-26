/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/portfolio',
        permanent: true,
      },
    ];
  },

  typescript:{
    ignoreBuildErrors:true
  },
  eslint:{
    ignoreDuringBuilds: true
  }

};

module.exports = nextConfig;
