<template>
  <div class="content">
    <div class="inner" v-html="content"></div>


  </div>
</template>

<script>
  export default {
    name: "train",
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
    mounted() {
      async function test(str) {
        return str;
      }
      test('before').then(data => {
        console.log(data);
        console.log(this);
      }).catch(err => {
        console.log(err);
        console.log(this);
      }).finally(any => {
        console.log(this);
        console.log(any);
      });
      console.log('--------------');
      console.log(test('before',).then().catch().finally());
      console.log('after')

    }


  }
</script>

<style scoped>
  .content {
    line-height: 30px;
  }
</style>
