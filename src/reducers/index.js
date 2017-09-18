import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import app from './app.reducer'
import notification from './notification.reducer'
import location from './location.reducer'
import delivery from './delivery.reducer'
import api from './api'
import * as t from '../actionTypes'

const rootReducer = combineReducers({
  app,
  api,
  notification,
  location,
  delivery,
  form: formReducer.plugin({
    search: (state, action) => {
      switch (action.type) {
        case t.CLEAR_SEARCH:
          return undefined
        default:
          return state
      }
    },
  }),
})

export default rootReducer
