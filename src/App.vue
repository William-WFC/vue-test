<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    overflow: auto;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow: auto;
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
