import Vue from 'vue'

export const EVENT_TOGGLE_ORDERS = `toggleOrders`

// Export one single instance
const bus = new Vue()
export default bus
