/**
 * The module defining {@link Order}.
 *
 * @class Order
 * @classdesc An order is basically a beverage and a quantity.
 *
 * @module model/order/order
 */
import { Model } from 'backbone'

export default Model.extend(
  /** @lends Order.prototype */
  {
    defaults: {quantity: 1},

    /**
     * Creates a new order.
     *
     * @param {{beverage: Beverage}} data the data passed to the constructor
     * @constructs
     */
    initialize (data) {
      this.set('id', data.beverage.get('id'))
    }
  }
)
