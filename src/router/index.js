import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'COMPS/HelloWorld';
import Directives from 'CUSTOM/Directives';
import Filters from 'CUSTOM/Filters';
import test from 'CUSTOM/test2';
import test4 from 'CUSTOM/test4';
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
            path: '/test4',
            component: test4,
        },
        {
            path: '/train',
            name: 'train',
            component: Train
        },
        {
            path: '/image',
            name: 'image',
            component: resolve => require(['CUSTOM/image_list.vue'], resolve)
        },
        // {
        //     path: '/main',
        //     name: 'main',
        //     component(resolve) {
        //         require(['../views/Main.vue'], resolve);
        //     }
        // },
        // {
        //     path: '/keep_alive',
        //     name: 'keep_alive',
        //     component(resolve) {
        //         require(['../custom/keep_alive/index.vue'], resolve);
        //     }
        // },
        {
            path: '/folder',
            // name: 'keep_alive',
            component(resolve) {
                require(['../custom/folder/index.vue'], resolve);
            }
        },
        {
            path: '/inline',
            component(resolve) {
                require(['../custom/inline_template/index.vue'], resolve);
            }
        },
        {
            path: '/async',
            component(resolve) {
                require(['../custom/async/index.vue'], resolve);
            }
        },
        {
            path: '/scope',
            component(resolve) {
                require(['../custom/slot_scope/index.vue'], resolve);
            }
        },
        {
            path: '/a',
            component(resolve) {
                require(['../views/animate/a_a.vue'], resolve);
            }
        },
        {
            path: '/b',
            component(resolve) {
                require(['../views/animate/a_b.vue'], resolve);
            }
        },
        {
            path: '/c',
            component(resolve) {
                require(['../views/animate/a_c.vue'], resolve);
            }
        },
        {
            path: '/d',
            component(resolve) {
                require(['../views/animate/a_d.vue'], resolve);
            }
        },
        {
            path: '/svg',
            component(resolve) {
                require(['../views/svg/index.vue'], resolve);
            }
        },
        {
            path: '/drop',
            component(resolve) {
                require(['../views/drop/index.vue'], resolve);
            }
        },
        {
            path: '/clone',
            component(resolve) {
                require(['../views/drop/clone.vue'], resolve);
            }
        },
        {
            path: '/css_shape',
            component(resolve) {
                require(['../views/css/css_shape.vue'], resolve);
            }
        },
    ]
})
