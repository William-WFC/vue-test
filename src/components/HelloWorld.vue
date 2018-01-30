<template>
  <div class="hello">
    <!--<div class="editor">

    </div>-->
    <div class="content" ref="content">
      <div class="content-inner" ref="contentInner">

      </div>
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor';
  import $ from 'jquery';
  import 'simple-module';
  import simditor from 'simditor';
  import 'codemirror';
  import 'summernote';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        isShowTarget: true,
      }
    },
    mounted() {
      // let editor = new E('.editor');
      // editor.create();
      let contentEl = this.$refs.content;
      contentEl.addEventListener('scroll', this.scroll.bind(this, contentEl), false);

    },
    methods: {
      scroll(e) {
        if (this.isShowTarget) {
          console.log(e);
          // let target = e.target;
          // let currentTarget = e.currentTarget;
          // console.log('target: ', target);
          // console.log('currentTarget: ', currentTarget);
          this.isShowTarget = false;
        }

      }
    }
  }
</script>

<style lang="scss">
  .hello {
    .content {
      width: 500px;
      height: 200px;
      border: solid 3px blue;
      overflow-y: auto;
      .content-inner {
        width: 80%;
        height: 1200px;
        background-color: orangered;
      }
    }

  }
</style>
