import { fork } from 'redux-saga/effects'
import fetchData from './apiHandlers/fetchData.sagas'
import init from './init.sagas'
import fcmSubscribe from './fcmSubscribe.sagas'

function* rootSagas() {
  yield [fork(fetchData), fork(init), fork(fcmSubscribe)]
}

export default rootSagas
