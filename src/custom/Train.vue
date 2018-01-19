<template>
    <div class="content" v-html="content"></div>
</template>

<script>
    export default {
        data() {
          return {
            content: '<div>' +
            '<h3>测试效果</h3>' +
            '<p>测试效果测试效果测试效果测试效果测试效 <span>测试效果</span> 果测试效果测试效果测试效果测试效果测试效果测试效果测' +
            '试效果果测试效果测试效果测试效果测试效果测试效果测试效果测试效果果测试效果测试效果测试效果测试效果测试效果测试效果测试' +
            '效果果测试效果测试效果测试效果测试效果测试效果测试效果测试效果果测试效果测试效果测试效果测试效果测试效果测试效果测试效果</p>' +
            '</div>'
          }
        },
        name: "train"
    }
</script>

<style scoped>
  .content {
    line-height: 30px;
  }
</style>
