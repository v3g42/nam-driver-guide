import { put, call, takeLatest } from 'redux-saga/effects'
import FCM, { FCMEvent } from 'react-native-fcm'
import { Clipboard } from 'react-native'
import Toast from '@remobile/react-native-toast'
import store from '../../configs/store.config'
import actions from '../../actions'
import * as t from '../../actionTypes'

export const FCMNotificationListener = FCM.on(FCMEvent.Notification, notif => {
  if (notif._notificationType === 'will_present_notification') return // eslint-disable-line
  if (notif.opened_from_tray) {
    store.dispatch(
      actions[t.FCM_NOTIFICATION_FROM_TRAY](JSON.parse(notif.delivery))
    )
  } else {
    store.dispatch(
      actions[t.RECEIVED_FCM_NOTIFICATION](JSON.parse(notif.delivery))
    )
  }
})

export const FCMRefreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
  // fcm token may not be available on first load, catch it here
  store.dispatch(actions[t.RECEIVED_FCM_TOKEN]({ fcmToken: token }))
})

export function* fcmSubscribeFlow() {
  try {
    FCM.requestPermissions() // for iOS
    const token = yield call(FCM.getFCMToken)
    if (token) {
      console.log('fcmToken', token)
      Clipboard.setString(this.props.token)
      Toast.showLongTop('FCM token copied to clipboard')
    }
  } catch (error) {
    console.log(error)
    yield put(actions[t.FCM_SUBSCRIBE_FAILED](error.message))
  }
}

function* fcmSubscribe() {
  yield takeLatest(t.FCM_SUBSCRIBE_REQUEST, fcmSubscribeFlow)
}

export default fcmSubscribe
