// Vue
import Vue from 'vue'
// Vuex
import Vuex from 'vuex'
import store from './vuex/store'
// Components
import App from './app/app.vue'

import initAjaxStateManagement from './app/ajax-management'

Vue.config.productionTip = false
Vue.use(Vuex)

window.beverages = options => {
  store.dispatch('initConfig', options)

  // eslint-disable-next-line no-new
  new Vue({
    el: options.el,
    template: '<App/>',
    components: {App},
    store,

    beforeCreate: initAjaxStateManagement
  })
}
