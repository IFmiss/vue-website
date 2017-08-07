var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  plugins: [
   new webpack.optimize.CommonsChunkPlugin('common.js'),
   new webpack.ProvidePlugin({
     jQuery: "jquery",
     $: "jquery"
   })
  ]
}
