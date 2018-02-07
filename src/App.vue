<template>
  <div id="app" class="container-fluid">
    <div class="col-sm-2 navi">
      <Navi/>
    </div>
    <div class="col-sm-10 col-sm-offset-2">
      <Header></Header>
      <router-view/>
      <Footer></Footer>
    </div>
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
