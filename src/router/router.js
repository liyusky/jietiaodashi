import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// include router
import IncomeAndExpenseComponent from '@/components/income-and-expense/income-and-expense.vue'
export default new Router({
  routes: [
    // include path
    {
      path: '/income-and-expense',
      name: 'income-and-expense',
      component: IncomeAndExpenseComponent
    },
  ]
})