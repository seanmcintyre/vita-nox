const debug = process.env.NODE_ENV !== 'production';
const assetPrefix = debug ? '' : '/vita-nox/';

const withTypescript = require('@zeit/next-typescript')
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
  }
})