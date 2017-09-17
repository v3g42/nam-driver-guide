import { put, call, takeLatest } from 'redux-saga/effects'
import FCM, { FCMEvent } from 'react-native-fcm'
import store from '../configs/store.config'
import actions from '../actions'
import * as t from '../actionTypes'

export const FCMNotificationListener = FCM.on(FCMEvent.Notification, notif => {
  console.log(notif);
  // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
  if (notif.opened_from_tray) {
    store.dispatch(
      actions[t.FCM_NOTIFICATION_FROM_TRAY]({
        notificationPayload: notif.fcm.body,
      })
    )
  } else {
    store.dispatch(
      actions[t.RECEIVED_FCM_NOTIFICATION]({
        notificationPayload: notif.fcm.body,
      })
    )
  }
})

export const FCMRefreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
  // fcm token may not be available on first load, catch it here
  store.dispatch(actions[t.RECEIVED_FCM_TOKEN]({ fcmToken: token }))
})

export function* fcmSubscribeFlow() {
  try {
    console.log('trye');
    FCM.requestPermissions() // for iOS
    const token = yield call(FCM.getFCMToken)
    if (token) {
      yield put(actions[t.RECEIVED_FCM_TOKEN]({ fcmToken: token }))
    }
  } catch (error) {
    console.log(error);
    yield put(actions[t.FCM_SUBSCRIBE_FAILED](error.message))
  }
}

function* fcmSubscribe() {
  yield takeLatest(t.FCM_SUBSCRIBE_REQUEST, fcmSubscribeFlow)
}

export default fcmSubscribe
