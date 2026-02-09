import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'logowik.com', pathname: '/**' },
      { protocol: 'https', hostname: 'storage.googleapis.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.absl.ro', pathname: '/**' },
      // Google (por si en un futuro vuelves a optimizar)
      { protocol: 'https', hostname: 'maps.googleapis.com', pathname: '/maps/api/**' },
      { protocol: 'https', hostname: 'maps.google.com', pathname: '/**' },
      { protocol: 'https', hostname: 'maps.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh4.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh5.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'lh6.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.google.com', pathname: '/**' },
    ],
  },
};

export default nextConfig;
