import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const IndexComponent = () => import(/* webpackChunkName: 'index' */ '../components/index/index.vue')
const FriendComponent = () => import(/* webpackChunkName: 'friend' */ '../components/friend/friend.vue')
const BorrowComponent = () => import(/* webpackChunkName: 'borrow' */ '../components/borrow/borrow.vue')
const FindComponent = () => import(/* webpackChunkName: 'find' */ '../components/find/find.vue')
const MineComponent = () => import(/* webpackChunkName: 'mine' */ '../components/mine/mine.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/index',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/friend',
      name: 'friend',
      component: FriendComponent
    },
    {
      path: '/borrow',
      name: 'borrow',
      component: BorrowComponent
    },
    {
      path: '/find',
      name: 'find',
      component: FindComponent
    },
    {
      path: '/mine',
      name: 'mine',
      component: MineComponent
    }
  ]
})
