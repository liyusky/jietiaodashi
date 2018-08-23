import Vue from 'vue'
import App from './App'
import router from './router/router'
import '../static/iconfont/iconfont.css'
import '../static/iconfont/iconfont.js'
import './main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
