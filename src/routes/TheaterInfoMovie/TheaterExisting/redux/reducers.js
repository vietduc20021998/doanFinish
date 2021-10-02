import { FETCH_THEATER_EXISTING, SLICK } from './types'

const initialState = {
  existing: []
}

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_THEATER_EXISTING: {
      return { ...state, existing: payload }
    }
    case SLICK: {
      return { ...state, existing: payload }
    }

    default:
      return state
  }
}
