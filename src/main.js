// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/directives/vue_directives'
import '@/filters/vue_filters'
import './util/clamp';
import App from './App'
import router from './router'
// import bootstrap from 'bootstrap'
// import 'jquery';
// require('bootstrap');
// window.jQuery = require('jquery');
// import 'bootstrap';

// Vue.use(bootstrap);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
