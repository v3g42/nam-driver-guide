import * as t from '../actionTypes'
import * as c from '../constants'

const initialState = {
  delivery: {
    done: false,
    pickUp: {
      done: false,
      latitude: 10.86527,
      longitude: 106.759815,
      address: 'Nga tu Binh Duong',
    },
    dropOff: {
      done: false,
      latitude: 10.869105,
      longitude: 106.763212,
      address: 'Linh Trung Thu Duc',
    },
  },
  doneList: [
    {
      done: false,
      pickUp: {
        done: false,
        latitude: 10.773466,
        longitude: 106.685371,
        address: '263 Nguyen Van Chieu, Phuong 212, Quan Go Vap',
      },
      dropOff: {
        done: false,
        latitude: 10.768797,
        longitude: 106.684882,
        address: 'Nha Khoa Tai Mui Hong, Cong Quynh, Quan 12',
      },
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
        doneList:
          payload === c.GOTO_DROPOFF
            ? [state.delivery, ...state.doneList]
            : state.doneList,
      }
    case t.ADD_DELIVERY:
      return {
        ...state,
        delivery: payload,
      }
    default:
      return state
  }
}
