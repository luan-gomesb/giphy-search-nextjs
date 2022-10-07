/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators:{
    autoPrerender:false
  }
}

module.exports = nextConfig
