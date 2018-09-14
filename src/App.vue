<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
  import Navi from './views/Navi.vue';
  import Header from './views/Header';
  import Footer from './views/Footer';

  export default {
    name: 'app',
    components: {Navi, Header, Footer}
  }
</script>

<style lang="scss">

  #app {
    .navi {
      position: fixed;
    }
  }
  .clear::before {
    content: '';
    display: block;
    clear: both;
  }
  .clear::after {
    content: '';
    display: block;
    clear: both;
  }
</style>
