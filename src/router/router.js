import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const AccountBalanceComponent = () => import(/* webpackChunkName: 'account-balance' */ '../components/account-balance/account-balance.vue')
const BorrowComponent = () => import(/* webpackChunkName: 'borrow' */ '../components/borrow/borrow.vue')
const FindComponent = () => import(/* webpackChunkName: 'find' */ '../components/find/find.vue')
const IndexComponent = () => import(/* webpackChunkName: 'index' */ '../components/index/index.vue')
const FriendComponent = () => import(/* webpackChunkName: 'friend' */ '../components/friend/friend.vue')
const IouDetailComponent = () => import(/* webpackChunkName: 'iou-detail' */ '../components/iou-detail/iou-detail.vue')
const MineComponent = () => import(/* webpackChunkName: 'mine' */ '../components/mine/mine.vue')
const PersonalInfoComponent = () => import(/* webpackChunkName: 'personal-info' */ '../components/personal-info/personal-info.vue')
const TransactionsComponent = () => import(/* webpackChunkName: 'transactions' */ '../components/transactions/transactions.vue')
export default new Router({
  routes: [
    {
      path: '/account-balance',
      name: 'account-balance',
      component: AccountBalanceComponent
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
      path: '/iou-detail',
      name: 'iou-detail',
      component: IouDetailComponent
    },
    {
      path: '/mine',
      name: 'mine',
      component: MineComponent
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfoComponent
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsComponent
    }
  ]
})
