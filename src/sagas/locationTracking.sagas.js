import { put, call, takeLatest } from 'redux-saga/effects'
import FCM, { FCMEvent } from 'react-native-fcm'
import store from '../configs/store.config'
import actions from '../actions'
import * as t from '../actionTypes'

export function* fcmSubscribeFlow() {
  try {
  } catch (error) {
    console.log(error)
    yield put(actions[t.FCM_SUBSCRIBE_FAILED](error.message))
  }
}

function* fcmSubscribe() {
  yield takeLatest(t.FCM_SUBSCRIBE_REQUEST, fcmSubscribeFlow)
}

export default fcmSubscribe
