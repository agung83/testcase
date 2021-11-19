module.exports = {
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      },
    ]
  },
  // useFileSystemPublicRoutes: false,
  webpack: (config, { dev, isServer }) => {
    // ketika yarn build makan kita ganti react menjadi preact, kenapa preact karna preact ukuran nya leih kecil dari react asli
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },

  // reactStrictMode: false,
}