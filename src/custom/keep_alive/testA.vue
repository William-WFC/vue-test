<template>
    <div class="a">
        <label>账号1：</label>
        <input title="abc" type="text" v-model="account">
        <t1 v-bind="$props" data-name="t1" class="t1-box" style="color: orangered" placeholder="请输入账号："/>
        <button @click="printB">print dataB</button>
    </div>
</template>

<script>
    import t1 from './cps/t1';

    export default {
        name: 'testA',
        components: {t1},
        props: ['a', 'b'],
        inject: {
            printA: 'printA',
            dataB: {
                // from: 'dataB',
                // default: 'this is default dataB...'
            },
            // dataB: 'dataB'

        },
        data() {
            return  {
                account: '',
                inject: 'testA-inject',
                testDataB: this.dataB,
                clickedCount: 0,
            }
        },
        created() {
            this.printA();
            console.log(this.dataB, 'dataB');
            this.$on('hook:mounted', function () {
                console.log('hook:mounted')
            })
        },
        beforeDestroy() {
            console.log('beforeDestroy')

        },
        activated() {
            // console.log('testA activated');
        },
        deactivated() {
            // console.log('testA deactivated');
        },
        methods: {
            printB() {
                this.clickedCount++;
                console.log(this.clickedCount);
                this.$emit('clicked1');
                this.$emit('clicked2');
            }
        }


    }
</script>

<style lang="scss" scoped>

</style>
