import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blogHome',
    component: () => import(/* webpackChunkName: "blogHome" */ '../views/BlogHome.vue')
  },
  {
    path: '/article',
    name: 'theArticle',
    component: () => import(/* webpackChunkName: "theArticle" */ '../views/TheArticle.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
