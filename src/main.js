// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// setup router
import router from './router'
import VueRouter from 'vue-router'

// setup vuex
import store from '@/store/store'
import { sync } from 'vuex-router-sync'

// setup vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// setup google maps
import * as VueGoogleMaps from 'vue2-google-maps'

// setup event bus to be exported. Allows child component to talk
// with parent component
export const EventBus = new Vue()
Vue.use(VueRouter)
sync(store, router) // Ensure you are using css-loader
Vue.use(Vuetify)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB-FXJVrNHMXVkgxiGkZylm8kcABXb06cA',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  },
  autobindAllEvents: false
})

// development mode
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
