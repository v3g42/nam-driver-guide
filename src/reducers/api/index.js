import { combineReducers } from 'redux'
import loadData from './loadData.reducer'
import loadDirection from './loadDirection.reducer'

export default combineReducers({
  loadData,
  loadDirection,
})
