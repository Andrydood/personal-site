const path = require('path');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = withImages(withSass({
  webpack(config) {
    const aliases = {
      '~components': path.join(__dirname, 'components'),
      '~lib': path.join(__dirname, 'lib'),
    };

    config.resolve.alias = Object.assign(config.resolve.alias, aliases);

    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]-[hash:base64:5]',
  },
  assetPrefix: isProd ? '/personal-page' : '',
}));
