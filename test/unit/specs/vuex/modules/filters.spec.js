import {
  actions,
  AUTO_TIME_RANGE,
  Filter,
  includesText,
  isBasisActive,
  isTimeActive,
  MUT_INIT_GROUP,
  MUT_UPD_FILTER,
  MUT_UPD_TXTFLT,
  mutations
} from '@/vuex/modules/filters'
import { testAction } from '../utils'

import { chain, includes } from 'lodash'

import i18n from 'i18n'

const makeFilterList = (group, active) => chain(i18n[group])
  .keys()
  .map(key => new Filter(
    key,
    typeof active === 'function' ? active(key) : active
  ))
  .value()

describe('Mutation', () => {
  describe('"' + MUT_INIT_GROUP + '"', () => {
    const mutate = mutations[MUT_INIT_GROUP]

    it('correctly initializes a group', () => {
      const state = {bases: [], times: []}
      const filters = [new Filter('tea', true), new Filter('coffee', false), new Filter('cocoa', false)]
      mutate(state, {group: 'bases', filters})
      expect(state.bases).to.deep.equal(filters)
      expect(state.times).to.be.empty
    })
  })

  describe('"' + MUT_UPD_FILTER + '"', () => {
    const mutate = mutations[MUT_UPD_FILTER]

    it('correctly initializes a group', () => {
      const state = {
        bases: [new Filter('tea', true), new Filter('coffee', false), new Filter('cocoa', false)],
        times: []
      }
      mutate(state, {group: 'bases', key: 'tea', active: false})
      expect(state.bases).to.have.lengthOf(3)
      state.bases.forEach(filter => expect(filter.active).to.be.false)
      expect(state.times).to.be.empty
    })
  })

  describe('"' + MUT_UPD_TXTFLT + '"', () => {
    const mutate = mutations[MUT_UPD_TXTFLT]

    it('adds an order to the state', () => {
      const state = {text: ''}
      const filterText = 'Je dis, de la chaude eau avec un nuage de lait'
      mutate(state, filterText)
      expect(state.text).to.equal(filterText)
    })
  })
})

describe('Action', () => {
  const isHourInAutoTimeRange = (hour, key) => {
    const range = AUTO_TIME_RANGE[key]
    const min = range[0]
    const max = range[1]

    return min <= max
      ? hour >= min && hour < max
      : hour >= min || hour < max
  }

  describe('"initFilters"', () => {
    it('are all enabled if no option was provided', done => {
      testAction(
        actions.initFilters,
        {},
        {bases: [], times: [], text: ''},
        [
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'bases',
              filters: makeFilterList('basis', true)
            }
          },
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'times',
              filters: makeFilterList('time', true)
            }
          }
        ],
        done
      )
    })

    it('are all disabled if an empty array was provided', done => {
      testAction(
        actions.initFilters,
        {bases: [], times: []},
        {bases: [], times: [], text: ''},
        [
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'bases',
              filters: makeFilterList('basis', false)
            }
          },
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'times',
              filters: makeFilterList('time', false)
            }
          }
        ],
        done
      )
    })

    it('can be set by combining the "teas" keyword with specific beverages', done => {
      const bases = ['tea-oolong', 'tea-rooibos', 'cocoa']
      const times = ['daytime', 'evening']

      testAction(
        actions.initFilters,
        {bases, times},
        {bases: [], times: [], text: ''},
        [
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'bases',
              filters: makeFilterList('basis', base => includes(bases, base))
            }
          },
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'times',
              filters: makeFilterList('time', time => includes(times, time))
            }
          }
        ],
        done
      )
    })

    it('are enabled for all teas if the "teas" keyword is passed', done => {
      testAction(
        actions.initFilters,
        {bases: ['teas'], times: []},
        {bases: [], times: [], text: ''},
        [
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'bases',
              filters: makeFilterList('basis', key => key.startsWith('tea'))
            }
          },
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'times',
              filters: makeFilterList('time', false)
            }
          }
        ],
        done
      )
    })

    it('can be set by combining the "teas" keyword with specific beverages', done => {
      testAction(
        actions.initFilters,
        {bases: ['teas', 'coffee'], times: []},
        {bases: [], times: [], text: ''},
        [
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'bases',
              filters: makeFilterList('basis', key => key === 'coffee' || key.startsWith('tea'))
            }
          },
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'times',
              filters: makeFilterList('time', false)
            }
          }
        ],
        done
      )
    })

    it('can be set using the "autoTime" attribute', done => {
      const hour = new Date().getHours()

      testAction(
        actions.initFilters,
        {autoTime: true},
        {bases: [], times: [], text: ''},
        [
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'bases',
              filters: makeFilterList('basis', true)
            }
          },
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'times',
              filters: makeFilterList(
                'time',
                key => key !== 'unknown' && isHourInAutoTimeRange(hour, key)
              )
            }
          }
        ],
        done
      )
    })

    it('can be set combining "autoTime" and fixed values', done => {
      const hour = new Date().getHours()

      testAction(
        actions.initFilters,
        {times: ['morning', 'unknown'], autoTime: true},
        {bases: [], times: [], text: ''},
        [
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'bases',
              filters: makeFilterList('basis', true)
            }
          },
          {
            type: MUT_INIT_GROUP,
            payload: {
              group: 'times',
              filters: makeFilterList(
                'time',
                key => key === 'unknown' || key === 'morning' || isHourInAutoTimeRange(hour, key)
              )
            }
          }
        ],
        done
      )
    })
  })

  describe('"updateFilter"', () => {
    it('updates the filter text', done => {
      const payload = {group: 'bases', key: 'coffee', active: false}

      testAction(
        actions.updateFilter,
        payload,
        {text: ''},
        [{type: MUT_UPD_FILTER, payload}],
        done
      )
    })
  })

  describe('"updateFilterText"', () => {
    it('updates the filter text', done => {
      const text = 'Hello, World'

      testAction(
        actions.updateFilterText,
        text,
        {text: ''},
        [{type: MUT_UPD_TXTFLT, payload: text}],
        done
      )
    })
  })
})

