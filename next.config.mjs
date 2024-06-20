// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true, // Enable the app directory for the new Next.js 13 features
    },
    env: {
      NEXT_PUBLIC_CLERK_FRONTEND_API: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
      CLERK_API_KEY: process.env.CLERK_API_KEY,
      CLERK_API_URL: process.env.CLERK_API_URL,
      CLERK_API_VERSION: 'v1',
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: '/sign-in',
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: '/sign-up',
    },
  };
  
  export default nextConfig;
  