import { takeLatest, put, select } from 'redux-saga/effects'
import actions from '../../actions'
import * as t from '../../actionTypes'
// eslint-disable-next-line
import * as util from '../../utils'

export function* handleNotificationFlow() {
  try {
    // eslint-disable-next-line
    const state = yield select()
    // if () {

    // }

    yield put(actions[t.RE_CALCULATED_DISTANCED]())
  } catch (error) {
    console.log(error)
  }
}

function* handleNotification() {
  yield takeLatest(t.LOCATION_CHANGED, handleNotificationFlow)
}

export default handleNotification
