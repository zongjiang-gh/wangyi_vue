import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home'
import Topic from '../pages/topic/topic'
import Cart from '../pages/cart/cart'
import CateList from '../pages/cateList/cateList'
import Ucenter from '../pages/ucenter/ucenter'
import Login from '../pages/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/topic',
      name: '识物',
      component: Topic
    },
    {
      path: '/catelist',
      name: '分类',
      component: CateList
    },
    {
      path: '/cart',
      name: '购物车',
      component: Cart
    },
    {
      path: '/ucenter',
      name: '个人',
      component: Ucenter
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
