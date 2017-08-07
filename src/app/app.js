// Vuex
import { getSheetAsJsonUrl, extractContent, getBool, parseRowToModel } from '../data/google-sheet-datasource'
// Components
import Orders from '../components/orders/orders.vue'
import TopBar from '../components/top-bar/top-bar.vue'
import Bubble from '../components/bubble/bubble.vue'
import Beverages from '../components/beverages/beverages.vue'


import axios from 'axios'
import { chain } from 'lodash'

import { BEVERAGE_ORDER } from './configuration'

const loadData = function (sheetId, store) {
  axios
    .get(getSheetAsJsonUrl(sheetId))
    .then(response => {
      store.commit('beverages/init', {
        beverages: chain(extractContent(response.data))
          .filter(item => getBool(item, 'stock', true))
          .map(parseRowToModel)
          .sortBy([beverage => BEVERAGE_ORDER[beverage.basis], 'name'])
          .value()
      })
    })
}

export default {
  name: 'beverages-app',
  components: {
    Orders,
    TopBar,
    Bubble,
    Beverages
  },

  created () {
    const sheetId = this.$store.state.sheetId
    if (sheetId) {
      loadData(sheetId, this.$store)
    }
  }
}
