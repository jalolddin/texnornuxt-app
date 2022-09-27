import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _76c3a59e = () => interopDefault(import('..\\pages\\calculator.vue' /* webpackChunkName: "pages/calculator" */))
const _2463c0a5 = () => interopDefault(import('..\\pages\\consultation.vue' /* webpackChunkName: "pages/consultation" */))
const _2e2d22e3 = () => interopDefault(import('..\\pages\\demonstration.vue' /* webpackChunkName: "pages/demonstration" */))
const _c6709234 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _07f9af58 = () => interopDefault(import('..\\pages\\industries\\ship.vue' /* webpackChunkName: "pages/industries/ship" */))
const _15cf47e4 = () => interopDefault(import('..\\pages\\production\\production.vue' /* webpackChunkName: "pages/production/production" */))
const _2da2674a = () => interopDefault(import('..\\pages\\production\\production\\index.js' /* webpackChunkName: "pages/production/production/index" */))
const _71922a39 = () => interopDefault(import('..\\pages\\production\\production\\controllers.vue' /* webpackChunkName: "pages/production/production/controllers" */))
const _a6ef5174 = () => interopDefault(import('..\\pages\\production\\production\\flowmeters.vue' /* webpackChunkName: "pages/production/production/flowmeters" */))
const _2d8d0030 = () => interopDefault(import('..\\pages\\production\\production\\gas-separators.vue' /* webpackChunkName: "pages/production/production/gas-separators" */))
const _08a091db = () => interopDefault(import('..\\pages\\production\\production\\sensors.vue' /* webpackChunkName: "pages/production/production/sensors" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calculator",
    component: _76c3a59e,
    name: "calculator"
  }, {
    path: "/consultation",
    component: _2463c0a5,
    name: "consultation"
  }, {
    path: "/demonstration",
    component: _2e2d22e3,
    name: "demonstration"
  }, {
    path: "/en",
    component: _c6709234,
    name: "index___en"
  }, {
    path: "/ru",
    component: _c6709234,
    name: "index___ru"
  }, {
    path: "/en/calculator",
    component: _76c3a59e,
    name: "calculator___en"
  }, {
    path: "/en/consultation",
    component: _2463c0a5,
    name: "consultation___en"
  }, {
    path: "/en/demonstration",
    component: _2e2d22e3,
    name: "demonstration___en"
  }, {
    path: "/industries/ship",
    component: _07f9af58,
    name: "industries-ship"
  }, {
    path: "/production/production",
    component: _15cf47e4,
    children: [{
      path: "",
      component: _2da2674a,
      name: "production-production"
    }, {
      path: "controllers",
      component: _71922a39,
      name: "production-production-controllers"
    }, {
      path: "flowmeters",
      component: _a6ef5174,
      name: "production-production-flowmeters"
    }, {
      path: "gas-separators",
      component: _2d8d0030,
      name: "production-production-gas-separators"
    }, {
      path: "sensors",
      component: _08a091db,
      name: "production-production-sensors"
    }]
  }, {
    path: "/ru/calculator",
    component: _76c3a59e,
    name: "calculator___ru"
  }, {
    path: "/ru/consultation",
    component: _2463c0a5,
    name: "consultation___ru"
  }, {
    path: "/ru/demonstration",
    component: _2e2d22e3,
    name: "demonstration___ru"
  }, {
    path: "/en/industries/ship",
    component: _07f9af58,
    name: "industries-ship___en"
  }, {
    path: "/en/production/production",
    component: _15cf47e4,
    children: [{
      path: "",
      component: _2da2674a,
      name: "production-production___en"
    }, {
      path: "controllers",
      component: _71922a39,
      name: "production-production-controllers___en"
    }, {
      path: "flowmeters",
      component: _a6ef5174,
      name: "production-production-flowmeters___en"
    }, {
      path: "gas-separators",
      component: _2d8d0030,
      name: "production-production-gas-separators___en"
    }, {
      path: "sensors",
      component: _08a091db,
      name: "production-production-sensors___en"
    }]
  }, {
    path: "/ru/industries/ship",
    component: _07f9af58,
    name: "industries-ship___ru"
  }, {
    path: "/ru/production/production",
    component: _15cf47e4,
    children: [{
      path: "",
      component: _2da2674a,
      name: "production-production___ru"
    }, {
      path: "controllers",
      component: _71922a39,
      name: "production-production-controllers___ru"
    }, {
      path: "flowmeters",
      component: _a6ef5174,
      name: "production-production-flowmeters___ru"
    }, {
      path: "gas-separators",
      component: _2d8d0030,
      name: "production-production-gas-separators___ru"
    }, {
      path: "sensors",
      component: _08a091db,
      name: "production-production-sensors___ru"
    }]
  }, {
    path: "/",
    component: _c6709234,
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
