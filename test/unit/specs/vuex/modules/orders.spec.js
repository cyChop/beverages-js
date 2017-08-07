import { actions, getters, MUT_ADD_ORDER, MUT_CLR_ORDER, MUT_UPD_ORDER, mutations, Order } from '@/vuex/modules/orders'
import { testAction } from '../utils'

const beverage1 = {
  id: 'someblackid',
  name: 'Some black',
  brand: 'Green & black',
  basis: 'tea-black'
}
const beverage2 = {
  id: 'somerooibosid',
  name: 'Some Rooibos',
  brand: 'Green & black',
  basis: 'tea-rooibos'
}

describe('An order', () => {
  it('has the same ID as the beverage passed as an argument', () => {
    const order = new Order(beverage1)

    expect(order.id).to.equal(beverage1.id)
  })

  it('is created with a default quantity of 1', () => {
    const order = new Order(beverage1)

    expect(order.quantity).to.equal(1)
  })

  it('can be created with a quantity other than 1', () => {
    const order = new Order(beverage1, 42)
    expect(order.quantity).to.equal(42)
  })
})

describe('Getter', () => {
  describe('"total"', () => {
    it('returns 0 when orders is empty', () => {
      expect(getters.total({orders: []})).to.equal(0)
    })

    it('returns the sum of all orders quantities', () => {
      expect(getters.total({
        orders: [
          new Order(beverage1, 2),
          new Order(beverage2, 3)
        ]
      })).to.equal(5)
    })
  })
})

describe('Mutation', () => {
  describe('"' + MUT_ADD_ORDER + '"', () => {
    const mutate = mutations[MUT_ADD_ORDER]

    it('adds an order to the state', () => {
      const state = {orders: []}
      mutate(state, {beverage: beverage1, quantity: 42})
      expect(state.orders).to.have.lengthOf(1)
      expect(state.orders[0].quantity).to.equal(42)
    })

    it('works even if quantity is not specified', () => {
      const state = {orders: []}
      mutate(state, {beverage: beverage1})
      expect(state.orders).to.have.lengthOf(1)
      expect(state.orders[0].quantity).to.equal(1)
    })
  })

  describe('"' + MUT_UPD_ORDER + '"', () => {
    const mutate = mutations[MUT_UPD_ORDER]

    it('updates the quantity of an order in state', () => {
      const state = {orders: [new Order(beverage1, 2)]}
      mutate(state, {index: 0, quantity: 3})
      expect(state.orders).to.have.lengthOf(1)
      expect(state.orders[0].quantity).to.equal(5)
    })
  })

  describe('"' + MUT_CLR_ORDER + '"', () => {
    const mutate = mutations[MUT_CLR_ORDER]

    it('empties the orders in the state', () => {
      const state = {orders: [new Order(beverage1), new Order(beverage2, 5)]}
      mutate(state)
      expect(state.orders).to.be.empty
    })
  })
})

describe('Action', () => {
  describe('"order"', () => {
    it('updates an order if one already exists for the beverage', done => {
      testAction(
        actions.order,
        {beverage: beverage1, quantity: 2},
        {orders: [new Order(beverage1)]},
        [{type: MUT_UPD_ORDER, payload: {index: 0, quantity: 2}}],
        done
      )
    })

    it('adds a new order if none exists for the beverage yet', done => {
      testAction(
        actions.order,
        {beverage: beverage1, quantity: 3},
        {orders: [new Order(beverage2, 5)]},
        [{type: MUT_ADD_ORDER, payload: {beverage: beverage1, quantity: 3}}],
        done
      )
    })

    it('uses one as default quantity if not specified', done => {
      testAction(
        actions.order,
        {beverage: beverage1},
        {orders: []},
        [{type: MUT_ADD_ORDER, payload: {beverage: beverage1, quantity: 1}}],
        done
      )
    })
  })

  describe('"clear"', () => {
    it('defers call to clear mutation', done => {
      testAction(
        actions.clear,
        null,
        {orders: [new Order(beverage1)]},
        [{type: MUT_CLR_ORDER}],
        done
      )
    })
  })
})
