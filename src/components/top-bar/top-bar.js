// Vuex
import { mapActions, mapGetters, mapState } from 'vuex'
// Filters
import Filters from '../filters/filters.vue'
// Bus
import bus, { EVENT_TOGGLE_ORDERS } from '../../app/bus'
// i18n
import i18n from 'i18n'

export default {
  name: 'top-bar',
  components: {Filters},

  data () {
    return {
      i18n
    }
  },
  computed: {
    // State
    ...mapState({
      ready: state => !state.loading && !state.error
    }),

    // Beverages
    ...mapState('beverages', {
      total: state => state.list.length
    }),
    ...mapGetters('beverages', ['shown']),

    // Orders
    ...mapState('orders', {
      orders: state => state.orders
    }),
    ...mapGetters('orders', {
      ordered: 'total'
    })
  },

  methods: {
    toggleOrders () {
      bus.$emit(EVENT_TOGGLE_ORDERS, true)
    },

    ...mapActions(['orderRandom'])
  }
}
