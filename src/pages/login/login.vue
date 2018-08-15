<template>
  <div class="login">
    <div class="login-header">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <img src="../../asset/images/logo.png" alt="">
      <i class="iconfont icon-sousuo"></i>
      <i class="iconfont icon-gouwuche"></i>
    </div>
    <div class="login-content">
      <div class="logo">
        <img src="../../asset/images/ucenter-logo.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="form">
          <div class="input-wrap">
            <input type="text" :placeholder="type==='phone'? '请输入手机号': '邮箱账号'" v-model="nameType">
            <input :type="type==='phone'? 'text': 'password'" :placeholder="type==='phone'? '请输入短信验证码': '密码'" v-model="code">
            <div class="question"><span>{{type==='phone'? '遇到问题？':'注册账号'}}</span><span>{{type==='phone'? '使用密码验证登录': '忘记密码'}}</span></div>
          </div>
          <div class="btn1" @click="send">登录</div>
          <div class="btn2" @click="$router.replace('/ucenter')">其他登录方式</div>
        </div>
        <p>
          注册账号
          <i class="iconfont icon-you"></i>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      type:this.$route.query.type,
      phone:'',
      username:'',
      vertifyCode:'',
      password:''
    }
  },
  computed: {
    nameType : {
      get() {
        return this.type === 'phone' ? this.phone : this.username
      },
      set(val) {
        if(this.type === 'phone'){
          this.phone = val
        }else{
          this.username = val
        }
      }
    },
    code : {
      get () {
        return this.type === 'phone' ? this.vertifyCode : this.password
      },
      set(val) {
        if(this.type === 'phone'){
          this.vertifyCode = val
        }else{
          this.password = val
        }
      }
    }
  },
  methods: {
    send () {
      const {phone, username, vertifyCode, password} = this
      if((phone && vertifyCode) || (username && password)){
        this.$router.replace('/home')
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
  width 100%
  height 100%
  overflow hidden
.login-header
  width 100%
  height 1.2rem
  background #f8f8f8
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
.login-content
  width 100%
  height 100%
  background-color: #fff
  .logo
    padding .746667rem 0 0
    text-align center
    img
      height .85333rem
      width 2.56rem
  .btnWrap
    box-sizing border-box
    width 100%
    padding 0 .53333rem
    .form
      width 100%
      padding .1rem .4rem
      box-sizing border-box
      position relative
      input,.question
        width 100%
        height 1.4rem
        margin-top .4rem
        line-height 1.4rem
        font-size .35rem
        color #666
      input
        border-bottom 2px solid #eee
        outline none
        font-size .4rem
      .question
        font-size .4rem
        display flex
        justify-content space-between
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
    p
      width 100%
      text-align center
      font-size .35rem
      margin-top .2rem
      i
        font-size .4rem
</style>
