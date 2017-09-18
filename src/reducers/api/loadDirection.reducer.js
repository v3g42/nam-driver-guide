import * as t from '../../actionTypes'

const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
}

export default function loadDirection(state = initialState, action) {
  switch (action.type) {
    case t.LOAD_DIRECTION_REQUEST:
      return {
        isFetching: true,
        isFetched: false,
        error: null,
      }
    case t.LOAD_DIRECTION_SUCCESS:
      return {
        isFetching: false,
        isFetched: true,
        error: null,
      }
    case t.LOAD_DIRECTION_FAILED:
      return {
        isFetching: false,
        isFetched: false,
        error: action.payload,
      }
    default:
      return state
  }
}
