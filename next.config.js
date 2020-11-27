const withImages = require('next-images')
const isDev = process.env.NODE_ENV === 'development'

module.exports = withImages({
  assetPrefix: isDev ? '' : '',
  dynamicAssetPrefix: true,
  webbpack(config, options) {
    return config
  }
})
