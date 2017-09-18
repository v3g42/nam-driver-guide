import { takeLatest, put } from 'redux-saga/effects'
import actions from '../actions'
import * as t from '../actionTypes'

export function* initFlow() {
  try {
    const geo = navigator.geolocation // eslint-disable-line
    geo.requestAuthorization()
    yield put(actions[t.FCM_SUBSCRIBE_REQUEST]())
    yield put(actions[t.FETCH_DATA_REQUEST]())
  } catch (error) {
    console.log(error)
  }
}

function* init() {
  yield takeLatest(t.INIT_APP, initFlow)
}

export default init