describe('Basis matching', () => {
  const filters = makeFilterList('basis', key => includes(['tea-rooibos', 'infusion', 'cocoa'], key))

  it('just works', () => {
    expect(isBasisActive(filters, {basis: 'tea-rooibos'})).to.be.true
    expect(isBasisActive(filters, {basis: 'tea-white'})).to.be.false
  })

  it('doesn\'t block unknown bases', () => {
    expect(isBasisActive(filters, {basis: 'what-the-hell-is-that'})).to.be.true
  })
})

describe('Time matching', () => {
  it('works fine when time is advised', () => {
    const filters = makeFilterList('time', key => key === 'morning')

    expect(isTimeActive(filters, {time: {morning: true}})).to.be.true
    expect(isTimeActive(filters, {time: {morning: false}})).to.be.false
    expect(isTimeActive(filters, {time: {morning: undefined}})).to.be.false
    expect(isTimeActive(filters, {time: {morning: null}})).to.be.false
  })

  it('works fine when time is not advised and "unknown" is set', () => {
    const filters = makeFilterList('time', key => key === 'unknown')

    expect(isTimeActive(filters, {time: undefined})).to.be.true
    expect(isTimeActive(filters, {time: {morning: undefined}})).to.be.true
    expect(isTimeActive(filters, {time: {morning: null}})).to.be.true
  })

  it('works fine when time is not advised and "unknown" is not set', () => {
    const filters = makeFilterList('time', key => key === 'morning')

    expect(isTimeActive(filters, {time: undefined})).to.be.false
    expect(isTimeActive(filters, {time: {morning: undefined}})).to.be.false
    expect(isTimeActive(filters, {time: {morning: null}})).to.be.false
  })
})

describe('Text matching', () => {
  const beverage = {
    name: 'My super duper tea',
    brand: 'A Chinese fine tea maker',
    basis: 'tea-oolong',
    benefits: ['stimulating', 'relaxing'],
    ingredients: ['tea obviously'],
    note: 'This is a descriptive note about this tea (which by the way is super duper).'
  }

  it('always works if no text has been defined', () => {
    expect(includesText('', beverage)).to.be.true
  })

  it('works only on predefined fields', () => {
    expect(includesText('oolong', beverage)).to.be.false
  })

  it('is case insensitive', () => {
    expect(includesText('SUpEr', beverage)).to.be.true
  })

  it('works only if all parts of the text find a match', () => {
    expect(includesText('OBVIOUSLY aBouT chinEsE stimulating', beverage)).to.be.true
    expect(includesText('OBVIOUSLY aBouT chinEsE stimulating oolong', beverage)).to.be.false
  })
})
