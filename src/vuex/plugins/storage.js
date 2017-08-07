const save = (key, state, storage) => storage.setItem(key, JSON.stringify(state))
const restore = (key, storage) => JSON.parse(storage.getItem(key) || '{}')

export default (storage, key, reduce = o => o) => store => {
  const savedState = restore(key, storage)
  store.replaceState(Object.assign({}, store.state, savedState))

  store.subscribe((mutation, state) => {
    save(key, reduce(state), storage)
  })
}
