<template>
    <ul>
        <li v-for="child in children">
            <folder :folder="child.folder"/>
            <span>{{ child.name }}</span>
        </li>
    </ul>
</template>

<script>
    import folder from './folder';

    export default {
        name: 'folder-content',
        components: {folder},
        props: ['children']
    }
</script>

<style lang="scss" scoped>

</style>
