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
    component: () => import(/* webpackChunkName: "leftDelete" */ '../views/LeftDelete.vue')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/modal.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
