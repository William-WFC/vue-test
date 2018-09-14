<template>
  <div class="alive">
      abc
      <keep-alive>
          <testA v-if="isShowA"/>
          <testB v-else/>
      </keep-alive>
      <button @click="switchCom">切换</button>

  </div>
</template>

<script>
    import testA from './testA'
    import testB from './testB'

    export default {
        name: 'index',
        components: {testA, testB},
        data() {
            return {
                isShowA: true,
            }
        },
        activated() {
            console.log('index activated');
        },
        deactivated() {
            console.log('index deactivated');
        },
        methods: {
            switchCom() {
                this.isShowA = !this.isShowA;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
