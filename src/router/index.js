import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import LoginIN from '@/pages/LoginIn/loginIn'
import NewWeiBo from '@/pages/NewWeiBo/newWeiBo'
import Comments from '@/pages/Comments'

Vue.use(Router)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}



export default new Router({
  mode: 'history',  
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
      path: '/loginIn',
      name: LoginIN,
      component: LoginIN
    },
    {
      path: '/new',
      name: NewWeiBo,
      component: NewWeiBo
    },
    {
      path: '/comments/:userId',
      name: 'comments',
      component: Comments,
      meta: { scrollToTop: true }
    }
  ],
  scrollBehavior
  
})
