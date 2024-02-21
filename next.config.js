/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
}

// next.config.js
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/assets/PDF/',
            outputPath: 'static/assets/PDF/',
          },
        },
      ],
    });

    // Tambahkan aturan khusus untuk menangani penanganan PDF pada sisi server
    if (isServer) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        use: 'raw-loader',
      });
    }

    return config;
  },
};




module.exports = nextConfig
