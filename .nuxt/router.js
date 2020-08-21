import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cf5befbc = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _327e4ebc = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _2d1a7d55 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _66e2b425 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _cf5befbc,
    name: "admin"
  }, {
    path: "/profile",
    component: _327e4ebc,
    name: "profile"
  }, {
    path: "/signup",
    component: _2d1a7d55,
    name: "signup"
  }, {
    path: "/",
    component: _66e2b425,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
