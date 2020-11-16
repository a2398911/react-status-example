import { combineReducers } from 'redux'
import count from './count'

const countApp = combineReducers({
  count,
})

export default countApp
