import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '../components/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    }
  ]
})
