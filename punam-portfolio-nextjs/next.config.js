/** @type {import('next').NextConfig} */
const EARTHPULSE = 'https://earthpulse-ai-product-design-case-s-psi.vercel.app/';

const nextConfig = {
  // Old EarthPulse AI URLs now forward to the new Product Design Case Study.
  async redirects() {
    return [
      { source: '/projects/earthpulse-ai', destination: EARTHPULSE, permanent: false },
      { source: '/earthpulse-v2.html', destination: EARTHPULSE, permanent: false },
    ];
  },
};

module.exports = nextConfig;
