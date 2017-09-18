import { fork } from 'redux-saga/effects'
import fetchData from './apiHandlers/fetchData.sagas'
import fetchDirection from './apiHandlers/fetchDirection.sagas'
import init from './init.sagas'
import fcmSubscribe from './fcmSubscribe.sagas'

function* rootSagas() {
  yield [fork(fetchData), fork(fetchDirection), fork(init), fork(fcmSubscribe)]
}

export default rootSagas
