<template>
  <div class="index">
      to show t1.
      <t1/>

  </div>
</template>

<script>
    import loading from './cps/loading'
    import error from './cps/error'

    export default {
        name: 'index',
        components: {
            t1: () => ({
                component: resolve => {
                    setTimeout(() => {
                        require(['./cps/t1.vue'], resolve)
                    }, 1000)
                },
                loading: loading,
                error: error,
                delay: 2000,
                timeout: 5000,

            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
