<template>
  <div>
    <div class="swiper-wrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img v-lazy="item.picUrl" alt="商品">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="service-policy">
        <ul>
          <li v-for="(item,index) in home.policyDescList" :key="index">
            <a href="javascript:;">
              <i class="iconfont icon-yuanquanduihao"></i>
              <span>{{item.desc}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Split/>
    <div class="brand">
      <div class="brand-header">
        <a href="javascript:;">
          <span> 品牌制造商直供</span>
          <i class="iconfont icon-youyuanjiantou"></i>
        </a>
      </div>
      <ul class="brand-content">
        <li v-for="(item,index) in newTagList" :key="index">
          <img v-lazy="item.appListPicUrl" alt="衣服">
          <div class="productor">
            <h4>{{item.name}}</h4>
            <div>{{item.floorPrice}}</div>
            <i class="iconfont icon-mojitianqishangxinbiaoqian"></i>
          </div>
        </li>
      </ul>
    </div>
    <Split/>
    <div class="new-goods-wrap">
      <div class="new-goods">
        <div class="new-goods-header">
          <a href="javascript:;">
            <span>新品首发</span>
            <div>
              <span>查看全部</span>
              <i class="iconfont icon-arrow-right"></i>
            </div>
          </a>
        </div>
        <div class="new-goods-container">
          <ul class="new-goods-content swiper-wrapper">
            <li class="new-good swiper-slide" v-for="(item,index) in home.newItemList" :key="index">
              <a href="javascript:;">
                <div class="good-img">
                  <img v-lazy="item.primaryPicUrl" alt="">
                </div>
                <div class="good-anniversary" >限购</div>
                <div class="good-name">{{item.name}}</div>
                <div class="good-desc">{{item.simpleDesc}}</div>
                <div class="good-price">￥{{item.retailPrice}}</div>
              </a>
            </li>
            <li class="new-good swiper-slide"></li>
          </ul>
        </div>
      </div>
    </div>
    <Split/>
    <div class="popular-itemList-wrap">
      <div class="popular-itemList">
        <div class="popular-itemList-header">
          <a href="javascript:;">
            <span>新品首发</span>
            <div>
              <span>查看全部</span>
              <i class="iconfont icon-arrow-right"></i>
            </div>
          </a>
        </div>
        <div class="popular-itemList-container">
          <ul class="popular-itemList-content swiper-wrapper">
            <li class="popular swiper-slide" v-for="(item,index) in home.topicList" :key="index">
              <a href="javascript:;">
                <div class="popular-img">
                  <img v-lazy="item.itemPicUrl" alt="">
                </div>
                <div class="popular-anniversary">七夕推荐</div>
                <div class="popular-name">{{item.title}}</div>
                <div class="popular-desc">{{item.subtitle}}</div>
                <div class="popular-price">￥{{item.priceInfo}}</div>
              </a>
            </li>
            <li class="popular swiper-slide"></li>
          </ul>
        </div>
      </div>
    </div>
    <Split/>
    <div class="flash">
      <div class="left">
        <div class="title">严选限时购</div>
        <div class="countdown">
          <span class="hours">{{time.hour}}</span>
          <span class="colon">:</span>
          <span class="mins">{{time.minutes}}</span>
          <span class="colon">:</span>
          <span class="secs">{{time.second}}</span>
        </div>
        <div class="nexttitle">下一场{{startTime.hour}}:00开始</div>
      </div>
      <div class="right">
        <img src="../../../asset/images/jishi.png" alt="jishi">
        <div class="price">
          <span class="now">￥39</span>
          <span class="origin">￥45</span>
        </div>
      </div>
    </div>
    <Split/>
    <div class="sale">
      <a href="javascript:;">
        <img src="../../../asset/images/sale.jpg" alt="">
      </a>
    </div>
    <Split/>
    <div class="topics">
      <div class="topics-header">
        <a href="javascript:;">
          <span>专题精选</span>
          <i class="iconfont icon-youyuanjiantou"></i>
        </a>
      </div>
      <div class="topics-content">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="javascript:;">
              <div class="topic-img">
                <img src="../../../asset/images/topic.jpg" alt="topic">
              </div>
              <div class="topic-name">青汁兑蜂蜜, 轻盈又甜蜜 <span>￥109</span></div>
              <div class="topic-desc">每天来杯青汁蜂蜜水，给生活添一点甜蜜</div>
            </a>
          </li>
          <li class="swiper-slide">
            <a href="javascript:;">
              <div class="topic-img">
                <img src="../../../asset/images/topic.jpg" alt="topic">
              </div>
              <div class="topic-name">青汁兑蜂蜜, 轻盈又甜蜜 <span>￥109</span></div>
              <div class="topic-desc">每天来杯青汁蜂蜜水，给生活添一点甜蜜</div>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <Split/>
    <GoodGrid :cateList="home.cateList"/>
  </div>
</template>

<script>
import GoodGrid from '../../../components/goodGrid/goodGuide'
import Swiper from 'swiper'
import {mapState} from 'vuex'
export default {
  data () {
   return {
     startTime: {
       hour: 12,
       minutes:0,
       second: 0
     },
     time: {
       hour: 0,
       minutes:0,
       second: 0
     }
   }
  },
  computed:{
    ...mapState(['banner','home']),
    newTagList () {
      if(this.home.tagList){
        return this.home.tagList.slice(0,4)
      }
    }
  },
  mounted() {
    this.$store.dispatch('getBanner',this._initSwiper)
    this.startTime = {
      hour: (new Date().getHours() + 4) >10 ?
        (new Date().getHours() + 4) :
        '0' + (new Date().getHours() + 4),
      minutes:0,
      second: 0
    }
    this.timer = setInterval(() => {
      let time = new Date();
      let hour = (this.startTime.hour - time.getHours() -1) > 9 ? (this.startTime.hour - time.getHours() -1) : '0' + (this.startTime.hour - time.getHours() -1)
      let minutes = (59 - time.getMinutes()) > 9?(59 - time.getMinutes()) : '0' + (59 - time.getMinutes())
      let second = (59 - time.getSeconds()) > 9? (59 - time.getSeconds()): '0' + (59 - time.getSeconds())
      this.time = {hour,minutes, second}
    },1000)
  },
  destroyed () {
    clearInterval(this.timer)
  },
  components: {
    GoodGrid
  },
  methods:{
    _initSwiper () {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true,
          autoplay: {
            delay: 3000,
          },

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
        new Swiper('.new-goods-container', {
          slidesPerView: 'auto',
          centeredSlides: false
        })
        new Swiper('.popular-itemList-container', {
          slidesPerView: 'auto',
          centeredSlides: false
        })
        new Swiper('.topics-content', {
          slidesPerView: 'auto',
          centeredSlides: false
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
          opacity 1;
          background #000;
          border-radius 0;
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
        position relative
        img
          width 100%
          height 100%
          display block
        .productor
          position absolute
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
            display block
            margin-top .13333rem
            font-size .42667rem
            vertical-align middle
            color #aba081

  .new-goods-header
    background url("../../../asset/images/new-goods-bg.png")
    background-size 10rem 3.46667rem
    height 3.46667rem
    margin-bottom .42667rem
    display flex
    align-items center
    justify-content center
    a
      text-align center
      & > span
        text-align center
        width 3.2rem
        font-size .48rem
        color #8BA0B6
        line-height .74667rem
      & > div
        margin .21333rem 0 0
        height .74667rem
        font-size .37333rem
        line-height .74667rem
        background #D8E5F1
        width 3.2rem

  .new-goods-container
    width 100%
    height 6.4rem
    position relative
    .new-goods-content
      overflow visible
      li.new-good.swiper-slide
        margin-left .4rem
        width 3.73333rem
        float left
        overflow hidden
        a
          display block
          .good-img
            background #f4f4f4
            margin-bottom .26667rem
            img
              width 2.73rem
              height 3.73rem
          .good-anniversary
            margin-left .16rem
            background-color #e5686d
            border-radius 2px
            line-height .32rem
            text-align center
            color #fff
            font-size .26667rem
            display inline-block
            vertical-align middle
            height .4rem
            padding .06667rem .21333rem
          .good-name
            margin-bottom .13333rem
            padding 0 .13333rem
            font-size .37333rem
            line-height .45333rem
            text-align left
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            color #333
          .good-desc
            margin-bottom .18667rem;
            font-size .32rem;
            color #7f7f7f;
            line-height .4rem;
            white-space nowrap;
            text-overflow ellipsis;
            overflow hidden;
            padding 0 .13333rem;
          .good-price
            padding 0 .13333rem
            font-size .37333rem
            text-align: left;
            color: #b4282d;
  .popular-itemList-header
    background url("../../../asset/images/popular-bg.png")
    background-size 10rem 3.46667rem
    height 3.46667rem
    margin-bottom .42667rem
    display flex
    align-items center
    justify-content center
    a
      text-align center
      & > span
        text-align center
        width 3.2rem
        font-size .48rem
        color #8BA0B6
        line-height .74667rem
      & > div
        margin .21333rem 0 0
        height .74667rem
        font-size .37333rem
        line-height .74667rem
        background #D8E5F1
        width 3.2rem

  .popular-itemList-container
    width 100%
    height 6.4rem
    position relative
    .popular-itemList-content
      overflow visible
      li.popular.swiper-slide
        margin-left .4rem
        width 3.73333rem
        float left
        overflow hidden
        a
          display block
          .popular-img
            display block
            margin-bottom .26667rem
            img
              width 2.73rem
              height 2.73rem
          .popular-anniversary
            margin-left .16rem
            background-color #e5686d
            border-radius 2px
            line-height .32rem
            text-align center
            color #fff
            font-size .26667rem
            display inline-block
            vertical-align middle
            height .4rem
            padding .06667rem .21333rem
          .popular-name
            margin-bottom .13333rem
            padding 0 .13333rem
            font-size .37333rem
            line-height .45333rem
            text-align left
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            color #333
          .popular-desc
            margin-bottom .18667rem;
            font-size .32rem;
            color #7f7f7f;
            line-height .4rem;
            white-space nowrap;
            text-overflow ellipsis;
            overflow hidden;
            padding 0 .13333rem;
          .popular-price
            padding 0 .13333rem
            font-size .37333rem
            text-align: left;
            color: #b4282d;
  .flash
    height 5.06667rem
    padding .4rem .53333rem .4rem  .74667rem
    overflow hidden
    .left
      float left
      box-sizing border-box
      padding-top 1.06667rem
      display flex
      flex-direction column
      width 4.45334rem
      height 4.26667rem
      .title
        font-size .48rem
        line-height .48rem
        margin-bottom .32rem
        color #333
        letter-spacing .16rem
      .countdown
        width 100%
        .hours,.mins,.secs
          display inline-block
          line-height .74667rem
          text-align center
          width .82667rem
          height .74667rem
          font-size .42667rem
          color #fff
          border-radius .05333rem
          background #444
          .colon
            color #333
            font-size .4rem
            width .26667rem
            display inline-block
            text-align center
            font-weight 700
      .nexttitle
        margin-top .53333rem
        color #333
        font-size .32rem
        line-height .32rem
        height .32rem
    .right
      float right
      width 4.26667rem
      height 4.26667rem
      position relative
      img
        width 100%
        height 100%

      .price
        height 1.28rem
        width 1.28rem
        border-radius 50%
        background rgba(244,143,24,.95)
        position absolute
        right .26667rem
        bottom .48rem
        color #fff
        text-align center
        display flex
        flex-direction column
        justify-content center
        .now,origin
          width 100%
          font-size .37333rem
          line-height .37333rem
          height .37333rem

  .sale
    width 10rem
    height 4rem
    img
      display block
      width 100%
      height 100%
  .topics-header
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

  .topics-content
    width 100%
    box-sizing border-box
    height 5.49333rem
    position relative
    padding 0 .4rem .48rem
    overflow visible
    ul.swiper-wrapper
      width 7.66667rem
      li.swiper-slide

        margin-right .4rem
        float left
        overflow hidden
        a
          display block
          .topic-img
            background #f4f4f4
            margin-bottom .26667rem
            img
              width 100%
              height auto
          .topic-name
            margin-bottom .13333rem
            padding 0 .13333rem
            font-size .37333rem
            line-height .45333rem
            text-align left
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
            color #333
            .name
              float right
              padding 0 .13333rem
              font-size .37333rem
              text-align: left;
              color: #b4282d;
          .topic-desc
            margin-bottom .18667rem;
            font-size .32rem;
            color #7f7f7f;
            line-height .4rem;
            white-space nowrap;
            text-overflow ellipsis;
            overflow hidden;
            padding 0 .13333rem;

</style>
