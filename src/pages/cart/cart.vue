<template>
  <div class="cart">
    <div class="cart-header">
      <div>购物车</div>
      <span>领券</span>
    </div>
    <div class="cart-content">
      <div class="service-policy">
        <ul>
          <li v-for="(item,index) in home.policyDescList" :key="index">
            <a href="javascript:;">
              <i class="iconfont icon-yuancircle46"></i>
              <span>{{item.desc}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="cart-img">
        <img src="../../asset/images/cart.png" alt="">
        <span>去添加点什么吧</span>
        <div @click="$router.replace('/ucenter')">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'cart',
  computed: {
    ...mapState(['home'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cart
  width 100%
  height 100%
.cart-header
  width 100%
  height 6%
  display flex
  flex-flow row no wrap
  align-items center
  font-size .45rem
  div
    width 90%
    text-align center
  span
    width 20%
    text-align center
    font-size .35rem
    color #b4282d
.cart-content
  width 100%
  height 94%
  background #eee
  padding-bottom 1.5rem
  box-sizing border-box
  .service-policy
    width 100%
    ul
      width 100%
      display flex
      flex-flow row nowrap
      height .96rem
      align-items center
      justify-content space-around
      a
        text-align center
        font-size .32rem
        color #333
        vertical-align middle
        i
          font-size .1rem
          vertical-align middle
        span
          margin-left .10667rem
          line-height .42667rem

  .cart-img
    width 100%
    height 90%
    display flex
    flex-flow column
    align-items center
    justify-content center
    img
      width 3.30667rem
      height 3.30667rem
    span
      font-size .35rem
      color #999
    >div
      margin-top .5rem
      width 5rem
      height 1.2rem
      line-height 1.2rem
      text-align center
      font-size .4rem
      color #fff
      background: #b4282d
      border-radius .1rem

</style>
