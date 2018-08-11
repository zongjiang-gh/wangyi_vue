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
            <ul class="tab">
              <li class="tab-item active"><span class="item-txt">推荐</span></li>
              <li class="tab-item"><span class="item-txt">推荐</span></li>
              <li class="tab-item"><span class="item-txt">鞋包配饰</span></li>
              <li class="tab-item"><span class="item-txt">推荐</span></li>
              <li class="tab-item"><span class="item-txt">推荐</span></li>
              <li class="tab-item"><span class="item-txt">推荐</span></li>
              <li class="tab-item"><span class="item-txt">推荐</span></li>
              <li class="tab-item"><span class="item-txt">推荐</span></li>
              <li class="tab-item"><span class="item-txt">推荐</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll-wrap">
      <div class="scroll-content">
        <div class="swiper-wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../asset/images/1.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../asset/images/2.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../asset/images/1.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../asset/images/2.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../asset/images/1.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../asset/images/2.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../asset/images/1.jpg" alt=""></div>
              <div class="swiper-slide"><img src="../../asset/images/2.jpg" alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <div class="service-policy">
            <ul>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-yuanquanduihao"></i>
                  <span>网易自营品牌</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-yuanquanduihao"></i>
                  <span>30天无忧退货</span>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i class="iconfont icon-yuanquanduihao"></i>
                  <span>48小时快速退款</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Split />
        <div class="brand">
          <div class="brand-header">
            <a href="javascript:;">
              <span> 品牌制造商直供</span>
              <i class="iconfont icon-youyuanjiantou"></i>
            </a>
          </div>
          <ul class="brand-content">
            <li>
              <img src="../../asset/images/yifu.png" alt="衣服">
              <div class="productor">
                <h4>CK制造商</h4>
                <div>25元起</div>
                <i class="iconfont icon-mojitianqishangxinbiaoqian"></i>
              </div>
            </li>
            <li>
              <img src="../../asset/images/yifu.png" alt="衣服">
              <div class="productor">
                <h4>CK制造商</h4>
                <div>25元起</div>
                <i class="iconfont icon-mojitianqishangxinbiaoqian"></i>
              </div>
            </li>
            <li>
              <img src="../../asset/images/yifu.png" alt="衣服">
              <div class="productor">
                <h4>CK制造商</h4>
                <div>25元起</div>
                <i class="iconfont icon-mojitianqishangxinbiaoqian"></i>
              </div>
            </li>
            <li>
              <img src="../../asset/images/yifu.png" alt="衣服">
              <div class="productor">
                <h4>CK制造商</h4>
                <div>25元起</div>
                <i class="iconfont icon-mojitianqishangxinbiaoqian"></i>
              </div>
            </li>
          </ul>
        </div>
        <Split />
        <div class="new-goods-wrap">
          <div class="new-goods">
            <div class="new-goods-header">
              <a href="javascript:;">
                <span>新品首发</span>
                <div>
                  <span>查看全部</span>
                  <i class="iconfont "></i>
                </div>
              </a>
            </div>
            <div class="new-goods-container">
              <ul class="new-goods-content">
                <li class="new-good">
                  <a href="javascript:;">
                    <div class="good-img">
                      <img src="" alt="">
                    </div>
                    <div class="good-anniversary">七夕推荐</div>
                    <div class="good.name">爱浸晨昏·玫瑰花束</div>
                    <div class="good-desc">每一朵玫瑰，都代表着挚爱</div>
                    <div class="good-price">￥109</div>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'

export default {
  name: 'home',
  mounted () {
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
    var scroll = new BScroll('.scroll-wrap')
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
  padding-bottom 1.30667rem
  .home-header-wrap
    height 1.97rem
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
          float: left
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
          width: 1.84rem
          height: .53333rem
          display: inline-block
          margin-right: .26667rem
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
            display: inline-block
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
              position relative
              &:first-child
                margin-left 0
              .item-txt
                display inline-block
                padding 0 .21333rem
                line-height .8rem
                font-size .37333rem
                text-align center
                color #333
                white-space nowrap
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
    overflow hidden
    .scroll-content
      height 2000px
  .swiper-wrap
    width 100%
    .swiper-container
      width 100%
      height 5.33333rem
      img
        width 100%
        height 5.33333rem
      .swiper-pagination
        bottom .4rem
        width 100%
        .swiper-pagination-bullet
          margin 0 .13333rem 0 0
          width .53333rem
          height .05333rem
          display inline-block
          background #666
          opacity .4
          border-radius 0
        .swiper-pagination-bullet-active
          opacity: 1;
          background: #000;
          border-radius: 0;
  .service-policy
    width 100%
    ul
      width 100%
      display: flex
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
          font-size .32rem
          color #b4282d
          font-weight 700
        span
          margin-left .10667rem
          line-height .42667rem


  .brand
    width 100%
    background #fff
    .brand-header
      width 100%
      height 1.46667rem
      display flex
      align-items center
      justify-content center
      a
        color #000
        font-size .42667rem
        i
          color #666
          margin-left .1rem
          font-size .42667rem
          float right

    .brand-content
      margin 0 .21333rem .27rem
      height 6.24rem
      display flex
      justify-content space-between
      flex-flow wrap
      li
        margin-bottom .10667rem
        width 4.73333rem
        height 3.14667rem
        background-color #f4f4f4
        position: relative
        .productor
          position: absolute
          top 0
          left 0
          padding .26667rem 0 0 .26667rem
          h4
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
            font-size .37333rem
            line-height .45333rem
            margin-bottom .08rem
          i
            display: block
            margin-top: .13333rem
            font-size .42667rem
            vertical-align middle
            color #aba081

  .new-goods-header
      background: url("../../asset/images/new-goods-bg.png")
      background-size: 10rem 3.46667rem
      height: 3.46667rem
      margin-bottom: .42667rem
      display flex
      align-items center
      justify-content center
      a
        text-align center
        &> span
          text-align: center
          width: 3.2rem
          font-size: .48rem
          color: #8BA0B6
          line-height: .74667rem
        &>div
          margin: .21333rem 0 0
          height: .74667rem
          font-size: .37333rem
          line-height: .74667rem
          background: #D8E5F1
          width: 3.2rem



</style>
