<template>
    <div class="b">
        <label>账号2：</label>
        <input title="abc" type="text" v-model="account">
    </div>
</template>

<script>
    export default {
        name: 'testB',
        data() {
            return  {
                account: ''
            }
        },
        activated() {
            console.log('testB activated');
        },
        deactivated() {
            console.log('testB deactivated');
        },


    }
</script>

<style lang="scss" scoped>

</style>
