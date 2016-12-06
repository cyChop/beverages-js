/**
 * The module defining {@link OrderSummary}.
 *
 * @class OrderSummary
 * @classdesc A list of {@link Order} instances.
 * It also provides a <code>total</code> properyy that contains the total number of cups to brew.
 *
 * @module model/order/order-summary
 */
import {Model, Collection} from 'backbone';
import Order from './order';

export default Model.extend(
    /** @lends OrderSummary.prototype */
    {
        /** @constructs */
        initialize() {
            const orders = new Collection(null, {model: Order});

            this.set({
                total: 0,
                orders
            });

            // The total should be updated any time an order is added, removed or updated
            orders.on('update change', () => this.set('total',
                orders.reduce((memo, order) => memo + order.get('quantity'), 0)
            ), this);
        },

        /**
         * Adds an order for the specified beverage.
         *
         * If an order already exists for this beverage, its quantity will be incremented by one.
         *
         * @param {Beverage} beverage the beverage an order is being passed for
         * @param {number} [quantity=1] the quantity being ordered
         * @public
         */
        order(beverage, quantity = 1) {
            const order = this.get('orders').get(beverage.get('id'));

            if (order) {
                order.set('quantity', order.get('quantity') + quantity);
            } else {
                this.get('orders').add(new Order({
                    beverage,
                    quantity
                }));
            }
        },

        /**
         * Removes all orders. Back to a clean slate!
         */
        clear() {
            this.get('orders').reset();
            this.set('total', 0);
            this.trigger('update');
        }
    }
);
