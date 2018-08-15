<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goTo('/home')" :class="{on: isCurrent('home')}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goTo('/topic')" :class="{on: isCurrent('topic')}">
      <span class="item_icon">
        <i class="iconfont icon-hui"></i>
      </span>
      <span>识物</span>
    </div>
    <div class="guide_item" @click="goTo('/catelist')" :class="{on: isCurrent('catelist')}">
      <span class="item_icon">
        <i class="iconfont icon-iconset0497"></i>
      </span>
      <span>分类</span>
    </div>
    <div class="guide_item" @click="goTo('/cart')" :class="{on: isCurrent('cart')}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </div>
    <div class="guide_item" @click="goTo('/ucenter')" :class="{on: isCurrent('ucenter')}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-guide',
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    isCurrent (path) {
      return this.$route.path.split('/')[1] === path
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../asset/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#d9d9d9)
    position fixed
    z-index 5
    left 0
    bottom 0
    background-color #fafafa
    width 100%
    height 1.30667rem
    display flex
    justify-content space-around
    align-items center
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #7f7f7f
      &.on
        color #833c40
      span
        font-size .32rem
        margin-top 0.09333rem
        line-height 1
        margin-bottom 2px
        .iconfont
          width .53333rem
          height .53333rem
          font-size .5rem
</style>
