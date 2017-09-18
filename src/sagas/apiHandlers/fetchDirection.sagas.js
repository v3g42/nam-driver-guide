import { takeLatest, call, put, select } from 'redux-saga/effects'
import Polyline from '@mapbox/polyline'
import * as api from '../../api'
import actions from '../../actions'
import * as t from '../../actionTypes'
import apiCall from '../utils/apiCall'

export function* fetchDirectionFlow() {
  try {
    const { latitude: sLat, longitude: sLong } = yield select(
      state => state.location.currentLocation
    )
    const currentLocation = `${sLat},${sLong}`
    const nextStop = yield select(state => state.delivery.nextStop.latlong)

    const respJson = yield call(apiCall, api.fetchDirection, {
      startLoc: currentLocation,
      destinationLoc: nextStop,
    })
    const points = Polyline.decode(respJson.routes[0].overview_polyline.points)
    const coords = points.map(point => {
      return {
        latitude: point[0],
        longitude: point[1],
      }
    })
    yield put(actions[t.LOAD_DIRECTION_SUCCESS](coords))
  } catch (error) {
    yield put(actions[t.LOAD_DIRECTION_FAILED](error.message))
  }
}

function* fetchDirection() {
  yield takeLatest(t.LOAD_DIRECTION_REQUEST, fetchDirectionFlow)
  yield takeLatest(t.LOCATION_CHANGED, fetchDirectionFlow)
}

export default fetchDirection
