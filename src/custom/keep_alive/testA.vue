<template>
    <div class="a">
        <label>账号1：</label>
        <input title="abc" type="text" v-model="account">
        <t1/>
    </div>
</template>

<script>
    import t1 from './cps/t1';

    export default {
        name: 'testA',
        components: {t1},
        data() {
            return  {
                account: ''
            }
        },
        activated() {
            console.log('testA activated');
        },
        deactivated() {
            console.log('testA deactivated');
        },


    }
</script>

<style lang="scss" scoped>

</style>
