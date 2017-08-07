// i18n
import i18n from 'i18n'

export default {
  name: 'filter-toggle',

  props: {
    filter: {required: true},
    group: {type: String, required: true},
    i18nKey: {type: String, required: true},
    baseIconStyle: {type: String, required: true}
  },
  data () {
    return {
      i18n
    }
  },

  methods: {
    updateFilter (e) {
      this.$store.dispatch('filters/updateFilter', {
        group: this.group,
        key: this.filter.key,
        active: e.target.checked
      })
    }
  }
}
