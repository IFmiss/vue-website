var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
Vue.config.devtools = true
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
