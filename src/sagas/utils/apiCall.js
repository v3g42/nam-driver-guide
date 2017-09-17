import { call, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export default function* apiCall(fn, ...args) {
  const { response, timeout } = yield race({
    response: call(fn, ...args),
    timeout: call(delay, 10000),
  })

  if (timeout) {
    throw new Error('request timed out')
  }

  return response
}
