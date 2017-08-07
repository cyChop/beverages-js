import { isBasisActive, isTimeActive, includesText } from '../modules/filters'

const RGX_MUTATION = /(?:([^/]+)\/)?(.+)/

export default store => {
  store.subscribe((mutation, {beverages, filters}) => {
    const splitMutation = RGX_MUTATION.exec(mutation.type)
    const namespace = splitMutation[1]
    if (namespace === 'filters' || (namespace === 'beverages' && splitMutation[2] === 'init')) {
      beverages.list.forEach(beverage => {
        const show = isBasisActive(filters.bases, beverage)
          && isTimeActive(filters.times, beverage)
          && includesText(filters.text, beverage)
        if (beverage.show !== show) {
          store.commit('beverages/toggleShow', {beverage, show})
        }
      })
    }
  })
}
