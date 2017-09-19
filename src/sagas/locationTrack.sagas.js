import { takeLatest, put, select } from 'redux-saga/effects'
import actions from '../actions'
import * as t from '../actionTypes'
import * as util from '../utils'

export function* locationTrackFlow() {
  try {
    const { latitude: lat1, longitude: lon1 } = yield select(
      state => state.location.currentLocation
    )
    const currentStopString = yield select(
      state => state.delivery.currentStop.latlong
    )
    const currentStopArr = currentStopString.split(',')
    const lat2 = currentStopArr[0]
    const lon2 = currentStopArr[1]

    const distance = util.getDistanceFromLatLonInMet(
      { lat1, lon1 },
      { lat2, lon2 }
    )
    yield put(actions[t.RE_CALCULATED_DISTANCED](distance))
  } catch (error) {
    console.log(error)
  }
}

function* locationTrack() {
  yield takeLatest(t.LOCATION_CHANGED, locationTrackFlow)
}

export default locationTrack
