// Vuex
import { mapState } from 'vuex'
// Components
import FilterToggle from '../filter-toggle/filter-toggle.vue'

export default {
  name: 'filter-group',
  components: {FilterToggle},

  props: {
    group: {type: String, required: true},
    i18nKey: {type: String, required: true},
    baseIconStyle: {type: String, required: true}
  },
  computed: mapState('filters', {
    filters (state) {
      return state[this.group]
    }
  })
}
