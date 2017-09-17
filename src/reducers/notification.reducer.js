import * as t from '../actionTypes'

const initialState = {
  fcmToken: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case t.RECEIVED_FCM_TOKEN:
      return {
        ...state,
        fcmToken: action.payload.fcmToken
      }
    default:
      return state
  }
}
