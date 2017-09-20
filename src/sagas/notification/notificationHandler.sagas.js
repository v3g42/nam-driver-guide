import { takeLatest, put, select, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { Actions as scenes } from 'react-native-router-flux'
import actions from '../../actions'
import * as c from '../../constants'
import * as t from '../../actionTypes'

export function* handleNotificationFlow({ payload }) {
  try {
    const currentStop = yield select(state => state.delivery.currentStop)
    if (!currentStop) {
      yield put(actions[t.ADD_DELIVERY](payload))
      // pop the popup if we have
      try {
        scenes.pop()
      } catch (error) {
        console.log(error)
      }
      yield call(delay, 200)
      scenes[c.NEW_DELIVERY_ADDED_MODAL]()
    }
  } catch (error) {
    console.log(error)
  }
}

function* handleNotification() {
  yield takeLatest(t.RECEIVED_FCM_NOTIFICATION, handleNotificationFlow)
}

export default handleNotification
