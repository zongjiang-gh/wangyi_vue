<template>
  <div>
    <div class="m-ftWrap">
      <div class="m-ft">
        <div class="bd">
          <div class="goApp">下载APP</div>
          <div class="goWeb">电脑版</div>
        </div>
        <p class="copyright">
          <span>网易公司版权所有 © 1997-</span>
          <span>2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .m-ftWrap{
    padding-bottom: .5rem;
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    .m-ft{
      width: 10rem;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      padding: .72rem .26667rem .37333rem;
      .bd{
        .goApp{
          width: 2.29333rem;
          font-size: .32rem;
          color: #fff;
          margin-right: .66667rem;
          height: .82667rem;
          line-height: .82667rem;
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          border: 1px solid #999;
        }
        .goWeb{
          border: 1px solid #999;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          border-radius: 4px;
          overflow: hidden;
          width: 2.29333rem;
          font-size: .32rem;
          color: #fff;
          margin-right: .66667rem;
          height: .82667rem;
          line-height: .82667rem;
        }
      }
      .copyright{
        margin-top: .48rem;
        font-size: .32rem;
        line-height: .42667rem;
        color: #999;
        span{
          font-size: .32rem;
          line-height: .42667rem;
          color: #999;
          text-align: center;
        }
      }
    }
  }
</style>
