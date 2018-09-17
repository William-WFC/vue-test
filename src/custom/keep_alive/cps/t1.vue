<template>
  <div class="t1" data-name="inner-t1" style="font-weight: bold">
      <label for="in1">
          账户
          <input v-bind="$attrs" :placeholder="$attrs.placeholder" id="in1" type="text">
      </label>
  </div>
</template>

<script>
    export default {
        name: 't1',
        inheritAttrs: false,
        props: ['a', 'b'],
        inject: ['printA'],
        data() {
            return {
                abc: 'abc',
                inject: 't1-inject'
            }
        },
        created() {
            // console.log(this.$root.a, 't1-a--');
            // console.log(this.$root.b, 't1-b--');
            // this.printA();

        },
        activated() {
            console.log('t1 activated');
        },
        deactivated() {
            console.log('t1 deactivated');
        },
    }
</script>

<style lang="scss" scoped>

</style>
