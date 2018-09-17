<template>
    <div class="t2">
        <span>this is t2 from template tag</span>
        <slot/>

    </div>
</template>



<script>

    export default {
        name: 't2',
        template: `<div>this is t2</div>`,
        updated() {
            console.log('t2 updated');
        },
    }
</script>

<style lang="scss" scoped>

</style>
