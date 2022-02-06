import Vue from 'vue'
import VueRouter from 'vue-router'
import TheArticle from '../views/TheArticle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'blogHome',
    component: () => import(/* webpackChunkName: "blogHome" */ '../views/BlogHome.vue')
  },
  {
    path: '/article/:id',
    name: 'theArticle',
    component: TheArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(() => {
  window.scrollTo(0, 0);
})

export default router
