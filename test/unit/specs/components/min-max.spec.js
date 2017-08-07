import Vue from 'vue'
import MinMax from '@/components/min-max/min-max.vue'

describe('min-max.vue', () => {
  const Constructor = Vue.extend(MinMax)
  const icon = 'icon-time'
  const unit = '&nbsp;min'

  const mountComponent = display => {
    return new Constructor({
      propsData: {
        display: display,
        icon,
        unit
      }
    }).$mount()
  }

  it('should render correct contents', () => {
    let display = {
      min: 7,
      max: 8
    }
    const vm = mountComponent(display)
    expect(vm.$el.querySelector('.icon').className).to.include(icon)
    expect(vm.$el.querySelector('span:last-child').innerHTML).to.equal(unit)
  })

  it('is hidden if the argument does not have a min nor a max', () => {
    expect(mountComponent({}).$el.className).to.include('invisible')
  })

  it('is visible if the argument has a min or a max', () => {
    expect(mountComponent({min: 13}).$el.className).to.not.include('invisible')
    expect(mountComponent({max: 37}).$el.className).to.not.include('invisible')
  })

  it('returns "true" if the argument has a min and a max', () => {
    expect(mountComponent({min: 13, max: 37}).$el.className).to.not.include('invisible')
  })
})

describe('minMax filter', () => {
  const {minMax} = MinMax.filters

  it('returns an empty string if the argument is falsy', () => {
    expect(minMax(undefined)).to.equal('')
    expect(minMax(null)).to.equal('')
  })

  it('returns the single provided number if the argument has only a min or a max', () => {
    expect(minMax({min: 13}, '|')).to.equal(13)
    expect(minMax({max: 37}, '|')).to.equal(37)
  })

  it('returns a concatenation of both values if the argument has a different min and max', () => {
    expect(minMax({
      min: 42,
      max: 1337
    }, '|')).to.equal('42|1337')
  })

  it('returns a a single value if the argument has the same min and max', () => {
    expect(minMax({
      min: 42,
      max: 42
    }, '|')).to.equal(42)
  })

  it('uses "-" as the default separator', () => {
    expect(minMax({
      min: 42,
      max: 1337
    })).to.equal('42-1337')
  })
})
