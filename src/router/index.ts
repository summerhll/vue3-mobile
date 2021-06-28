import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Index from '../views/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/leftDelete',
    name: 'leftDelete',
    // route level code-splitting
    // this generates a separate chunk (leftDelete.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "leftDelete" */ '../views/LeftDelete.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
