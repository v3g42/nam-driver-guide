import * as t from '../actionTypes'
import * as c from '../constants'

const initialState = {
  delivery: {
    done: false,
    pickUp: {
      done: false,
      latitude: 10.773466,
      longitude: 106.685371,
      address: '263 Nguyen Dinh Chieu',
    },
    dropOff: {
      done: false,
      latitude: 10.768797,
      longitude: 106.684882,
      address: 'Benh Vien Tu Du',
    },
  },
  visitedStop: [
    {
      latlong: '10.157189, 106.172099',
      address: 'Thu Duc market',
    },
    {
      latlong: '10.257189, 106.272099',
      address: '11 Hoang Dieu 2 Street',
    },
    {
      latlong: '10.357189, 106.262099',
      address: '12 Pham Van Dong Street',
    },
  ],
}

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case t.REACHED_TO_CURRENT_DELIVERY:
      const delivery =
        payload === c.GOTO_PICKUP
          ? { pickUp: { ...state.delivery.pickUp, done: true } }
          : { done: true, dropOff: { ...state.delivery.dropOff, done: true } }
      return {
        ...state,
        delivery: {
          ...state.delivery,
          ...delivery,
        },
      }
    case t.ADD_DELIVERY:
      return {
        ...state,
        currentStop: payload,
      }
    default:
      return state
  }
}
