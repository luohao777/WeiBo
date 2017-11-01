import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import LoginIN from '@/pages/LoginIn/loginIn'
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
    path:"/loginIn",
    name:LoginIN,
    component:LoginIN
    
    }
  ]
})
