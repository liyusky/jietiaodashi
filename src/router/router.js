import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const AboutPayPasswordSettingsComponent = () => import(/* webpackChunkName: 'about-pay-password-settings' */ '../components/about-pay-password-settings/about-pay-password-settings.vue')
const BorrowListComponent = () => import(/* webpackChunkName: 'borrow-list' */ '../components/borrow-list/borrow-list.vue')
const AccountBalanceComponent = () => import(/* webpackChunkName: 'account-balance' */ '../components/account-balance/account-balance.vue')
const CancelAccountComponent = () => import(/* webpackChunkName: 'cancel-account' */ '../components/cancel-account/cancel-account.vue')
const CreditExtensionComponent = () => import(/* webpackChunkName: 'credit-extension' */ '../components/credit-extension/credit-extension.vue')
const EmpowerComponent = () => import(/* webpackChunkName: 'empower' */ '../components/empower/empower.vue')
const FamilarQuestionComponent = () => import(/* webpackChunkName: 'familar-question' */ '../components/familar-question/familar-question.vue')
const FindComponent = () => import(/* webpackChunkName: 'find' */ '../components/find/find.vue')
const ForgetPasswordComponent = () => import(/* webpackChunkName: 'forget-password' */ '../components/forget-password/forget-password.vue')
const FriendComponent = () => import(/* webpackChunkName: 'friend' */ '../components/friend/friend.vue')
const IdentityVerificationComponent = () => import(/* webpackChunkName: 'identity-verification' */ '../components/identity-verification/identity-verification.vue')
const IndexComponent = () => import(/* webpackChunkName: 'index' */ '../components/index/index.vue')
const IouDetailComponent = () => import(/* webpackChunkName: 'iou-detail' */ '../components/iou-detail/iou-detail.vue')
const LendingInformationComponent = () => import(/* webpackChunkName: 'lending-information' */ '../components/lending-information/lending-information.vue')
const MineComponent = () => import(/* webpackChunkName: 'mine' */ '../components/mine/mine.vue')
const ModefyPayPasswordComponent = () => import(/* webpackChunkName: 'modefy-pay-password' */ '../components/modefy-pay-password/modefy-pay-password.vue')
const NewsComponent = () => import(/* webpackChunkName: 'news' */ '../components/news/news.vue')
const PersonalInfoComponent = () => import(/* webpackChunkName: 'personal-info' */ '../components/personal-info/personal-info.vue')
const PublishComponent = () => import(/* webpackChunkName: 'publish' */ '../components/publish/publish.vue')
const PurposeComponent = () => import(/* webpackChunkName: 'purpose' */ '../components/purpose/purpose.vue')
const SetPayPasswordComponent = () => import(/* webpackChunkName: 'set-pay-password' */ '../components/set-pay-password/set-pay-password.vue')
const SettingsComponent = () => import(/* webpackChunkName: 'settings' */ '../components/settings/settings.vue')
const TransactionsComponent = () => import(/* webpackChunkName: 'transactions' */ '../components/transactions/transactions.vue')
const TransferDetailComponent = () => import(/* webpackChunkName: 'transfer-detail' */ '../components/transfer-detail/transfer-detail.vue')
const TransferRecordComponent = () => import(/* webpackChunkName: 'transfer-record' */ '../components/transfer-record/transfer-record.vue')
const WannaBorrowComponent = () => import(/* webpackChunkName: 'wanna-borrow' */ '../components/wanna-borrow/wanna-borrow.vue')
export default new Router({
  routes: [
    {
      path: '/about-pay-password-settings',
      name: 'about-pay-password-settings',
      component: AboutPayPasswordSettingsComponent
    },
    {
      path: '/borrow-list',
      name: 'borrow-list',
      component: BorrowListComponent
    },
    {
      path: '/account-balance',
      name: 'account-balance',
      component: AccountBalanceComponent
    },
    {
      path: '/cancel-account',
      name: 'cancel-account',
      component: CancelAccountComponent
    },
    {
      path: '/credit-extension',
      name: 'credit-extension',
      component: CreditExtensionComponent
    },
    {
      path: '/empower',
      name: 'empower',
      component: EmpowerComponent
    },
    {
      path: '/familar-question',
      name: 'familar-question',
      component: FamilarQuestionComponent
    },
    {
      path: '/find',
      name: 'find',
      component: FindComponent
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: ForgetPasswordComponent
    },
    {
      path: '/friend',
      name: 'friend',
      component: FriendComponent
    },
    {
      path: '/identity-verification',
      name: 'identity-verification',
      component: IdentityVerificationComponent
    },
    {
      path: '/index',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/iou-detail',
      name: 'iou-detail',
      component: IouDetailComponent
    },
    {
      path: '/lending-information',
      name: 'lending-information',
      component: LendingInformationComponent
    },
    {
      path: '/mine',
      name: 'mine',
      component: MineComponent
    },
    {
      path: '/modefy-pay-password',
      name: 'modefy-pay-password',
      component: ModefyPayPasswordComponent
    },
    {
      path: '/news',
      name: 'news',
      component: NewsComponent
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfoComponent
    },
    {
      path: '/publish',
      name: 'publish',
      component: PublishComponent
    },
    {
      path: '/purpose',
      name: 'purpose',
      component: PurposeComponent
    },
    {
      path: '/set-pay-password',
      name: 'set-pay-password',
      component: SetPayPasswordComponent
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsComponent
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsComponent
    },
    {
      path: '/transfer-detail',
      name: 'transfer-detail',
      component: TransferDetailComponent
    },
    {
      path: '/transfer-record',
      name: 'transfer-record',
      component: TransferRecordComponent
    },
    {
      path: '/wanna-borrow',
      name: 'wanna-borrow',
      component: WannaBorrowComponent
    }
  ]
})
