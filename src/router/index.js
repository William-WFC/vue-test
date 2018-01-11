import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'COMPS/HelloWorld';
import Directives from 'CUSTOM/Directives';
import Filters from 'CUSTOM/Filters';
import Test from 'CUSTOM/Test';

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
      component: Test,
    }
  ]
})
