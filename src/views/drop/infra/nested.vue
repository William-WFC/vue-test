<template>
    <draggable class="dragArea" tag="ul" :list="tasks" :group="group" :sort="sort"
               @start="start"
               @end="end"
               :move="move">
        <li v-for="el in tasks" :key="el.name">
            <p>{{ el.name }}-{{el.level}}</p>
            <nested :tasks="el.tasks"
                    :group="group"
                    :sort="sort"
                    @start="start"
                    @end="end"
                    @change="change"
                    @choose="choose"
                    @update="update"
                    @sort="sortFn"
                    @move="move"/>
        </li>
    </draggable>
</template>
<script>
import draggable from "UTIL/vuedraggable";

export default {
    props: {
        tasks: {
            required: true,
            type: Array
        },
        group: {
            type: Object,
        },
        sort: {
            type: Boolean,
            default: true,
        },
        maxLevel: {
            type: Number,
        }
    },
    components: {
        draggable
    },
    name: "nested",
    data () {
        return {
            // maxLevel: 3,
        }
    },
    methods: {
        start(evt) {
            this.$emit('start', evt);
        },
        end(evt) {
            this.$emit('end', evt);
        },
        move(evt) {
            this.$emit('move', evt);
        },
        change(evt) {
            this.$emit('change', evt);
        },
        choose(evt) {
            this.$emit('choose', evt);
        },
        update(evt) {
            this.$emit('update', evt);
        },
        sortFn(evt) {
            this.$emit('sort', evt);
        },
    }
};
</script>
<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}
</style>
