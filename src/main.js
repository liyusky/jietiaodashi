import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/index'
import '../static/iconfont/iconfont.css'
import '../static/iconfont/iconfont.js'
import './main.scss'
import './css/swiper-4.3.3.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  render: f => f(App)
})
