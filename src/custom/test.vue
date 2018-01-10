<template>
  <div id="content">
    <h3 class="title">伪元素的应用</h3>
    <h4>应用<span class="number"></span>清除浮动或BFC造成的高度坍塌（不用新建元素）</h4>
    <div class="box clear">
      <div class="inner-box">1</div>
      <div class="inner-box">2</div>
      <div class="inner-box">3</div>
      <div class="inner-box">4</div>
    </div>
    <div class="box-after">box-after</div>
    <h4>应用<span class="number"></span>画分割线</h4>
    <p class="divide">or</p>
    <h4>应用<span class="number"></span>计数器</h4>
    <div class="choose">
      <label for="choose1"><input type="checkbox" name="" id="choose1">1</label>
      <label for="choose2"><input type="checkbox" name="" id="choose2">2</label>
      <label for="choose3"><input type="checkbox" name="" id="choose3">3</label>
      <label for="choose4"><input type="checkbox" name="" id="choose4">4</label>
    </div>
    <p>您选择了<span class="count"></span>水果</p>
    <h4>应用 <span class="number"></span>计数器嵌套</h4>
    <ol class="ol">
      <li>item</li>
      <li>item
        <ol>
          <li>item</li>
          <li>item</li>
        </ol>
      </li>
      <li>item
        <ol>
          <li>item</li>
          <li>item
            <ol>
              <li>item</li>
              <li>item</li>
            </ol>
          </li>
          <li>item</li>
        </ol>
      </li>
    </ol>
    <h4>应用 <span class="number"></span>平行四边形</h4>
    <div class="skew">this is a 平行四边形</div>
    <h4>应用 <span class="number"></span>梯形</h4>
    <div class="normal">this is a 梯形</div>
    <div class="skew2">this is a 梯形</div>
    <h4>应用 <span class="number"></span>多列布局</h4>
    <div class="box1">
      <span class="circle">1</span>
      <span class="circle">2</span>
      <span class="circle">3</span>
      <span class="circle">4</span>
    </div>
  </div>
</template>
<script>
  export default {}
</script>

<style lang="scss">
  #content {
    .title {
      text-align: center;
    }
    .box {
      .inner-box {
        width: 300px;
        height: 100px;
        background-color: aqua;
        float: left;
      }
    }
    .divide {
      text-align: center;
      position: relative;
      &::before, &::after {
        content: '';
        width: 40%;
        height: 1px;
        background-color: red;
        position: absolute;
        top: 10px;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
    .box-after {
      background-color: bisque;
      margin-top: 200px;
      height: 100px;
    }

  }
</style>
<style lang="scss">
  #content {
    margin-left: 20px;
    margin-bottom: 20px;
    counter-reset: apply;
    h4 {
      counter-increment: apply;
      .number::before {
        color: blue;
        content: counter(apply)'. ';
      }
    }
    .choose {
      counter-reset: fruit;
      input:checked {
        counter-increment: fruit;
      }
    }
    .count {
      color: aqua;
      &::before {
        content: counter(fruit)"种";
      }
    }
  }
</style>
<style lang="scss">
  #content {
    ol {
      counter-reset: section;
      list-style-type: none;
      li::before {
        counter-increment: section;
        content: counters(section, '.') ' ';
      }
    }
    .skew {
      text-align: center;
      width: 200px;
      height: 50px;
      line-height: 50px;
      position: relative;
      text-transform: uppercase;
      color: blue;
      &::before {
        content: '';
        display: block;
        width: 200px;
        height: 50px;
        position: absolute;
        z-index: -1;
        background-color: gray;
        transform: skew(-30deg, 0);
      }
    }
    .skew2, .normal {
      text-align: center;
      width: 200px;
      height: 80px;
      line-height: 80px;
      position: relative;
      text-transform: uppercase;
      color: blue;
      &::before {
        content: '';
        display: block;
        width: 200px;
        height: 80px;
        position: absolute;
        z-index: -1;
        background-color: gray;
      }
    }
    .skew2::before {
      /*transform: perspective(20px) rotateX(5deg) scale(1.2);*/
      /*transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);*/
      transform: perspective(20px) rotateX(5deg);
      transform-origin: 20px 0;
    }

  }

</style>
<style lang="scss">
  .box1 {
    /*display: flex;*/
    /*justify-content: space-between;*/
    text-align: justify;
    border: 1px solid;
    .circle {
      width: 50px;
      height: 50px;
      background-color: orangered;
      border-radius: 50%;
      display: inline-block;
      text-align: center;
      line-height: 50px;

      justify-content: center;
      align-items: center;

    }
    &::after {
      content: '';
      display: inline-block;
      width: 100%;
    }

  }
</style>
