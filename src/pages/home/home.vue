<template>
  <div class="home">
    <div class="home-header-wrap">
      <div class="home-header">
        <div class="open-app hide">
          <i class="iconfont icon-guanbi"></i>
          <div class="open-content">
            <img src="../../asset/images/wangyi.png" alt="网易">
            <div class="open-text">
              <p class="txt1">网易严选</p>
              <p class="txt2">立即领取App新人专享1000元礼包</p>
            </div>
          </div>
          <a href="javascript:;" class="to-app">打开App</a>
        </div>
        <div class="search">
          <a href="javascript:;" class="logo"></a>
          <div class="search-content">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共11765款好物</span>
          </div>
        </div>
        <div class="header-tab">
          <div class="tab-wrap">
            <ul class="tab" ref="tab">
              <li class="tab-item" :class="{active:index === activeIndex}"
                  v-for="(item,index) in data" :key="index"
                  @click="active(index)"><span class="item-txt">{{item.name}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="scroll-content">
        <router-view></router-view>
        <HomeFooter />
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import HomeFooter from '../../components/homeFooter/homeFooter'
export default {
  name: 'home',
  data () {
    return {
      activeIndex: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      new BScroll('.scroll-wrap',{
        click: true
      })
    })
    this.$store.dispatch('getData',this._getTabWidth)
  },
  computed: {
    ...mapState(['data'])
  },
  methods: {
    active (index) {
      this.activeIndex = index;
    },
    _getTabWidth () {
      this.$nextTick(() => {
        const lis = this.$refs.tab.children
        let width = lis[lis.length-1].offsetLeft + lis[lis.length-1].offsetWidth
        this.$refs.tab.style.width = width + 'px'
        new BScroll('.tab-wrap',{
          scrollX: true,
          startX: 0,
          click: true
        })
      })
    }
  },
  components: {
    HomeFooter
  },
  watch:{
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../asset/stylus/mixins.styl"
  .home
    width 10rem
    height 100%
    margin-left auto
    margin-right auto
    box-sizing border-box
    padding-top 2rem
    padding-bottom 1.5rem
    .home-header-wrap
      position relative
      background #fff
      .home-header
        width 100%
        position fixed
        top 0
        left 0
        z-index 5
        .open-app
          clearFix()
          width 10rem
          box-sizing border-box
          padding .16rem .26667rem .16rem .21333rem
          overflow hidden
          background #333
          color #fff
          .icon-guanbi
            font-size .3rem
            margin-top .14667rem
            margin-right .16rem
            line-height .666667rem
            width .666667rem
            text-align center
            float left
          .open-content
            float left
            overflow hidden
            img
              float left
              margin-right .16rem
            .open-text
              float right
              padding-top .10667rem
              p
                line-height .34667rem
              p.txt1
                font-size .32rem
                margin-bottom .10667rem
              p.txt2
                font-size 2.93333

          .to-app
            width 1.84rem
            margin-top .12rem
            font-size .32rem
            line-height .69333rem
            float right
            text-align center
            vertical-align middle
            color #fff
            border 1px solid #b4282d
            background-color #b4282d
            border-radius 4px
            overflow hidden

        .search
          background #fff
          position relative
          display flex
          flex-flow row nowrap
          align-items center
          padding .21333rem .4rem
          .logo
            width 1.84rem
            height .53333rem
            display inline-block
            margin-right .26667rem
            background url("../../asset/images/logo.png")
            background-size cover
            background-position center
          .search-content
            color #666
            flex-grow 1
            display flex
            align-items center
            flex-flow row nowrap
            justify-content center
            height .74667rem
            font-size .37333rem
            background-color #ededed
            border-radius .10667rem
            i
              display inline-block
              width .37333rem
              height .37333rem
              margin-right .2rem
              line-height .37333rem
              vertical-align middle
              font-size .5rem
        .header-tab
          width 100%
          .tab-wrap
            width 100%
            overflow hidden
            .tab
              display flex
              flex-flow row nowrap
              padding 0 .4rem
              min-width 100%
              .tab-item
                margin-left .64rem
                flex-shrink: 0
                position relative
                &:first-child
                  margin-left .34rem
                .item-txt
                  display inline-block
                  padding 0 .21333rem
                  line-height .8rem
                  font-size .37333rem
                  text-align center
                  color #333
                &.active
                  color #b4282d
                  .item-txt::after
                    content ' '
                    position absolute
                    left 0
                    bottom 0
                    width 100%
                    height .05333rem
                    background-color #b4282d
    .scroll-wrap
      width 100%
      height 100%
      box-sizing border-box
      overflow hidden
      .scroll-content
        min-height 2000px


</style>
