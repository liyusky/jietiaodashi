import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const HomeComponent = () => import(/* webpackChunkName: 'home' */ '../components/home/home.vue')
const IndexComponent = () => import(/* webpackChunkName: 'index' */ '../components/home/index/index.vue')
const MineComponent = () => import(/* webpackChunkName: 'mine' */ '../components/home/mine/mine.vue')
const FindComponent = () => import(/* webpackChunkName: 'mine' */ '../components/home/find/find.vue')
const FriendComponent = () => import(/* webpackChunkName: 'friend' */ '../components/home/friend/friend.vue')
const BorrowComponent = () => import(/* webpackChunkName: 'mine' */ '../components/borrow/borrow.vue')
const AccountBalanceComponent = () => import(/* webpackChunkName: 'account-balance' */ '../components/account-balance/account-balance.vue')
const IouDetailComponent = () => import(/* webpackChunkName: 'iou-detail' */ '../components/iou-detail/iou-detail.vue')
const TransactionsComponent = () => import(/* webpackChunkName: 'transactions' */ '../components/transactions/transactions.vue')
const PersonalInfoComponent = () => import(/* webpackChunkName: 'transactions' */ '../components/personal-info/personal-info.vue')
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
    },
    {
      path: '/account-balance',
      name: 'account-balance',
      component: AccountBalanceComponent
    },
    {
      path: '/iou-detail',
      name: 'iou-detail',
      component: IouDetailComponent
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsComponent
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfoComponent
    }
  ]
})
