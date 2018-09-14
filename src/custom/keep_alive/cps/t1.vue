<template>
  <div class="t1">t1</div>
</template>

<script>
    export default {
        name: 't1',
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
