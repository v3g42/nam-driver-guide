import * as t from '../../actionTypes'

const initialState = {
  isFetching: false,
  isFetched: false,
  error: null,
}

export default function magicLink(state = initialState, action) {
  switch (action.type) {
    case t.FETCH_DATA_REQUEST:
      return {
        isFetching: true,
        isFetched: false,
        error: null,
      }
    case t.FETCH_DATA_SUCCESS:
      return {
        isFetching: false,
        isFetched: true,
        error: null,
      }
    case t.FETCH_DATA_FAILED:
      return {
        isFetching: false,
        isFetched: false,
        error: action.payload,
      }
    default:
      return state
  }
}
