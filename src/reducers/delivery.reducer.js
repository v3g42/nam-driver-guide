import * as t from '../actionTypes'

const initialState = {
  nextStop: {
    latlong: '10.757189, 106.672099',
    address: 'An Dong Market',
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

export default function auth(state = initialState, action) {
  switch (action.type) {
    case t.RECEIVED_FCM_NOTIFICATION:
      return {
        ...state,
        visitedStop: [...state.visitedStop, state.nextStop],
        nextStop: action.payload,
      }
    default:
      return state
  }
}
