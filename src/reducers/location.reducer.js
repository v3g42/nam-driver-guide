import * as t from '../actionTypes'

const initialState = {
  currentLocation: null,
  router: null,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case t.LOCATION_CHANGED:
      return {
        ...state,
        currentLocation: {
          ...action.payload,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0421,
        },
      }
    case t.LOAD_DIRECTION_SUCCESS:
      return {
        ...state,
        router: action.payload.coords,
      }
    case t.REACHED_TO_CURRENT_DELIVERY:
      return {
        ...state,
        router: null,
      }
    default:
      return state
  }
}
