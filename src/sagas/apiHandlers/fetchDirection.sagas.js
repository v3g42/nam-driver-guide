import { takeLatest, call, put, select } from 'redux-saga/effects'
import Polyline from '@mapbox/polyline'
import { Actions as scenes } from 'react-native-router-flux'
import * as api from '../../api'
import * as util from '../../utils'
import actions from '../../actions'
import * as t from '../../actionTypes'
import * as c from '../../constants'
import apiCall from '../utils/apiCall'

export function* fetchDirectionFlow() {
  try {
    const currentStop = yield select(state => state.delivery.currentStop)
    if (!currentStop) return
    const { latitude: sLat, longitude: sLong } = yield select(
      state => state.location.currentLocation
    )
    const currentLocation = `${sLat},${sLong}`

    const respJson = yield call(apiCall, api.fetchDirection, {
      startLoc: currentLocation,
      destinationLoc: currentStop.latlong,
    })
    const {
      distance,
      duration,
      end_address: endAddress,
      start_address: startAddress,
    } = respJson.routes[0].legs[0]

    const points = Polyline.decode(respJson.routes[0].overview_polyline.points)
    const coords = points.map(point => {
      return {
        latitude: point[0],
        longitude: point[1],
      }
    })

    // judge
    const currentStopArr = currentStop.latlong.split(',')
    const lat2 = currentStopArr[0]
    const lon2 = currentStopArr[1]
    const distanceForJudge = util.getDistanceFromLatLonInMet(
      { lat1: sLat, lon1: sLong },
      { lat2, lon2 }
    )
    if (distanceForJudge <= 100) {
      yield put(actions[t.REACHED_TO_CURRENT_DELIVERY]())
      scenes[c.WAITING_FOR_NEXT_DELIVERY_MODAL]()
    }
    yield put(
      actions[t.LOAD_DIRECTION_SUCCESS]({
        coords,
        distance,
        duration,
        startAddress,
        endAddress,
      })
    )
  } catch (error) {
    yield put(actions[t.LOAD_DIRECTION_FAILED](error.message))
  }
}

function* fetchDirection() {
  yield takeLatest(t.LOAD_DIRECTION_REQUEST, fetchDirectionFlow)
  yield takeLatest(t.LOCATION_CHANGED, fetchDirectionFlow)
}

export default fetchDirection
