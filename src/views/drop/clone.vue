<template>
    <div class="row">
        <div class="col-3">
            <h3>Draggable 1</h3>
            <!--<draggable
                class="dragArea list-group"
                :list="list1"
                :group="{ name: 'people', pull: 'clone', put: false }"
                @change="log"
                :invertSwap="true"
                swapThreshold="5"
            >
                <div
                    class="list-group-item"
                    v-for="element in list1"
                    :key="element.name"
                >
                    {{ element.name }}
                </div>
            </draggable>-->
            <nested :tasks="list1"
                    :group="{name: 'myLevel', pull: 'clone', put: 'false'}"
                    :sort="false"
                    :maxLevel="maxLevel"
                    @start="start"
                    @end="end"
                    @change="change"
                    @choose="choose"
                    @update="update"
                    @sort="sortFn"
                    @move="move"
            ></nested>
        </div>

        <div class="col-3">
            <right_nested :tasks="nestedList"></right_nested>
        </div>

        <rawDisplayer class="col-3" :value="list1" title="List 1"/>

        <rawDisplayer class="col-3" :value="nestedList" title="List 2"/>
        <audio controls ref="audio" src="http://audio01.dmhmusic.com/71_53_T10041177828_128_4_1_0_sdk-cpm/0210/M00/2C/25/ChR461pkcxmAezuKADUUkVgNG7E020.mp3?xcode=193c992b93260b564ed07b7e63abd45be25ea43"></audio>
    </div>
</template>

<script>
import draggable from "UTIL/vuedraggable";
import nested from './infra/nested'
import right_nested from './right_nested'

export default {
    name: "clone",
    display: "Nested",
    order: 2,
    components: {
        draggable, nested, right_nested
    },
    data() {
        return {
            maxLevel: 3,
            curLevel: null,
            list1: [
                {
                    name: "task 1",
                    level: 1,
                    tasks: [
                        {
                            name: "task 2",
                            level: 2,
                            tasks: [
                                {
                                    name: "task 7",
                                    level: 3,
                                    tasks: []
                                },
                                {
                                    name: "task 8",
                                    level: 3,
                                    tasks: []
                                },
                            ]
                        }
                    ]
                },
                {
                    name: "task 3",
                    level: 1,
                    tasks: [
                        {
                            name: "task 4",
                            level: 2,
                            tasks: []
                        }
                    ]
                },
                {
                    name: "task 5",
                    level: 1,
                    tasks: []
                }
            ],
            nestedList: [
                {
                    name: "task 1",
                    level: 1,
                    cid: 3,
                    tasks: [
                        {
                            name: "task 2",
                            level: 2,
                            cid: 4,
                            tasks: [
                                {
                                    name: "task 31",
                                    level: 3,
                                    tasks: [],
                                },
                                {
                                    name: "task 32",
                                    level: 3,
                                    cid: 5,
                                    tasks: [],

                                },
                                {
                                    name: "task 33",
                                    level: 3,
                                    tasks: [],
                                },
                            ]
                        }
                    ]
                },
            ]
        };
    },
    mounted() {
        this.$refs.audio.addEventListener('progress', function () {
            console.log('progress');
        }, false);
        this.curLevel = this.findLevelByCid(this.nestedList, 6);
    },
    methods: {
        log: function (evt) {
            window.console.log(evt);
        },
        start(evt) {
            console.log('left-start', evt);
        },
        end(evt) {
            console.log('left-end', evt);
        },
        move(evt) {
            console.log('left-move', evt);
        },
        change(evt) {
            console.log('left-change', evt);
        },
        choose(evt) {
            console.log('left-choose', evt);
        },
        update(evt) {
            console.log('left-update', evt);
        },
        sortFn(evt) {
            console.log('left-sortFn', evt);
        },
        findLevelByCid (list, cid) {
            let curLevel = null;
            list.forEach(item => {
                if (curLevel) {
                    return;
                }
                if (item.cid === cid) {
                    curLevel = item;
                } else if (item.tasks && item.tasks.length) {
                    curLevel = this.findLevelByCid(item.tasks, cid);
                }
            });
            return curLevel;
        }
    }
};
</script>
<style scoped>
.inner {
    min-height: 50px;
    background-color: cornflowerblue;
}
</style>
