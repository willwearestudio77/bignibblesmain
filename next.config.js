/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['cdn.shopify.com', 'scontent.cdninstagram.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
        pathname: '/v/**'
      },
      { protocol: 'https', hostname: 'scontent-sea1-1.cdninstagram.com', pathname: '/v/**' },
      { protocol: 'https', hostname: 'scontent-itm1-1.cdninstagram.com', pathname: '/v/**' },
      { protocol: 'https', hostname: 'scontent-sea1-1.cdninstagram.com', pathname: '/v/**' },
      { protocol: 'https', hostname: '*.cdninstagram.com', pathname: '/v/**' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  }
};
