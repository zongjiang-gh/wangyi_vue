## 网易严选

### 项目描述

1. 此项目为一个关于电商的WebApp(SPA)
2. 包括六个主路由:首页,识物,分类,购物车,个人,登录/注册
3. 将要使用Vue技术栈、ES6、webpack等前端最新技术
4. 采用模块化、组件化、工程化的模式开发


### 项目的编码阶段

#### day01路由的搭建及静态页面

1.搭建好了环境和路由

2.开始写静态页面

- 导航的宽度不能自动撑开

  加最小宽度 min-width：100%

- better-scroll不滚动的问题

  内层容器与外层容器一样高，导致不能滑动，解决办法，为外层容器设置宽高都是100%

#### day02首页的静态页面及数据渲染

首页的静态页面搭建完成，开始数据填充

#### day03

一级路由页面动态完成，

遇到问题滚动，解决watch，加上$nextTick(),和mounted解决

明天写登录注册，导航守卫等，然后第二页完成上拉加载，首页的遮罩等

#### day04 

已经完成登录注册，首页遮罩等，未完成图片懒加载，导航守卫，第二页的上拉加载

懒加载的包不用下载，直接就可以使用，下载vue-loader后丢包，办法重新下载依赖，解决问题

懒加载已完成，未完成上拉刷新，懒加载完成后滑动高度不对了

解决方法在滑动到底部时重新刷新一次就好了

上拉刷新已做完，