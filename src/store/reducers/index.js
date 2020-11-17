import { combineReducers } from 'redux'
import home from './home'
import loading from './loading'

const reducers = combineReducers({
  home,
  loading
})

export default reducers
