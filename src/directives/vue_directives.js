import Vue from 'vue';

Vue.directive('tack', {
  inserted(el) {
    el.style.color = 'red';
  }
});
