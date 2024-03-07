/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '127.0.0.1',
        pathname: '/**',
        port: '8000',
        protocol: 'http',
      },
    ],
  },
}

export default nextConfig
