import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _238dd1ca = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _4e54cc03 = () => interopDefault(import('../pages/movies.vue' /* webpackChunkName: "pages/movies" */))
const _eb765616 = () => interopDefault(import('../pages/pictures.vue' /* webpackChunkName: "pages/pictures" */))
const _a8f47ee8 = () => interopDefault(import('../pages/places.vue' /* webpackChunkName: "pages/places" */))
const _3f0eb1c6 = () => interopDefault(import('../pages/restaurants.vue' /* webpackChunkName: "pages/restaurants" */))
const _302fc4f4 = () => interopDefault(import('../pages/todo.vue' /* webpackChunkName: "pages/todo" */))
const _412b41c2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _238dd1ca,
    name: "inspire"
  }, {
    path: "/movies",
    component: _4e54cc03,
    name: "movies"
  }, {
    path: "/pictures",
    component: _eb765616,
    name: "pictures"
  }, {
    path: "/places",
    component: _a8f47ee8,
    name: "places"
  }, {
    path: "/restaurants",
    component: _3f0eb1c6,
    name: "restaurants"
  }, {
    path: "/todo",
    component: _302fc4f4,
    name: "todo"
  }, {
    path: "/",
    component: _412b41c2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
