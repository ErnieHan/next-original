import { combineReducers } from 'redux'
import update from './update'
import set from './set'
import selection from './selection'
import filter from './filter'

const reducers = combineReducers({
  update,
  set,
  selection,
  filter
})

export default reducers
