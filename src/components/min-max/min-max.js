// Filters
const minMax = (value, separator = '-') => {
  if (value) {
    if (value.min) {
      return value.max && value.min !== value.max
        ? value.min + separator + value.max
        : value.min
    } else if (value.max) {
      return value.max
    }
  }
  return ''
}

export default {
  name: 'min-max',
  filters: {minMax},

  props: {
    display: {type: Object, required: true},
    icon: {type: String, required: true},
    unit: {type: String, required: true}
  },
  data () {
    return {
      hide: true
    }
  },

  created () {
    this.hide = !this.display || (!this.display.min && !this.display.max)
  }
}
