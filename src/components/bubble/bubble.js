// Vuex
import { mapState } from 'vuex'

// i18n
import i18n from 'i18n'

export default {
  name: 'bubble',

  computed: mapState({
    // State
    loading: state => state.loading,
    error: state => state.error,

    // Message
    message: state => {
      let result
      if (state.error) {
        result = state.error
      } else if (state.loading) {
        result = i18n.loading
      } else if (state.beverages.shown === 0) {
        result = i18n.error.empty
      }
      return result
    }
  })
}
