import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_1dade642 from 'nuxt_plugin_plugin_1dade642' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_34a28b2c from 'nuxt_plugin_pluginutils_34a28b2c' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_4c2cfd77 from 'nuxt_plugin_pluginrouting_4c2cfd77' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_4256b958 from 'nuxt_plugin_pluginmain_4256b958' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_vlazyload_31668af0 from 'nuxt_plugin_vlazyload_31668af0' // Source: .\\v-lazy-load.js (mode: 'all')
import nuxt_plugin_vuescrollto_02934f72 from 'nuxt_plugin_vuescrollto_02934f72' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_workbox_5aa6341e from 'nuxt_plugin_workbox_5aa6341e' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_28222a9e from 'nuxt_plugin_metaplugin_28222a9e' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_2cc9d012 from 'nuxt_plugin_iconplugin_2cc9d012' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_4c44d0fc from 'nuxt_plugin_axios_4c44d0fc' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_scrollto_3d5d65b9 from 'nuxt_plugin_scrollto_3d5d65b9' // Source: ..\\plugins\\scrollto.js (mode: 'all')
import nuxt_plugin_router_3e5c7b82 from 'nuxt_plugin_router_3e5c7b82' // Source: ..\\plugins\\router (mode: 'all')
import nuxt_plugin_vclickoutside_12eb1bf8 from 'nuxt_plugin_vclickoutside_12eb1bf8' // Source: ..\\plugins\\v-click-outside.js (mode: 'client')
import nuxt_plugin_vscrolllock_1c8c6f99 from 'nuxt_plugin_vscrolllock_1c8c6f99' // Source: ..\\plugins\\v-scroll-lock.js (mode: 'client')
import nuxt_plugin_vuelidate_4345260a from 'nuxt_plugin_vuelidate_4345260a' // Source: ..\\plugins\\vuelidate (mode: 'client')
import nuxt_plugin_vueawesomeswiper_4af85e3f from 'nuxt_plugin_vueawesomeswiper_4af85e3f' // Source: ..\\plugins\\vue-awesome-swiper (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"meta":[{"hid":"charset","charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"format-detection","content":"telephone=no"},{"name":"robots","content":"index, follow"},{"hid":"og:title","property":"og:title","content":"Teсhnodar"},{"hid":"og:site_name","property":"og:site_name","content":"Teсhnodar"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:image","property":"og:image","content":"\u002Fshare.jpg"},{"hid":"og:image:type","property":"og:image:type","content":"image\u002Fjpeg"},{"hid":"og:image:width","property":"og:image:width","content":"1240"},{"hid":"og:image:height","property":"og:image:height","content":"640"},{"name":"theme-color","content":"#ffffff"}],"link":[{"rel":"apple-touch-icon","sizes":"180x180","href":"\u002Ffavicon\u002Fapple-touch-icon.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"32x32","href":"\u002Ffavicon\u002Ffavicon-32x32.png"},{"rel":"icon","type":"image\u002Fpng","sizes":"16x16","href":"\u002Ffavicon\u002Ffavicon-16x16.png"},{"rel":"manifest","href":"\u002Ffavicon\u002Fsite.webmanifest"},{"rel":"mask-icon","href":"\u002Ffavicon\u002Fsafari-pinned-tab.svg","color":"#ffffff"}],"style":[],"script":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_1dade642 === 'function') {
    await nuxt_plugin_plugin_1dade642(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_34a28b2c === 'function') {
    await nuxt_plugin_pluginutils_34a28b2c(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_4c2cfd77 === 'function') {
    await nuxt_plugin_pluginrouting_4c2cfd77(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_4256b958 === 'function') {
    await nuxt_plugin_pluginmain_4256b958(app.context, inject)
  }

  if (typeof nuxt_plugin_vlazyload_31668af0 === 'function') {
    await nuxt_plugin_vlazyload_31668af0(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_02934f72 === 'function') {
    await nuxt_plugin_vuescrollto_02934f72(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_5aa6341e === 'function') {
    await nuxt_plugin_workbox_5aa6341e(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_28222a9e === 'function') {
    await nuxt_plugin_metaplugin_28222a9e(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_2cc9d012 === 'function') {
    await nuxt_plugin_iconplugin_2cc9d012(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_4c44d0fc === 'function') {
    await nuxt_plugin_axios_4c44d0fc(app.context, inject)
  }

  if (typeof nuxt_plugin_scrollto_3d5d65b9 === 'function') {
    await nuxt_plugin_scrollto_3d5d65b9(app.context, inject)
  }

  if (typeof nuxt_plugin_router_3e5c7b82 === 'function') {
    await nuxt_plugin_router_3e5c7b82(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vclickoutside_12eb1bf8 === 'function') {
    await nuxt_plugin_vclickoutside_12eb1bf8(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vscrolllock_1c8c6f99 === 'function') {
    await nuxt_plugin_vscrolllock_1c8c6f99(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuelidate_4345260a === 'function') {
    await nuxt_plugin_vuelidate_4345260a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueawesomeswiper_4af85e3f === 'function') {
    await nuxt_plugin_vueawesomeswiper_4af85e3f(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
