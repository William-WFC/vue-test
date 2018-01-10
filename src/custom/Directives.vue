<template>
  <p class="box" v-tack>
    This is test for vue directives.
    <input type="text" v-focus>
    <input type="text" v-circle>
  </p>
</template>

<script>
  export default {
    name: 'directives',
    data() {
      return {}
    },
    directives: {
      focus: {
        inserted(el) {
          el.focus();
        },
      },
      circle: {
        inserted(el) {
          el.style.border = '1px solid red';
        }
      }
    }
  }
</script>

<style lang="scss">
  .box {
    background-color: aliceblue;
  }

</style>
