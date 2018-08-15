<template>
  <div class="cateList">
    <div class="cateList-header-wrap">
      <div class="cateList-header">
        <div class="search">
          <div class="search-content">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共11765款好物</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cateList-container" v-if="nav.categoryL1List">
      <div class="left">
        <ul class="cates">
          <li class="cate" :class="{active:currentIndex === index}"
              v-for="(item,index) in nav.categoryL1List" :key="index"
              @click="setCurrentIndex(index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="scrollWrap">
        <div class="right">
          <img v-lazy="nav.categoryL1List[currentIndex].bannerUrl" alt="">
          <div class="title">
            <span>{{nav.categoryL1List[currentIndex].name}}分类</span>
          </div>
          <ul class="cateList-goods">
            <li class="cateList-good" v-if="nav.categoryL1List" v-for="(itemCate,indexCate) in nav.categoryL1List[currentIndex].subCateList" :key="indexCate">
              <img v-lazy="itemCate.wapBannerUrl" alt="">
              <p>{{itemCate.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'cate-list',
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    ...mapState(['data','nav'])
  },
  mounted () {

    this.$store.dispatch('getNavData',() => {
      this.$nextTick(() => {
        new BScroll('.left',{
          click: true
        })
        new BScroll('.scrollWrap',{
          click: true
        })
      })
    })
  },
  methods: {
    setCurrentIndex(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../asset/stylus/mixins.styl'

.cateList
  width 100%
  height 100%
  box-sizing border-box
  padding 0 0 1.33rem 0
.cateList-header-wrap
  height 1.25rem
  position relative
  border none
  &:after
    content ''
    position absolute
    left 0
    bottom 0
    width 100%
    height .05rem
    background-color #eee
  .cateList-header
    width 100%
    position fixed
    top 0
    left 0
    z-index 5
    .search
      background #fff
      position relative
      display flex
      flex-flow row nowrap
      align-items center
      padding .21333rem .4rem
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
.cateList-container
  width 100%
  height 93%
  display flex
  flex-flow row nowrap
  .left
    position relative
    width 25%
    height 100%
    overflow hidden
    &::after
      content ''
      position absolute
      z-index 1
      right .04rem
      top 0
      width .04rem
      height 100%
      background-color #eee
    .cates
      padding .533333rem 0
      .cate
        width 100%
        height .66667rem
        text-align center
        margin-top: .53333rem
        font-size .37333rem
        color #333
        white-space nowrap
        overflow hidden
        line-height .66667rem
        text-overflow ellipsis
        &:first-child
          margin 0
        &.active
          font-size .48rem
          color #ab2b2b

  .scrollWrap
    width 75%
    height 100%
  .right
    width 100%
    flex-grow 1
    padding .4rem .4rem .28rem
    >img
      width 7.04rem
      height 2.56rem
    .title
      height 1.44rem
      line-height 1.44rem
      text-align center
      font-size .32rem
      color #333
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
    .cateList-goods
      display flex
      flex-flow row wrap
      .cateList-good
        display inline-block
        margin-right .45333rem
        font-size 0
        width 1.92rem
        vertical-align top
        img
          width 1.92rem
          height 1.92rem
        p
          height .96rem
          font-size .32rem
          color #333
          text-align center
          line-height .45333rem
        &:nth-child(3n)
          margin-right 0
</style>
