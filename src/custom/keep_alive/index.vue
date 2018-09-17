<template>
  <div class="alive">
      abc
      <keep-alive include="a">
          <testA :a="1" :b="2" v-if="isShowA" ref="testA"/>
          <testB v-else/>
      </keep-alive>
      <button @click="switchCom">切换</button>
      <button @click="add">+1</button>

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
                inject: 'index-inject',
                dataB: 1
            }
        },
        mounted() {
            this.$refs.testA.$on('clicked1', () => {
                if (this.$refs.testA.clickedCount>=5) {
                    this.$refs.testA.$off();
                }
                console.log('testA clicked111');
            });
            this.$refs.testA.$on('clicked2', () => {
                console.log('testA clicked222');
                if (this.$refs.testA.clickedCount>=10) {
                    this.$refs.testA.$off('clicked2');
                }
            });

        },
        provide: function () {
            return {
                printA: this.printA,
                dataB: this.dataB,
            }
        },
        methods: {
            switchCom() {

                this.isShowA = !this.isShowA;
            },
            printA() {
                console.log(this.inject);
            },
            add() {
                this.dataB++;
            },

        }
    }
</script>

<style lang="scss" scoped>

</style>
