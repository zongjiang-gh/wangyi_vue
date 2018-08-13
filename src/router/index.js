import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home'
import Topic from '../pages/topic/topic'
import Cart from '../pages/cart/cart'
import CateList from '../pages/cateList/cateList'
import Ucenter from '../pages/ucenter/ucenter'
import Login from '../pages/login/login'

import Recommend from '../pages/home/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home,
      meta: {
        footShow: true
      },
      children: [
        {
          path: '/home/recommend',
          component: Recommend
        },
        {
          path: '/home',
          redirect:'/home/recommend'
        }
      ]
    },
    {
      path: '/topic',
      name: '识物',
      component: Topic,
      meta: {
        footShow: true
      }
    },
    {
      path: '/catelist',
      name: '分类',
      component: CateList,
      meta: {
        footShow: true
      }
    },
    {
      path: '/cart',
      name: '购物车',
      component: Cart,
      meta: {
        footShow: true
      }
    },
    {
      path: '/ucenter',
      name: '个人',
      component: Ucenter,
      meta: {
        footShow: true
      }
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
