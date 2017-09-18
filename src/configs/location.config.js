import store from './store.config'
import actions from '../actions'
import * as t from '../actionTypes'

const geo = navigator.geolocation // eslint-disable-line
geo.watchPosition(position => {
  const { coords } = position
  store.dispatch(actions[t.LOCATION_CHANGED](coords))
})
