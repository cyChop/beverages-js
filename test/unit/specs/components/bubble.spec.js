import promise from 'es6-promise'

import Vue from 'vue'
import Vuex from 'vuex'
import Bubble from '@/components/bubble/bubble.vue'

import i18n from 'i18n'

promise.polyfill()
Vue.use(Vuex)

describe('bubble.vue', () => {
  const Constructor = Vue.extend(Bubble)

  const mountComponent = state => {
    const store = new Vuex.Store({state})
    return new Constructor({store}).$mount()
  }

  it('renders correctly when loading', () => {
    const vm = mountComponent({
      loading: true,
      error: false,
      beverages: {shown: 3}
    })

    expect(vm.$el.textContent.trim()).to.equal(i18n.loading)
    expect(vm.$el.className)
      .to.include('info')
      .and.to.not.include('up')
      .and.to.not.include('error')
    expect(vm.$el.querySelector('span.icon').className)
      .to.include('icon-loading')
      .and.to.include('spin')
      .and.not.to.include('icon-info')
      .and.not.to.include('icon-error')
  })

  it('renders correctly when no beverage is available', () => {
    const vm = mountComponent({
      loading: false,
      error: false,
      beverages: {shown: 0}
    })

    expect(vm.$el.textContent.trim()).to.equal(i18n.error.empty)
    expect(vm.$el.className)
      .to.include('info')
      .and.to.not.include('up')
      .and.to.not.include('error')
    expect(vm.$el.querySelector('span.icon').className)
      .to.include('icon-info')
      .and.not.to.include('spin')
      .and.not.to.include('icon-loading')
      .and.not.to.include('icon-error')
  })

  it('renders correctly when in error', () => {
    let message = 'This is an error message'
    const vm = mountComponent({
      loading: true,
      error: message,
      beverages: {shown: 0}
    })

    expect(vm.$el.textContent.trim()).to.equal(message)
    expect(vm.$el.className)
      .to.include('error')
      .and.to.not.include('up')
      .and.to.not.include('info')
    expect(vm.$el.querySelector('span.icon').className)
      .to.include('icon-error')
      .and.not.to.include('spin')
      .and.not.to.include('icon-loading')
      .and.not.to.include('icon-info')
  })

  it('renders correctly when no message should be shown', () => {
    const vm = mountComponent({
      loading: false,
      error: false,
      beverages: {shown: 3}
    })

    expect(vm.$el.textContent.trim()).to.be.empty
    expect(vm.$el.className).to.include('up')
  })
})
