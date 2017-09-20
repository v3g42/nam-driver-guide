import { takeLatest, call, put, select } from 'redux-saga/effects'
import Polyline from '@mapbox/polyline'
import { Actions as scenes } from 'react-native-router-flux'
import Toast from '@remobile/react-native-toast'
import * as api from '../../api'
import * as util from '../../utils'
import actions from '../../actions'
import * as t from '../../actionTypes'
import * as c from '../../constants'
import apiCall from '../utils/apiCall'

function exportCoords(respJson) {
  const points = Polyline.decode(respJson.routes[0].overview_polyline.points)
  return points.map(point => {
    return {
      latitude: point[0],
      longitude: point[1],
    }
  })
}

function* judge(latitude, longitude, targetLatitude, targetLongitude, phase) {
  const distanceForJudge = util.getDistanceFromLatLonInMet(
    { latitude, longitude },
    { targetLatitude, targetLongitude }
  )
  if (distanceForJudge <= 100) {
    yield put(actions[t.REACHED_TO_CURRENT_DELIVERY](phase))

    Toast.show(`You've reached to ${phase}!`)
    if (phase === c.GOTO_DROPOFF) scenes[c.WAITING_FOR_NEXT_DELIVERY_MODAL]()
  }
}

export function* fetchDirectionFlow() {
  try {
    const delivery = yield select(state => state.delivery.delivery)
    if (delivery.done) return

    const { latitude, longitude } = yield select(
      state => state.location.currentLocation
    )

    const startLoc = `${latitude},${longitude}`

    let phase = c.GOTO_PICKUP

    let {
      latitude: targetLatitude,
      longitude: targetLongitude,
    } = delivery.pickUp

    if (delivery.pickUp.done) {
      phase = c.GOTO_DROPOFF
      targetLatitude = delivery.dropOff.latitude
      targetLongitude = delivery.dropOff.longitude
    }
    const destinationLoc = `${targetLatitude},${targetLongitude}`

    const respJson = yield call(apiCall, api.fetchDirection, {
      startLoc,
      destinationLoc,
    })
    const {
      distance,
      duration,
      end_address: endAddress,
      start_address: startAddress,
    } = respJson.routes[0].legs[0]

    yield judge(latitude, longitude, targetLatitude, targetLongitude, phase)

    const coords = exportCoords(respJson)
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
