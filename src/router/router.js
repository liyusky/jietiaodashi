import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const IndexComponent = () => import(/* webpackChunkName: 'index' */ '../components/index/index.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent
    }
  ]
})
