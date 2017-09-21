import { fork } from 'redux-saga/effects'
import fetchData from './apiHandlers/fetchData.sagas'
import fetchDirection from './apiHandlers/fetchDirection.sagas'
import init from './init.sagas'
import fcmSubscribe from './notification/fcmSubscribe.sagas'
import notificationHandler from './notification/notificationHandler.sagas'
import locationMock from './locationMock.sagas'

function* rootSagas() {
  yield [
    fork(fetchData),
    fork(fetchDirection),
    fork(init),
    fork(fcmSubscribe),
    fork(notificationHandler),
    fork(locationMock),
  ]
}

export default rootSagas
