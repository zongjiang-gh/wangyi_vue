<template>
  <div class="ucenter">
    <div class="ucenter-header">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <img src="../../asset/images/logo.png" alt="">
      <i class="iconfont icon-sousuo"></i>
      <i class="iconfont icon-gouwuche"></i>
    </div>
    <div class="ucenter-content">
      <div class="logo">
        <img src="../../asset/images/ucenter-logo.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="btn1" @click="$router.replace('/login?type=phone')">手机号码登录</div>
        <div class="btn2" @click="$router.replace('/login?type=mail')">邮箱登录</div>
        <p>
          手机号快捷注册
          <i class="iconfont icon-you"></i>
        </p>
      </div>
      <div class="ucenter-footer">
        <span><i class="iconfont icon-weixin"></i>微信</span>
        <span> | </span>
        <span><i class="iconfont icon-qq"></i>QQ</span>
        <span> | </span>
        <span><i class="iconfont icon-weibo"></i>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ucenter'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ucenter
  width 100%
  height 100%
  overflow hidden
.ucenter-header
  width 100%
  height 1.2rem
  background #f4f4f4
  display flex
  align-items center
  padding 0 .21333rem 0 .32rem
  box-sizing border-box
  i
    width .64rem
    height .58667rem
    font-size .7rem
    display inline-block
    vertical-align center
    margin-right .2rem
  img
    height .6rem
    margin auto
.ucenter-content
  width 100%
  height 100%
  background-color: #f2f5f4
  .logo
    padding 2.13333rem 0
    text-align center
    img
      height 1.2rem
      width 3.57333rem
  .btnWrap
    box-sizing border-box
    width 100%
    padding 0 .53333rem
    .btn1,.btn2
      width 100%
      height 1.25333rem
      text-align center
      margin-bottom .42667rem
      border-radius 2px
      line-height 1.25333rem
      font-size .4rem
    .btn1
      background #b4282d
      color #fff
    .btn2
      color #b4282d
      border 1px solid #b4282d
    p
      width 100%
      text-align center
      font-size .35rem
      i
        font-size .4rem

.ucenter-footer
  width 100%
  position absolute
  bottom 1.5rem
  left 0
  font-size .45rem
  display flex
  justify-content center
  color #7e8c8d
  i
    font-size .45rem
  span
    margin-left .3rem
</style>
