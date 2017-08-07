import { findIndex } from 'lodash'

// region Order class
/**
 * @class Order
 * @classdesc An order is basically a beverage and a quantity
 */
export class Order {
  /**
   * Creates a new order.
   *
   * @param {Beverage} beverage the beverage to order
   * @param {number} [quantity=1] the number of beverages being ordered
   * @constructor
   */
  constructor (beverage, quantity = 1) {
    this.id = beverage.id
    this.beverage = beverage
    this.quantity = quantity
  }
}
// endregion

export const getters = {
  total: state => state.orders.reduce((sum, order) => sum + order.quantity, 0)
}

export const MUT_ADD_ORDER = `addOrder`
export const MUT_UPD_ORDER = `updateOrder`
export const MUT_CLR_ORDER = `clearOrders`

export const mutations = {
  [MUT_ADD_ORDER] (state, {beverage, quantity}) {
    state.orders.push(new Order(beverage, quantity))
  },
  [MUT_UPD_ORDER] (state, {index, quantity}) {
    state.orders[index].quantity += quantity
  },
  [MUT_CLR_ORDER] (state) {
    state.orders = []
  }
}

export const actions = {
  /**
   * Adds an order for the specified beverage.
   *
   * If an order already exists for this beverage, its quantity will be incremented by one.
   *
   * @param commit the store's commit function
   * @param state the store's state
   * @param {Object} beverage the beverage an order is being passed for
   * @param {number} [quantity=1] the quantity being ordered
   */
  order ({commit, state}, {beverage, quantity = 1}) {
    const orderIndex = findIndex(state.orders, order => order.id === beverage.id)
    if (orderIndex === -1) {
      commit(MUT_ADD_ORDER, {beverage, quantity})
    } else {
      commit(MUT_UPD_ORDER, {index: orderIndex, quantity})
    }
  },

  /**
   * Removes all orders. Back to a clean slate!
   */
  clear ({commit}) {
    commit(MUT_CLR_ORDER)
  }
}

export default {
  namespaced: true,
  state: {
    orders: []
  },
  getters,
  mutations,
  actions
}
