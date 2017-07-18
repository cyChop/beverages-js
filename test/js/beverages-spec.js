import _ from 'underscore'
import Beverages, { BEVERAGE_ORDER } from '../../src/js/model/beverage/beverages'
import { MOCK_BEVERAGES_LENGTH } from '../../dev/mock/fake-app-server'

describe('A collection', () => {
  it('without a gSheetId has no URL', () => {
    const beverages = new Beverages()

    expect(beverages.url()).toBeUndefined()
  })

  it('with a gSheetId has a URL containing said gSheetId', () => {
    const gSheetId = 'thisisafakegsheetid'
    const beverages = new Beverages([], {gSheetId})
    const url = beverages.url()

    expect(url).toBeDefined()
    expect(url).toContain(gSheetId)
  })
})

describe('After fetching the data,', () => {
  let beverages

  beforeEach((done) => {
    beverages = new Beverages([], {gSheetId: 'themockserverwillprovidethedata'})
    beverages.on('sync', () => {
      done()
    }).fetch()
  })

  it('the collection contains the correct number of elements', () => {
    // Correct length
    expect(beverages.length).toBe(MOCK_BEVERAGES_LENGTH)
  })

  it('the items of the collection are correctly ordered', () => {
    const bases = beverages.pluck('basis')

    // now compare
    expect(bases).toEqual(_.sortBy(bases, (basis) => BEVERAGE_ORDER[basis]))
  })

  it('the items are correctly parsed', () => {
    const beverage = beverages.get('https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/dkvya')

    expect(beverage.get('name')).toBe('Pleine Lune')
    expect(beverage.get('brand')).toBe('Vert & Noir')
    expect(beverage.get('basis')).toBe('tea-white')
    expect(beverage.get('packaged')).toBe(false)
    expect(beverage.get('theine')).toBe('unknown')
    expect(beverage.get('time')).toEqual({
      morning: undefined,
      daytime: undefined,
      evening: undefined
    })
    expect(beverage.get('preparation')).toEqual({
      temp: {
        min: 70,
        max: 70
      },
      time: {
        min: 6,
        max: 12
      }
    })
    expect(beverage.get('ingredients')).toEqual([
      'thé blanc de Chine parfumé au melon',
      'caramel',
      'cannelle',
      'orange'
    ])
    expect(beverage.get('benefits')).toEqual([])
    expect(beverage.get('note')).toBeFalsy()
  })
})
