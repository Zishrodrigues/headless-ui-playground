import { createRouter, createWebHistory } from 'vue-router'
const routerHistory = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
  },
]

const router = createRouter({
  history: routerHistory,
  routes,
})

export default router