import * as t from '../actionTypes'

const initialState = {
  currentLocation: null,
  router: {
    coords: null,
    distance: null,
    duration: null,
    startAddress: null,
    endAddress: null,
  },
}

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case t.LOCATION_CHANGED:
      return {
        ...state,
        currentLocation: {
          ...payload,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0421,
        },
      }
    case t.LOAD_DIRECTION_SUCCESS:
      const { distance, duration, startAddress, endAddress, coords } = payload
      return {
        ...state,
        router: {
          coords,
          distance,
          duration,
          startAddress,
          endAddress,
        },
      }
    case t.REACHED_TO_CURRENT_DELIVERY:
      return {
        ...state,
        router: initialState.router,
      }
    default:
      return state
  }
}
