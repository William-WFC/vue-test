<template>
  <div class="test3">
    <p class="line" ref="line">
      在WebKit浏览器或移动端（绝大部分是WebKit内核的浏览器）的页面实现比较简单，可以直接使用WebKit的CSS扩展属性(WebKit是私有属性)-webkit-line-clamp；注意：这是
    </p>
  </div>
</template>

<script>
  export default {
    name: 'test3',
    mounted() {
      // $clamp(this.$refs.line, {clamp: 3, useNativeClamp: false})
      window.findReverseSize = this.findReverseSize;
    },
    methods: {
      findReverseSize(arr) {
        if (!arr || !Array.isArray(arr)) {
          return '请输入数组'
        }
        let len = arr.length;
        let i;
        let reverseSize = 0;
        for (i = 0; i < len - 1; i++) {
          let j;
          for (j = i; j < len; j++) {
            if (arr[i] > arr[j]) {
              reverseSize++;
            }
          }
        }
        return reverseSize;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test3 {
    .line {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      width: 300px;
      border: 1px solid orangered;
      -webkit-appearance: textarea;
    }
  }
</style>
