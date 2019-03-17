// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  exportPathMap: function () {
    return {
      '/': {
        page: '/'
      }
    }
  },
  assetPrefix: '/vita-nox'
})