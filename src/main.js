// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './views/Home'
import Explore from './views/Explore'
import Mine from './views/Mine'

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

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
