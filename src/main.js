import Vue from 'vue'
import App from './App'
import Modal from './Modal.vue'
import router from './router/router'
import store from './store/index'
import './main.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
window.modal = new Vue({
  el: '#modal',
  store,
  render: f => f(Modal)
})

window.app = new Vue({
  el: '#app',
  router,
  store,
  render: f => f(App)
})
