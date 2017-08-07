import * as Filters from '@/filters/filters'

describe('Filter', () => {
  // region logic
  describe('"defined"', () => {
    const {defined} = Filters

    it('returns false for undefined', () => {
      let something
      expect(defined(something)).to.be.false
      expect(defined(undefined)).to.be.false
      expect(defined()).to.be.false
    })

    it('returns false for null', () => {
      const something = null
      expect(defined(something)).to.be.false
      expect(defined(null)).to.be.false
    })

    it('returns true for anything else (even falsies)', () => {
      expect(defined(0)).to.be.true
      expect(defined('')).to.be.true
      expect(defined({})).to.be.true
      expect(defined([])).to.be.true
    })
  })

  describe('"if"', () => {
    const {ifElse} = Filters

    it('works as "if"', () => {
      expect(ifElse(true, 'hello')).to.equal('hello')
      expect(ifElse(false, 'hello')).to.be.undefined
    })

    it('works as "if-else"', () => {
      expect(ifElse(true, 'hello', 'world')).to.equal('hello')
      expect(ifElse(false, 'hello', 'world')).to.equal('world')
    })
  })
  // endregion

  // region arrays
  describe('"join"', () => {
    const {join} = Filters

    it('returns correct arrays joined as string with correct separator', () => {
      /* eslint-disable no-magic-numbers */
      expect(join([], ' - ')).to.equal('')
      expect(join([1, 2, 3], ' | ')).to.equal('1 | 2 | 3')
      expect(join(['a', 'b', 'c'])).to.equal('a,b,c')
      expect(join([0, 0, 7], '')).to.equal('007')
      /* eslint-enable no-magic-numbers */
    })

    it('returns an empty string if the original argument is null or undefined', () => {
      expect(join(null, ',')).to.equal('')
      expect(join(undefined)).to.equal('')
    })

    it('returns not-array objects intact', () => {
      let tested = 'abc'
      expect(join(tested, ', ')).to.equal(tested)

      tested = {
        a: 'hello',
        b: 'world'
      }
      expect(join(tested, ', ')).to.equal(tested)
    })
  })
  // endregion

  // region objects
  describe('"map"', () => {
    const {map} = Filters
    const i18n = {hello: 'world'}

    it('returns an empty string if first argument is null or undefined', () => {
      expect(map(null, i18n)).to.equal('')
      expect(map(undefined)).to.equal('')
    })

    it('returns the expected field', () => {
      expect(map('hello', i18n)).to.equal('world')
    })

    it('returns the original value if the requested field is not in map', () => {
      expect(map('label', i18n)).to.equal('label')
    })

    it('returns the original value when no map has been provided', () => {
      expect(map('hello')).to.equal('hello')
    })
  })
  // endregion

  // region formatting
  describe('"startWithCap"', () => {
    const {startWithCap} = Filters

    it('returns an empty string if value is null or undefined', () => {
      expect(startWithCap(null)).to.equal('')
      expect(startWithCap()).to.equal('')
    })

    it('makes the first character of a string upper case', () => {
      expect(startWithCap('')).to.equal('')
      expect(startWithCap('x')).to.equal('X')
      expect(startWithCap('hello')).to.equal('Hello')
      expect(startWithCap('WORLD')).to.equal('WORLD')
    })
  })
  // endregion
})
