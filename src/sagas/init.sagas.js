import { takeLatest, put } from 'redux-saga/effects'
import actions from '../actions'
import * as t from '../actionTypes'

export function* fetchDataFlow() {
  try {
    yield put(actions[t.FCM_SUBSCRIBE_REQUEST]());
    yield put(actions[t.FETCH_DATA_REQUEST]());
  } catch (error) {
    console.log(error);
  }
}

function* fetchData() {
  yield takeLatest(t.INIT_APP, fetchDataFlow)
}

export default fetchData
