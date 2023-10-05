/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
})

const nextConfig = withPWA({
  output: "export",
  basePath: "/next-pwa-test"
})

module.exports = nextConfig
