<template>
  <div class="home" ref="home">
    <div class="home-header-wrap">
      <div class="home-header">
        <div class="open-app " v-show="hide">
          <i class="iconfont icon-guanbi" @click="handleHide"></i>
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
    <div class="newUser" v-if="maskShow">
      <i class="iconfont icon-guanbi" @click="maskShow = false"></i>
      <div class="newUser-good">
        <span>新人专享礼包</span>
        <p>感谢使用网易严选, 已为你准备了一份专享礼</p>
        <div class="newGood">
          <img src="../../asset/images/crm.jpg" alt="毛巾">
          <div class="newGoodContent">
            <span class="title">埃及进口长绒棉毛巾</span>
            <span class="name">Ralph Lauren</span>
            <span class="price">￥32.00 <span class="old-price">￥199.00</span></span>
          </div>
        </div>
        <div class="btn1">领券立减￥10.00</div>
        <div class="btn2">查看更多特惠商品</div>
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
      activeIndex: 0,
      hide: true,
      maskShow: true
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
    },
    handleHide () {
      this.hide = false
      this.$refs.home.style.paddingTop = '2rem'
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
    padding-top 3.24rem
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


    .newUser
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background rgba(0,0,0,.5)
      z-index 30
      i
        display block
        position: absolute
        top 1rem
        right .5rem
        color #fff
        width 1rem
        height 1rem
        line-height 1rem
        text-align center
        border-radius 50%
        border 1px solid #fff
        font-size .5rem

      .newUser-good
        width 8.4rem
        height 9.22667rem
        background-color: #fff
        border-radius .2rem
        position: absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        padding .3rem .3rem
        box-sizing border-box
        >span
          display block
          padding-top .3rem
          font-size .55rem
          font-weight 700
          text-align center
          &:first-child
            color: #333
            &::before,&::after
              display inline-block
              content: ''
              width .6rem
              height .05rem
              background: #333
              margin .2rem .2rem .15rem
        >p
          text-align center
          color #aaa
          margin .3rem 0 .5rem 0
        .newGood
          width 100%
          height 3rem
          background-color: #eee
          display flex
          flex-flow row nowrap
          img
            height 100%
          .newGoodContent
            padding .3rem
            display flex
            flex-flow column
            span
              margin-top .3rem
              &.title
                font-size .4rem
              &.name
                border-radius 3px
                border 1px solid #aaa
                line-height .4rem
                width 2.4rem
                text-align center
              &.price
                color b4282d
                .old-price
                  color #aaa
                  text-decoration through
        .btn1,.btn2
          width 100%
          height 1.25333rem
          text-align center
          margin-top .42667rem
          border-radius 2px
          line-height 1.25333rem
          font-size .4rem
        .btn1
          background #b4282d
          color #fff
        .btn2
          color #b4282d
          border 1px solid #b4282d

</style>
