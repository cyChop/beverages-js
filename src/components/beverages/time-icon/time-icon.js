// Filters
import { defined, ifElse } from '@/filters/filters'
// i18n
import i18n from 'i18n'

export default {
  name: 'time-icon',
  filters: {defined, ifElse},

  props: {
    time: {type: String, required: true},
    times: {type: Object, required: true}
  },
  data () {
    return {
      i18n
    }
  }
}
