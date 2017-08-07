// Vue + Vuex
import Vue from 'vue'
import Vuex from 'vuex'
// Modules
import beverages from './modules/beverages'
import filters from './modules/filters'
import orders from './modules/orders'
// Plugins
import storage from './plugins/storage'
import beveragesFilter from './plugins/beverages-filter'

import i18n from 'i18n'

import { filter, random } from 'lodash'

// Application logic
const MUT_STORE_SETTINGS = `storeSettings`
export const MUT_LOADING_START = `setStateToLoading`
export const MUT_LOADING_DONE = `setStateToLoaded`
export const MUT_STORE_ERROR = `storeError`

Vue.use(Vuex)

const UNIT_TEMP_FAHRENHEIT = 'fahrenheit'
const UNIT_TEMP_CELSIUS = 'celsius'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  debug: debug,
  strict: debug,

  plugins: [
    beveragesFilter,
    storage(sessionStorage || {
      setItem: () => ({}),
      getItem: () => ({})
    }, 'vuex-beverages', ({orders}) => ({orders}))
  ],

  modules: {
    beverages,
    filters,
    orders
  },

  state: {
    // Application state
    loading: false,
    error: false,

    // Options
    sheetId: undefined,
    temperatureUnit: UNIT_TEMP_FAHRENHEIT
  },

  mutations: {
    [MUT_STORE_SETTINGS] (state, {gSheetId, celsius}) {
      // Sheet ID
      state.sheetId = gSheetId
      if (!state.sheetId) {
        state.error = i18n.error.configuration
      }

      // Temperature unit preference
      if (celsius) {
        state.temperatureUnit = UNIT_TEMP_CELSIUS
      }
    },

    [MUT_LOADING_START] (state) {
      state.loading = true
    },
    [MUT_LOADING_DONE] (state) {
      state.loading = false
    },
    [MUT_STORE_ERROR] (state, payload) {
      state.error = payload.error
    }
  },

  actions: {
    initConfig ({commit, dispatch}, {gSheetId, celsius, filters}) {
      commit(MUT_STORE_SETTINGS, {gSheetId, celsius})
      dispatch('filters/initFilters', filters || {})
    },
    orderRandom ({state, dispatch}) {
      const visible = filter(state.beverages.list, {show: true})
      dispatch('orders/order', visible[random(0, visible.length - 1)])
    }
  }
})
