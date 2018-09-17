import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'COMPS/HelloWorld';
import Directives from 'CUSTOM/Directives';
import Filters from 'CUSTOM/Filters';
import test from 'CUSTOM/test2';
import Train from 'CUSTOM/Train';

Vue.use(Router);

export default new Router({
    // mode: 'history',
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
            path: '/test',
            name: 'Test',
            component: test,
        },
        {
            path: '/train',
            name: 'train',
            component: Train
        },
        {
            path: '/main',
            name: 'main',
            component(resolve) {
                require(['../views/Main.vue'], resolve);
            }
        },
        {
            path: '/keep_alive',
            name: 'keep_alive',
            component(resolve) {
                require(['../custom/keep_alive/index.vue'], resolve);
            }
        },
        {
            path: '/folder',
            // name: 'keep_alive',
            component(resolve) {
                require(['../custom/folder/index.vue'], resolve);
            }
        },
    ]
})
