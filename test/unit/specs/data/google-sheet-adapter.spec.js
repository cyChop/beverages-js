import * as DataSource from '@/data/google-sheet-datasource'
import data from '@/mock/data/mock-sheet.json'

describe('The Google Sheet URL', () => {
  it('should be undefined when there is no sheet ID', () => {
    expect(DataSource.getSheetAsJsonUrl()).to.be.undefined
    expect(DataSource.getSheetAsJsonUrl(null)).to.be.undefined
  })
  it('should be defined when there is no sheet ID', () => {
    const id = 'myMockId'
    const url = DataSource.getSheetAsJsonUrl(id)

    expect(url).to.be.a('string')
    expect(url.startsWith('http')).to.be.true
    expect(new RegExp(id).test(url)).to.be.true
  })
})

describe('Parsing method', () => {
  const array = DataSource.extractContent(data)
  const [entry] = array

  describe('"extractContent"', () => {
    it('returns the useful content of the datasource', () => {
      expect(DataSource.extractContent(data)).to.deep.equal(data.feed.entry)
    })
  })

  describe('"get"', () => {
    it('returns undefined if the required field does not exist', () => {
      expect(DataSource.get(entry, 'idontexist')).to.be.undefined
    })

    it('returns a string value', () => {
      expect(DataSource.get(entry, 'packaged')).to.be.a('string')
    })

    it('returns a correct value', () => {
      expect(DataSource.get(entry, 'name')).to.equal('Libertango')
    })
  })

  describe('"getInt"', () => {
    it('returns the unparsed value if falsy', () => {
      expect(DataSource.getInt(entry, 'idontexist')).to.be.undefined
    })

    it('returns NaN when field could not be parsed to a number', () => {
      expect(DataSource.getInt(entry, 'name')).to.be.NaN
    })

    it('returns a number when possible', () => {
      expect(DataSource.getInt(entry, 't-min')).to.equal(80)
    })
  })

  describe('"getBool"', () => {
    it('returns "false" if the provided value is not a boolean', () => {
      expect(DataSource.getBool(entry, 'name')).to.be.false
    })

    it('returns the parsed value if provided, whether "mandatory" is specified or not', () => {
      expect(DataSource.getBool(entry, 'stock')).to.be.true
      expect(DataSource.getBool(entry, 'stock', false)).to.be.true
      expect(DataSource.getBool(entry, 'stock', true)).to.be.true

      expect(DataSource.getBool(entry, 'packaged')).to.be.false
      expect(DataSource.getBool(entry, 'packaged', false)).to.be.false
      expect(DataSource.getBool(entry, 'packaged', true)).to.be.false
    })

    it('returns "false" when a mandatory boolean is not provided', () => {
      expect(DataSource.getBool(entry, 'morning', true)).to.be.false
    })

    it('returns undefined when a non-mandatory boolean is not provided', () => {
      expect(DataSource.getBool(entry, 'morning')).to.be.undefined
      expect(DataSource.getBool(entry, 'morning', false)).to.be.undefined
    })
  })

  describe('"getCsv"', () => {
    it('returns an empty array if the value is empty', () => {
      expect(DataSource.getCsv(entry, 'morning')).to.be.empty
    })

    it('returns an array of trimmed strings', () => {
      expect(DataSource.getCsv(entry, 'benefits')).to.deep.equal(['antioxydant', 'énergisant', 'détoxifiant'])
    })
  })

  describe('"getMinMax"', () => {
    it('returns an object with undefined properties if no valid fields available', () => {
      expect(DataSource.getMinMax(entry, 'morning')).to.deep.equal({
        min: undefined,
        max: undefined
      })
    })
    it('returns an object with set properties if the fields are available', () => {
      expect(DataSource.getMinMax(entry, 't')).to.deep.equal({
        min: 80,
        max: 81
      })
    })
  })

  describe('"parseRowToModel"', () => {
    it('should return correctly parsed beverages', () => {
      expect(DataSource.parseRowToModel(entry)).to.deep.equal({
        id: 'https://spreadsheets.google.com/feeds/list/15DoM_Y1uH9zQWAgPxpiSegYGlP7gnoelFpxv4d91zJI/od6/public/values/cokwr',
        name: 'Libertango',
        brand: 'Mariage Frères',
        basis: 'tea-green',
        packaged: false,
        theine: 'unknown',
        times: {
          morning: undefined,
          daytime: undefined,
          evening: undefined
        },
        preparation: {
          temp: {
            min: 80,
            max: 81
          },
          time: {
            min: 5,
            max: 5
          }
        },
        ingredients: ['Maté vert parfumé'],
        benefits: ['antioxydant', 'énergisant', 'détoxifiant'],
        note: ''
      })
    })
  })
})
