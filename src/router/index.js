import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Explore from '@/views/Explore'
import Mine from '@/views/Mine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {title: '首页', keepAlive: true},
    component: Home
  },
  {
    path: '/explore',
    name: 'explore',
    meta: {title: '发现', keepAlive: true},
    component: Explore
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {title: '我的', keepAlive: true},
    component: Mine
  }
]

const router = new VueRouter({
  routes
})

export default router
