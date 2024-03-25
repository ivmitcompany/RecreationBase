/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'logindariy-backend-8fa3f50e2bc2.herokuapp.com',
        pathname: '/**',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'res.cloudinary.com',
        pathname: '/**',
        port: '',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
