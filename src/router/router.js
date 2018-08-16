import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/index/index.vue';

// include router
import IndexComponent from '@/components/index/index.vue'
export default new Router({
  routes: [
    // include path
    {
      path: '/index',
      name: 'index',
      component: IndexComponent
    },
  ]
})
