import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'COMPS/HelloWorld';
import Directives from 'CUSTOM/Directives';
import Filters from 'CUSTOM/Filters';
import Test from 'CUSTOM/Test';
import Test2 from 'CUSTOM/test2';
import test3 from 'CUSTOM/test3';
import Train from 'CUSTOM/Train';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/directives',
      name: 'Directives',
      component: Directives,
    },
    {
      path: '/filters',
      name: 'Filters',
      component: Filters,
    },
    {
      path: '/Test',
      name: 'Test',
      component: test3,
    },
    {
      path: '/train',
      name: 'train',
      component: Train
    },
    {
      path: '/main',
      component(resolve) {
        require(['../views/Main.vue'], resolve);
      }
    }
  ]
})
