import { takeLatest, put, select } from 'redux-saga/effects'
import actions from '../../actions'
import * as t from '../../actionTypes'
// eslint-disable-next-line
import * as util from '../../utils'

export function* handleNotificationFlow({ payload }) {
  try {
    // eslint-disable-next-line
    const currentStop = yield select(state.delivery.currentStop)
    if (!currentStop) {
      yield put(actions[t.ADD_DELIVERY](payload))
    }
  } catch (error) {
    console.log(error)
  }
}

function* handleNotification() {
  yield takeLatest(t.RECEIVED_FCM_NOTIFICATION, handleNotificationFlow)
}

export default handleNotification
