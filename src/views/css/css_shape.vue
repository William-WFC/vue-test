<template>
    <div class="box">
        <div class="css-shape">
            <div class="img" @click="clickedImg($event)"></div>
            <span class="word" @click="clickedSpan">CSS Shapes布局可以实现不规则的文字环绕效果，需要和浮动配合使用。</span>
        </div>
        <div class="item">
            <div class="top" style="-webkit-box-orient: vertical;">
                为了能让手机的正脸看上去只有一块屏幕，手机厂商近年增加屏占比的方式可谓层出不穷，若要按照武侠小说那样分门别派，我能随口说出四个派系
            </div>
            <div class="bottom">（必学）</div>
        </div>
        <div class="my-obj">
            <span>init: {{myObj.init}}</span>
            <span :class="{one: myObj.one}" @click="clickedOne">one: {{myObj.one}}</span>
            <span :class="{two: myObj.two}" @click="clickedTwo">two: {{myObj.two}}</span>
        </div>
        <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "css_shape",
    data () {
        return {
            myObj: {
                init: 1,
            }
        }
    },
    methods: {
        clickedImg(e) {
            console.log('img');
        },
        clickedSpan() {
            console.log('span');
        },
        clickedOne () {
            console.log('clickedOne');
            this.myObj.one = this.myObj.one ? 0 : 1;
        },
        clickedTwo () {
            console.log('clickedTwo');
            this.myObj.two = this.myObj.two ? 0 : 1;
        }
    }
}
</script>

<style scoped lang="scss">
.my-obj {
    color: gray;
    .one {
        color: gold;
    }
    .two {
        color: cornflowerblue;
    }
}
.css-shape {
    width: 300px;
    .img {
        background: url("~IMG/help_ico.png") no-repeat center / 100%;
        width: 68px;
        height: 72px;
        float: left;
        shape-outside: url("~IMG/help_ico.png");
    }
}

.item {
    line-height: 36px;
    width: 275px;
    height: 162px;
    background-color: gray;
    clear: both;
    .top {
        margin: 0 auto 0;
        width: 224px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        background-color: cornflowerblue;
        line-height: 36px !important;
        height: 108px;
    }
    .bottom {
        /*display: none;*/
        text-align: center;
        background-color: gold;
    }

}
</style>
