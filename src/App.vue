<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide isShow="$route.meta.footShow"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'app',
  components: {
    FooterGuide
  },
  mounted () {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    position relative
</style>
