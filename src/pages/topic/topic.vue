<template>
  <div class="topic-wrap">
    <div class="topic-header">
      <i class="iconfont icon-shouye"></i>
      <img src="../../asset/images/logo.png" alt="">
      <i class="iconfont icon-sousuo"></i>
      <i class="iconfont icon-gouwuche"></i>
    </div>
    <div class="scroll-wrap">
      <div class="scroll-content">
        <div class="topic-content">
          <div class="topic-swiper-container-one" v-if="detail.banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in detail.banner" :key="index"><img :src="item.picUrl" alt=""></div>
          </div>
        </div>
          <div class="topic-swiper-container-two" v-if="detail.column">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in detail.column" :key="index">
                <img v-lazy="item.picUrl" alt="">
                <span>{{item.title}}</span>
              </div>

            </div>
          </div>
          <Split />
          <div class="exploreRcmds" v-if="detail.recommendOne">
            <div class="rcmds-header">{{detail.recommendOne.nickname}}</div>
            <div class="rcmds-img">
              <img v-lazy="detail.recommendOne.picUrl" alt="">
              <p class="txt">
                <span>{{detail.recommendOne.title}}</span>
                <span>{{detail.recommendOne.priceInfo}}元起</span>
              </p>
            </div>
            <div class="rcmds-item">
              <div class="left">
                <div class="avatar">
                  <img v-lazy="detail.recommendThree.avatar" alt="">
                  <span>{{detail.recommendThree.nickname}}</span>
                </div>
                <h4 class="title">{{detail.recommendThree.title}}</h4>
                <span class="txt">{{detail.recommendThree.subTitle}}</span>
              </div>
              <div class="right">
                <img v-lazy="detail.recommendThree.picUrl" alt="">
              </div>
            </div>
            <div class="rcmds-item">
              <div class="left">
                <div class="avatar">
                  <img v-lazy="detail.recommendTwo.avatar" alt="">
                  <span>{{detail.recommendTwo.nickname}}</span>
                </div>
                <h4 class="title">{{detail.recommendTwo.title}}</h4>
                <span class="txt">{{detail.recommendTwo.subTitle}}</span>
              </div>
              <div class="right">
                <img v-lazy="detail.recommendTwo.picUrl" alt="">
              </div>
            </div>
          </div>
          <div class="exploreRcmds" v-if="detail.zhenOne">
            <div class="rcmds-header">{{detail.zhenOne.nickname}}</div>
            <div class="rcmds-img">
              <img v-lazy="detail.zhenOne.picUrl" alt="">
              <p class="txt">
                <span>{{detail.zhenOne.title}}</span>
                <span>{{detail.zhenOne.priceInfo}}元起</span>
              </p>
            </div>
            <div class="rcmds-item">
              <div class="left">
                <div class="avatar">
                  <img v-lazy="detail.zhenThree.avatar" alt="">
                  <span>{{detail.zhenThree.nickname}}</span>
                </div>
                <h4 class="title">{{detail.zhenThree.title}}</h4>
                <span class="txt">{{detail.zhenThree.subTitle}}</span>
              </div>
              <div class="right">
                <img v-lazy="detail.zhenThree.picUrl" alt="">
              </div>
            </div>
            <div class="rcmds-item">
              <div class="left">
                <div class="avatar">
                  <img v-lazy="detail.zhenTwo.avatar" alt="">
                  <span>{{detail.zhenTwo.nickname}}</span>
                </div>
                <h4 class="title">{{detail.zhenTwo.title}}</h4>
                <span class="txt">{{detail.zhenTwo.subTitle}}</span>
              </div>
              <div class="right">
                <img v-lazy="detail.zhenTwo.picUrl" alt="">
              </div>
            </div>
          </div>
          <Split />
          <div class="explore-tenFifteen">
            <div class="explore-title">十点一刻</div>
            <div class="explore-swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <span>今日话题</span>
                  <span>你有哪些租房经历</span>
                  <span>聊聊你用过的租房神器</span>
                  <div>
                    <div class="explore-header-img"><img src="../../asset/images/e1.png" alt=""></div>
                    <div class="explore-header-img"><img src="../../asset/images/e2.jpg" alt=""></div>
                    <div class="explore-header-img"><img src="../../asset/images/e2.jpg" alt=""></div>
                    <div class="explore-header-img"> . . . </div>
                    <span>482人参与话题</span>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="all">
                    <span>查看全部话题</span>
                    <i class="iconfont icon-youyuanjiantou"></i>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Split />
          <div class="exploreRcmds" v-if="detail.zhenOne">
            <div class="rcmds-header">{{detail.zhenOne.nickname}}</div>
            <div class="rcmds-img">
              <img v-lazy="detail.zhenOne.picUrl" alt="">
              <p class="txt">
                <span>{{detail.zhenOne.title}}</span>
                <span>{{detail.zhenOne.priceInfo}}元起</span>
              </p>
            </div>
            <div class="rcmds-item">
              <div class="left">
                <div class="avatar">
                  <img v-lazy="detail.zhenThree.avatar" alt="">
                  <span>{{detail.zhenThree.nickname}}</span>
                </div>
                <h4 class="title">{{detail.zhenThree.title}}</h4>
                <span class="txt">{{detail.zhenThree.subTitle}}</span>
              </div>
              <div class="right">
                <img v-lazy="detail.zhenThree.picUrl" alt="">
              </div>
            </div>
            <div class="rcmds-item">
              <div class="left">
                <div class="avatar">
                  <img v-lazy="detail.zhenTwo.avatar" alt="">
                  <span>{{detail.zhenTwo.nickname}}</span>
                </div>
                <h4 class="title">{{detail.zhenTwo.title}}</h4>
                <span class="txt">{{detail.zhenTwo.subTitle}}</span>
              </div>
              <div class="right">
                <img v-lazy="detail.zhenTwo.picUrl" alt="">
              </div>
            </div>
          </div>
          <Split />
          <div class="exploreLook" v-if="detail.yxLook">
            <div class="look-header">严选Look</div>
            <div class="look-img">
              <img :src="detail.yxLook.picUrl" alt="">
              <div class="avatar">
                <img :src="detail.yxLook.avatar" alt="">
                <span>free{{detail.yxLook.topicId}}</span>
              </div>
              <span class="desc">{{detail.yxLook.content}}</span>
            </div>
          </div>
          <div class="explor-more">
            <div class="title">
              <span>更多精彩</span>
              <div class="line"></div>
            </div>
            <div class="explore-items" v-for="(item,index) in more" :key="index" v-if="detail.findMore">
              <div class="explore-item">
                <img v-lazy="item.itemPicUrl" alt="">
                <div>{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
export default {
  name: 'topic',
  data () {
    return {
      hasMore: 0
    }
  },
  mounted () {
    this.$store.dispatch('getDetailData',() => {
      this.$nextTick(() => {
        new Swiper('.topic-swiper-container-one', {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true
        })
        new Swiper('.topic-swiper-container-two', {
          slidesPerView: 'auto',
          freeMode: true,
        })
        new Swiper('.explore-swiper-container', {
          slidesPerView: 'auto'
        })
      })
    })

  },
  computed: {
    ...mapState(['detail']),
    more () {
      if(this.detail.findMore){
        if(this.hasMore === 0){
          this.hasMore += 3
        }
        if(this.hasMore > this.detail.findMore.length) return this.detail.findMore
        return this.detail.findMore.slice(0,this.hasMore)
      }

    }
  },
  watch: {
    hasMore () {
      this.$nextTick(() => {
        if(this.scroll)return
        this.scroll = new BScroll('.scroll-wrap',{
          click:true
        })
        this.scroll.on('scrollEnd', () => {
          this.hasMore += 3
          this.scroll.refresh()
        })
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.topic-wrap
  padding 1.2rem 0 1.3rem 0
  height 100%
  box-sizing border-box
.topic-header
  position fixed
  top 0
  left 0
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
.scroll-wrap
  width 100%
  height 100%
  box-sizing border-box
  overflow hidden
.topic-swiper-container-one
  width 9.2rem
  padding 0 .32rem
  margin auto
  img
   width 100%
   box-sizing border-box
   padding 0 .15rem

.topic-swiper-container-two
  padding .42667rem .4rem .37333rem
  height 3.8133rem
  .swiper-slide
    width 3rem
    >img
      width 3rem
      height 3rem
      box-sizing border-box
      padding 0 .15rem
    >span
      display block
      width 100%
      margin-top .3rem
      text-align center
      font-size .35rem
      vertical-align middle
.exploreRcmds
  padding 0 .4rem .53333rem
  margin-bottom: .26667rem
  rcmds-header
  .rcmds-header
    text-align center
    font-size .42667rem
    height 1.6rem
    line-height 1.6rem
  .rcmds-img
    color #333
    border 1px solid #d9d9d9
    border-radius .10667rem
    overflow hidden
    margin-bottom .4rem
    img
      height 5.14667rem
    span
      padding .32rem .26667rem .89333rem
      text-align left
      line-height .5rem
      height .5rem
      font-size .5rem
      &:first-child
        float left
      &:last-child
        float right
  .rcmds-item
    display flex
    align-items center
    border 1px solid #d9d9d9
    margin-top .4rem
    .left
      width 3.7333rem
      flex-grow 1
      display flex
      flex-direction column
      margin-right .2rem
      margin-left .2rem
      .avatar
        height .7rem
        line-height .7rem
        margin-bottom .333rem
        img
          display: block
          border-radius 50%
          float left
          height 100%
        span
          display inline-block
          height .7rem
          line-height .7rem
          margin-left .3rem
          color #7e8c8d
      h4.title
        line-height 1.2
        margin-bottom .18667rem
        font-size .4rem
      span.txt
        margin-top .3rem
        height 1rem
        color: #7e8c8d
        line-height 0.5rem
        font-size .35rem
        overflow hidden
        text-overflow ellipsis
        text-overflow: -o-ellipsis-lastline;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    .right
      flex-grow 0
      width 3.7333rem
      height 3.62667rem
      img
        width 100%
        height 100%
.explore-tenFifteen
  box-sizing border-box
  padding 0 .4rem .53333rem
  height 7.61333rem
  margin-bottom .26667rem
  overflow hidden
  .explore-title
    text-align center
    font-size .42667rem
    height 1.6rem
    line-height 1.6rem
  .explore-swiper-container
    width 100%
    height 6rem
    .swiper-slide
      width 8rem
      margin-right .3rem
      padding 0.2rem 0.2rem 1rem .2rem
      box-sizing border-box
      background url("../../asset/images/e-bg.png") no-repeat center
      display flex
      align-items center
      flex-direction column
      justify-content center
      >span
        margin-top .2rem
        &:first-child
          color: #999
          &::before,&::after
            display inline-block
            content: ''
            width .5rem
            height 1px
            background: #999
            margin .4rem .2rem .1rem
        &:nth-child(2)
          margin-top .5rem
          font-size .5rem
          font-weight bold
        &:nth-child(3)
          margin-top .3rem
          font-size .34rem
      >div
        display flex
        flex-flow row nowrap
        margin-top 1rem
        >div
          img
            display block
            border-radius 50%
            margin-left .2rem
          &:nth-child(4)
            width .7rem
            height .7rem
            background-color: #d9d9d9
            border-radius 50%
            text-align center
            line-height .5rem
            color #fff
            margin-left .2rem
        >span
          margin-left .7rem
          margin-top .1rem
          color #7e8c8d
      .all
        margin 0
        width 100%
        font-size .4rem
        color #7e8c8d
        display flex
        justify-content center
        align-items center
        i
          font-size .5rem
          margin-top .1rem
          margin-left .2rem





.exploreLook
  width 100%
  .look-header
    text-align center
    font-size .42667rem
    height 1.6rem
    line-height 1.6rem
  .look-img
    display flex
    flex-direction column
    .avatar
      margin-top .3rem
      display flex
      align-items cneter
      margin-left .2rem
      img
        margin-right .3rem
        border-radius 50%
        width .61rem
        height .61rem
      span
        margin-top: .1rem
  .desc
    margin-top .2rem
    font-size .35rem
    padding 0 .4rem
    color #444
    line-height 1.5
.explor-more
  width 100%
  background #eee
  padding-bottom .1rem
  .title
    margin 0 .4rem .4rem
    height 1.8667rem
    display flex
    justify-content center
    align-items center
    font-size .4rem
    position relative
    .line
      position absolute
      height 1px
      width 100%
      background-color: #aaa
      top 50%
      left 0
      z-index 1
    >span
      display inline-block
      padding 0 .4rem
      background #eee
      background-clip padding-box
      position relative
      z-index 20
  .explore-items
    margin 0 .4rem .4rem
    background #fff
    padding .32rem
    color #333
    .explore-item
      width 8.56rem
      margin auto
      div
        width 100%
        font-size .35rem
        line-height .7rem
        height .7rem
        margin .5rem 0 .2rem
      img
        display block
        width 100%
        height 100%
</style>
