// Components
import FilterGroup from './filter-group/filter-group.vue'
// i18n
import i18n from 'i18n'

export default {
  name: 'filters',
  components: {FilterGroup},

  data () {
    return {
      i18n
    }
  },
  computed: {
    filterText: {
      get () {
        return this.$store.state.filters.text
      },
      set (value) {
        this.$store.dispatch('filters/updateFilterText', value)
      }
    }
  }
}
