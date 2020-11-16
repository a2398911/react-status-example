import { Store, registerInDevtools } from 'pullstate'

const CountStore = new Store({
  count: 0,
})

export default CountStore

registerInDevtools({ CountStore })
