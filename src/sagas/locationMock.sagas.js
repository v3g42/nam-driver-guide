import { put, select, takeLatest } from 'redux-saga/effects'
import actions from '../actions'
import * as t from '../actionTypes'

export function* locationMockFlow() {
  try {
    const location = yield select(state => state.location)

    yield put(actions[t.LOCATION_CHANGED](location.router.coords[1]))
  } catch (error) {
    console.log(error)
  }
}

function* locationMock() {
  yield takeLatest(t.LOCATION_MOCK, locationMockFlow)
}

export default locationMock
