// Vuex
import { mapState } from 'vuex'
// Components
import Beverage from './beverage/beverage.vue'

export default {
  name: 'beverages',
  components: {Beverage},

  computed: {
    // State
    ...mapState({
      ready: state => !state.loading && !state.error
    }),

    // Beverages
    ...mapState('beverages', {
      beverages: state => state.list
    })
  }
}
