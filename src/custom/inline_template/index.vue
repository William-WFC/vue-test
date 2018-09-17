<template>
  <div class="inline">
      <t1 inline-template>
          <div class="test">
              <span>this is t1 of inline-template</span>
          </div>
      </t1>
      <hr>
      <t2>
          <span>t2 slot</span>

      </t2>
      <button @click="toUpdate">update</button>
  </div>
</template>

<script>
    import t1 from './cps/t1'

    export default {
        name: 'index',
        components: {
            t1,
            t2: () => import('./cps/t2')
        },
        updated() {
            console.log('index updated');
        },
        methods: {
            toUpdate() {
                this.$forceUpdate()
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
