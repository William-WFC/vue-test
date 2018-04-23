<template>
  <div>
    <ul @focusin="ulFocus">
      <li tabindex="1">One</li>
      <li tabindex="0">Zero</li>
      <li tabindex="2">Two</li>
      <li tabindex="-1">Minus one</li>
      <li tabindex="-2">Minus two</li>
    </ul>
    <div class="img">

    </div>
    <div>
      <span @click="clicked">test</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'test2',
    methods: {
      showFocus(e) {
        console.log(e.target);
      },
      ulFocus(e) {
        console.log(e.target);
      },
      clicked(e) {
        console.log(e);
      }
    }
  }
</script>

<style lang="scss">
  .img {
    width: 922px;
    height: 420px;

    background: url("~IMG/w_bg.png");
  }
</style>
