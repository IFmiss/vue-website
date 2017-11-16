// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from 'vue-message'
// import './../babel-polyfill'
// import scrollbar from 'malihu-custom-scrollbar-plugin'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(Toast, {text: 'Hello world', duration: 3000, background: 'rgba(7,17,27,0.6)'})

// console.log(Toast)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
