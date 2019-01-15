import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/view/HomePage'
import Login from '@/view/Login'
import AddUser from '@/view/AddUser'
import Cart from '@/view/Cart'
import CheckOrder from '@/view/CheckOrder'
import Userset from '@/view/Userset'
import UserManage from '@/superPage/UserManage'
Vue.use(Router);

export default new Router({
  routes: [
    {
      //主页
      path: '/',
      name: 'HomePage',
      component:HomePage
    },
    {
      //注册
      path: '/adduser',
      name: 'adduser',
      component:AddUser
    },
    {
      //购物车
      path: '/cart',
      name: 'Cart',
      component:Cart
    },
    {
      //查看订单
      path: '/checkorder',
      name: 'CheckOrder',
      component:CheckOrder
    },
    {
      //登录
      path: '/login',
      name: 'login',
      component:Login
    },
    {
     // 用户设定
      path: '/userset',
      name: 'userset',
      component:Userset
    },
    {
      // 用户管理
       path: '/usermanage',
       name: 'usermanage',
       component:UserManage
     },
  ]
})
