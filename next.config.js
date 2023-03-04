/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    stripe: process.env.STRIPE_SECRET_KEY,
    publishableStripe: process.env.STRIPE_PUBLISHABLE_KEY,
  },
}

module.exports = nextConfig
