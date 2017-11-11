import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import LoginIN from '@/pages/LoginIn/loginIn'
import NewWeiBo from '@/pages/NewWeiBo/newWeiBo'
import Comments from '@/pages/Comments'
import Mine from '@/pages/mine'
import * as scrollUtils from '@/utils/scroll-position'

Vue.use(Router)

const router = new Router({
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
      component: LoginIN
    },
    {
      path: '/new',
      name: NewWeiBo,
      component: NewWeiBo
    },
    {
        path:'/mine',
        component: Mine
    },
    {
      path: '/comments/:userId',
      name: 'comments',
      component: Comments,
    }
  ]
})

let routerList = []
console.log(routerList)


router.beforeEach((to, from, next) => {
    // 记录屏幕位置
      let position = scrollUtils.getScrollTop()
      let currentRouterIndex = routerList.findIndex(e => {
          return e.path === from.fullPath
      })
  
      if (currentRouterIndex != -1) {
          routerList[currentRouterIndex].position = position
      } else {
          routerList.push({
              path: from.fullPath,
              position: position
          })
      }
      next()
  })

  router.afterEach((to, from, next) => {
        let savedPosition = routerList.find(e => {
            return e.path === to.fullPath
        })
    
        if (typeof savedPosition !== 'undefined') {
            Vue.nextTick(() => {
                scrollUtils.setScrollTop(savedPosition.position)
            })
        } else {
            Vue.nextTick(() => {
                scrollUtils.setScrollTop(0)
            })
        }
    })
    
  
export default router


