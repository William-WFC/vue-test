<template>
    <div class="scope">
        <todo_list v-bind:todos="todos">
            <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
            <template slot-scope="slotProps">
                <!-- 为待办项自定义一个模板，-->
                <!-- 通过 `slotProps` 定制每个待办项。-->
                <span v-if="slotProps.todo.isComplete" @click="clicked(slotProps, isShow)">✓</span>
                {{ slotProps.todo.text }}
            </template>
        </todo_list>
    </div>
</template>

<script>
    import todo_list from './cps/todo_list'
    export default {
        components: {todo_list},
        name: 'slot_scope',
        data() {
            return {
                todos: [
                    {
                        text: 'a',
                        value: 1,
                        isComplete: 1,
                    },
                    {
                        text: 'b',
                        value: 2,
                        isComplete: 0,
                    },
                ],
                isShow: true,
            }
        },
        methods: {
            clicked(obj, flag) {
                console.log(obj, flag)
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
