import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../components/home/home.vue'
import IndexComponent from '../components/home/index/index.vue'
import FindComponent from '../components/home/find/find.vue'
import BorrowComponent from '../components/borrow/borrow.vue'
// import BorrowPurposeComponent from '../components/borrow-purpose/borrow-purpose.vue'
import FriendComponent from '../components/home/friend/friend.vue'
import MineComponent from '../components/home/mine/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent,
      children: [
        {
          path: '/index',
          name: 'index',
          component: IndexComponent
        },
        {
          path: '/mine',
          name: 'mine',
          component: MineComponent
        },
        {
          path: '/find',
          name: 'find',
          component: FindComponent
        },
        {
          path: '/friend',
          name: 'friend',
          component: FriendComponent
        }
      ],
      redirect: '/index'
    },
    {
      path: '/borrow',
      name: 'borrow',
      component: BorrowComponent
    }
  ]
})
