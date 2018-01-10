import Vue from 'vue';

Vue.filter('trim', function (value) {
  return value.toString().trim();
});
