<template>
    <div class="right-nested">
        <h3>Draggable 2</h3>
        <nested :tasks="tasks"
                :group="{name: 'myLevel'}"
                @start="start"
                @end="end"
                @change="change"
                @choose="choose"
                @update="update"
                @sort="sortFn"
                @move="move"></nested>
    </div>
</template>

<script>
import nested from './infra/nested'

export default {
    name: "right_nested",
    props: {
        tasks: {
            type: Array,
        }
    },
    components: {
        nested
    },
    methods: {
        start(evt) {
            console.log('right-start', evt);
            return false;
        },
        end(evt) {
            console.log('right-end', evt);
        },
        move(evt) {
            console.log('right-move', evt);
            return false;
        },
        change(evt) {
            console.log('right-change', evt);
        },
        choose(evt) {
            console.log('right-choose', evt);
        },
        update(evt) {
            console.log('right-update', evt);
        },
        sortFn(evt) {
            console.log('right-sortFn', evt);
        },
    }
}
</script>

<style scoped lang="scss">
</style>
