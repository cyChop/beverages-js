import { chain, find, findIndex, has, includes, isArray, isNull, isObject, isString, isUndefined } from 'lodash'
import i18n from 'i18n'

// region configuration constants
/**
 * The filter key to enable all teas.
 * @type {string}
 * @constant
 * @default
 */
const FILTER_KEYWORD_TEAS = 'teas'

const MORNING_START = 5
const MORNING_END = 11
const DAYTIME_START = 10
const DAYTIME_END = 20
const EVENING_START = 18
const EVENING_END = 2

export const AUTO_TIME_RANGE = Object.freeze({
  morning: [MORNING_START, MORNING_END],
  daytime: [DAYTIME_START, DAYTIME_END],
  evening: [EVENING_START, EVENING_END]
})

const FULLTEXT_TESTED_FIELDS = ['name', 'brand', 'note', 'benefits', 'ingredients']
// endregion

// region Filter class
export class Filter {
  constructor (key, active) {
    this.key = key
    this.active = active
  }
}

// endregion

// region init functions
const _initFilters = (keys, isActive) => {
  return chain(keys)
    .keys()
    .map(key => (new Filter(key, isActive(key))))
    .value()
}

const _initBasesFilters = bases => {
  const allowAllTeas = includes(bases, FILTER_KEYWORD_TEAS)
  const testActive = !bases && !allowAllTeas
    ? () => true
    : basis => (includes(bases, basis) || (allowAllTeas && (/^tea-/).test(basis)))

  return _initFilters(i18n.basis, testActive)
}

const _initTimesFilters = (times, autoTime = false) => {
  const testActive = !times && !autoTime
    ? () => true
    : time => includes(times, time) || (autoTime && _isInTimeRange(time))

  return _initFilters(i18n.time, testActive)
}
// endregion

const _getFilter = (group, key) => find(group, {key})

// region beverage visibility testing functions
export const isBasisActive = (bases, beverage) => {
  const filter = _getFilter(bases, beverage.basis)
  return filter ? filter.active : true
}

const _isInTimeRange = range => {
  if (!has(AUTO_TIME_RANGE, range)) {
    return false
  }

  const [min, max] = AUTO_TIME_RANGE[range]
  const hour = new Date().getHours()
  return min <= max ? min <= hour && hour < max : min <= hour || hour < max
}

export const isTimeActive = (times, beverage) => {
  const bevTimes = beverage.time
  return isObject(bevTimes)
    ? Boolean(
      chain(bevTimes)
        .keys()
        .find(time => {
          const active = bevTimes[time]
          if (isUndefined(active) || isNull(active)) {
            return _getFilter(times, 'unknown').active
          } else if (active) {
            const filter = _getFilter(times, time)
            return filter && filter.active
          }
          return false
        })
        .value()
    )
    : _getFilter(times, 'unknown').active
}

const _testRegexpAgainstModelFields = (rgx, model) => {
  const testString = str => rgx.test(str)
  let length = FULLTEXT_TESTED_FIELDS.length
  for (let i = 0; i < length; i++) {
    const value = model[FULLTEXT_TESTED_FIELDS[i]]
    if ((isString(value) && testString(value))
      || (isArray(value) && find(value, testString))) {
      return true
    }
  }
  return false
}

export const includesText = (text, beverage) => {
  const filter = (text || '').trim()
  return filter.length === 0
    || findIndex(
      text.split(/\s+/),
      text => !_testRegexpAgainstModelFields(new RegExp(text, 'i'), beverage)
    ) === -1
}
// endregion

// region mutations
export const MUT_INIT_GROUP = `initFilterGroup`
export const MUT_UPD_FILTER = `updateFilter`
export const MUT_UPD_TXTFLT = `updateTextFilter`

export const mutations = {
  [MUT_INIT_GROUP] (state, {group, filters}) {
    state[group] = filters
  },
  [MUT_UPD_FILTER] (state, {group, key, active}) {
    find(state[group], {key}).active = active
  },
  [MUT_UPD_TXTFLT] (state, text) {
    state.text = text
  }
}
// endregion

// region actions
export const actions = {
  initFilters ({commit}, {bases, times, autoTime}) {
    commit(MUT_INIT_GROUP, {
      group: 'bases',
      filters: _initBasesFilters(bases)
    })
    commit(MUT_INIT_GROUP, {
      group: 'times',
      filters: _initTimesFilters(times, autoTime)
    })
  },
  updateFilter ({commit}, {group, key, active}) {
    commit(MUT_UPD_FILTER, {group, key, active})
  },
  updateFilterText ({commit}, text) {
    commit(MUT_UPD_TXTFLT, text)
  }
}
// endregion

export default {
  namespaced: true,
  state: {
    bases: [],
    times: [],
    text: ''
  },
  mutations,
  actions
}
