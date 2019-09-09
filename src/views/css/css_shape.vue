<template>
    <div class="css-shape">
        <div class="img" @click="clickedImg($event)"></div>
        <span class="word" @click="clickedSpan">CSS Shapes布局可以实现不规则的文字环绕效果，需要和浮动配合使用。</span>
    </div>
</template>

<script>
export default {
  name: "css_shape",
    methods: {
        clickedImg(e) {
            console.log('img');
        },
        clickedSpan() {
            console.log('span');
        }
    }
}
</script>

<style scoped lang="scss">
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
</style>
