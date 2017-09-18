import * as t from '../actionTypes'

const initialState = {
  currentLocation: null,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case t.FETCH_DATA_SUCCESS:
      return {
        ...state,
        news: action.payload.news,
        people: action.payload.people,
      }
    default:
      return state
  }
}
