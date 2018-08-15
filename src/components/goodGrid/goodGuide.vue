<template>
  <div>
    <div class="goodGuide" v-for="(item,index) in cateList" :key="index">
      <h3 class="title">{{item.name}}好物</h3>
      <ul class="goodGuide-list">
        <li class="good-item" v-for="(itemGood,indexGood) in item.itemList" :key="indexGood">
          <img v-lazy="itemGood.listPicUrl" alt="">
          <p class="better">{{itemGood.simpleDesc}}</p>
          <div class="youhui"><span>限量优惠</span></div>
          <div class="good-name">{{itemGood.name}}</div>
          <div class="price">￥{{itemGood.couponPrice}}</div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'good-guide',
  props: {
    cateList: Array
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.goodGuide
  width 100%
  .title
    line-height 1.6rem
    text-align center
    font-size .37333rem
    color #333
    background #fff
  ul.goodGuide-list
    box-sizing border-box
    width 100%
    display flex
    justify-content space-between
    flex-flow wrap
    padding 0 .2666666rem
    li.good-item
      width 4.6rem
      margin-bottom .44rem
      >img
        display block
        width 100%
        height 4.6rem
        border-radius .05333rem .05333rem 0 0
        background-color #f4f4f4
      .better
        box-sizing border-box
        width 100%
        background #f1ece2
        border-radius 0 0 .05333rem .05333rem
        font-size .32rem
        letter-spacing 0
        line-height .38667rem
        text-overflow ellipsis
        overflow: hidden
        padding .26667rem .133333rem
      .youhui
        margin .2rem 0 .2rem .16rem
        background-color #f48f18
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
      .price
        padding 0 .13333rem
        font-size .37333rem
        text-align: left;
        color: #b4282d;
</style>
