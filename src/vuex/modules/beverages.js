import { find } from 'lodash'

export const getters = {
  shown: state => state.list.reduce((sum, beverage) => beverage.show ? sum + 1 : sum, 0)
}

export const mutations = {
  init (state, {beverages}) {
    // init a "show" field for management
    beverages.forEach(beverage => { beverage.show = true })
    state.list = beverages
  },
  save (state, {beverages}) {
    state.list = beverages
  },
  toggleShow (state, {beverage, show}) {
    find(state.list, item => item.id === beverage.id).show = show
  }
}

export default {
  namespaced: true,
  state: {
    list: []
  },
  getters,
  mutations
}
