import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const IncomeAndExpenseComponent = () => import(/* webpackChunkName: 'income-and-expense' */ '../components/income-and-expense/income-and-expense.vue')
export default new Router({
  routes: [
    {
      path: '/income-and-expense',
      name: 'income-and-expense',
      component: IncomeAndExpenseComponent
    }
  ]
})
