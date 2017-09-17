import { takeLatest, call, put } from 'redux-saga/effects'
import * as api from '../../api'
import actions from '../../actions'
import * as t from '../../actionTypes'
import apiCall from '../utils/apiCall'

export function* fetchDataFlow() {
  try {
    const categories = yield call(apiCall, api.fetchData)
    yield put(actions[t.FETCH_DATA_SUCCESS](categories))
  } catch (error) {
    yield put(actions[t.FETCH_DATA_FAILED](error.message))
  }
}

function* fetchData() {
  yield takeLatest(t.FETCH_DATA_REQUEST, fetchDataFlow)
}

export default fetchData
