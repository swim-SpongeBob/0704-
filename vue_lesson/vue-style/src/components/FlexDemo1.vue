<template>
  <div class="flex-demo1">
      <header></header>
      <section class="main">
          <div class="main-wrap">
              <!-- 很大 -->
              <div class="top">我是最顶端</div>
              <div class="bottom">我是最低端</div>
          </div>
      </section>
      <footer></footer>
  </div>
</template>

<script>
export default {
name:'FlexDemo1'
}
</script>

<style lang='scss' scoped>
.flex-demo1{
    width: 375px;
    height: 667px;
    // background-color: #ccc;
    border: 1px solid red;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    header{
        width: 100%;
        height: 40px;
        background-color: salmon;
    }
    .main{
        width: 100%;
        background-color: pink;
        flex-grow: 1;
        overflow: auto;
        .main-wrap{
            height: 2000px;
            display: flex;
            flex-direction: column;
            justify-content: space-between
             ;
        }
    }
    footer{
        width: 100%;
        height: 50px;
        background-color: #ccc;
    }
}
</style>