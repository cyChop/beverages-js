import store, { MUT_LOADING_START, MUT_LOADING_DONE, MUT_STORE_ERROR } from '../vuex/store'
import i18n from 'i18n'
import axios from 'axios'

// Initialize some interceptors to manage a loading state
export default function initAjaxStateManagement () {
  const onError = error => {
    store.commit(MUT_STORE_ERROR, {error: i18n.error.loading})
    store.commit(MUT_LOADING_DONE)
    return Promise.reject(error)
  }
  axios.interceptors.request.use(config => {
    store.commit(MUT_LOADING_START)
    return config
  }, onError)
  axios.interceptors.response.use(response => {
    store.commit(MUT_LOADING_DONE)
    return response
  }, onError)
}
