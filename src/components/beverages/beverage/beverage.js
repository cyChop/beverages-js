// Vuex
import { mapActions } from 'vuex'
// Components
import TimeIcon from '../time-icon/time-icon.vue'
import TheineLevel from '../theine-level/theine-level.vue'
import MinMax from '../../min-max/min-max.vue'
// Filters
import { join, map, startWithCap } from '@/filters/filters'
// i18n
import i18n from 'i18n'

export default {
  name: 'beverage',
  components: {TimeIcon, TheineLevel, MinMax},
  filters: {map, join, startWithCap},

  props: ['beverage'],
  data () {
    return {
      detailed: false,

      i18n,
      temperatureUnit: this.$store.state.temperatureUnit
    }
  },

  methods: {
    toggleDetails () {
      this.detailed = !this.detailed
    },
    ...mapActions('orders', {
      orderBeverage: 'order'
    })
  }
}
