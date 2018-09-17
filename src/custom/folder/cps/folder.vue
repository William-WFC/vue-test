<template>
    <p>
        <span>{{ folder.name }}</span>
        <folderContent :children="folder.children"/>
    </p>
</template>

<script>
    // import folderContent from './folderContent';

    export default {
        name: 'folder',
        components: {
            folderContent: () => import('./folderContent.vue')
        },
        props: ['folder'],
        // beforeCreate: function () {
        //     this.$options.components.folderContent = require('./folderContent.vue').default
        // }

    }
</script>

<style lang="scss" scoped>

</style>
