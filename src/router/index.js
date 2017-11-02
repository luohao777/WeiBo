import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import LoginIN from '@/pages/LoginIn/loginIn'
import NewWeiBo from '@/pages/NewWeiBo/newWeiBo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginIN',
      component: LoginIN
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: "/loginIn",
      name: LoginIN,
      component: LoginIN
    },
    {
      path: "/new",
      name: NewWeiBo,
      component: NewWeiBo
    }
  ]
})
