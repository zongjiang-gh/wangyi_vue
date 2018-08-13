import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer'
import 'swiper/dist/css/swiper.min.css'

import Split from './components/split/split'

Vue.component('Split', Split)

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

