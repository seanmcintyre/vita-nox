const withTypescript = require('@zeit/next-typescript');
const debug = process.env.NODE_ENV !== 'production';
const assetPrefix = debug ? '' : '/vita-nox/';

module.exports = withTypescript({
  exportPathMap: function () {
    return {
      '/': {
        page: '/'
      }
    }
  },
  assetPrefix,
  publicRuntimeConfig: {
    assetPrefix
  },
})