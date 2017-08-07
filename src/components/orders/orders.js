// Vuex
import { mapActions, mapGetters, mapState } from 'vuex'
// Components
import MinMax from '../min-max/min-max.vue'
// Filters
import { map } from '@/filters/filters'
// Bus
import bus, { EVENT_TOGGLE_ORDERS } from '../../app/bus'
// i18n
import i18n from 'i18n'

export default {
  name: 'orders',
  components: {MinMax},
  filters: {map},

  data () {
    return {
      visible: false,

      i18n,
      temperatureUnit: this.$store.state.temperatureUnit
    }
  },
  computed: {
    ...mapState('orders', ['orders']),
    ...mapGetters('orders', ['total'])
  },

  methods: {
    toggleOrders () {
      this.visible = !this.visible
    },
    ...mapActions('orders', {
      clearOrders: 'clear'
    })
  },

  created () {
    bus.$on(EVENT_TOGGLE_ORDERS, this.toggleOrders)
  }
}
