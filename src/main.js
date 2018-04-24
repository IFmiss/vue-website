// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import './../static/font-icon/style.css'
import Msg from 'vue-message'
// import './../babel-polyfill'
// import scrollbar from 'malihu-custom-scrollbar-plugin'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(Msg, {text: 'Hello world', duration: 3000, background: 'rgba(7,17,27,0.6)'})

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  loading: 'http://www.daiwei.org/new/dw.png',
  error: 'http://www.daiwei.org/vue/bg/657952152722629515.jpg'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
