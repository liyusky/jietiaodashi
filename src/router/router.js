// import Vue from 'vue';
import Router from 'vue-router';// include router
import IndexComponent from '@/components/index/index.vue';

export default new Router({
  routes: [
    // include path
    {
      path: '/',
      name: 'IndexComponent',
      component: IndexComponent,
    },
  ],
});
