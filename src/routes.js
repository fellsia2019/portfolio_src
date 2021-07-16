// Default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages

import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import VueTest from '@/pages/VueTest'
import Projects from '@/pages/Projects'



// Routering
export default new Router({
    // mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/projects',
        name: 'projects',
        component: Projects
      },
      {
        path: '/test-vue',
        name: 'test-vue',
        component: VueTest
      },
      {
        path: '/user',
        name: 'user',
        meta: { headerHide: true },
        component: () => import('@/pages/User')
      },
      {
        path: '/adminPage',
        name: 'adminPage',
        component: () => import('@/pages/AdminPage')
      },
      {
        path: '*',
        name: 'NotFound',
        component: NotFound
      }
    ]
  })