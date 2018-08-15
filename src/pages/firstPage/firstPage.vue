<template>
  <div class="firstPage">
    <img src="../../asset/images/f1.jpg" alt="">
    <img src="../../asset/images/f2.jpg" alt="">
    <img src="../../asset/images/f3.jpg" alt="">
    <div class="chuping" @click="$router.replace('/home')"></div>
  </div>
</template>

<script>
export default {
  name: 'first-pagee'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.firstPage
  width 100%
  height 100%
  background #eee
  img
    display block
  .chuping
    width 4rem
    height .5rem
    position absolute
    bottom 4.8rem
    left 3rem
</style>
