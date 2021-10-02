import { FETCH_LOGO_CINEMA, FETCH_LIST_CINEMA, FETCH_MOVIE_CINEMA } from './types'

const initialState = {
  logo: [],
  list: [],
  movie: []
}

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_LOGO_CINEMA: {
      return { ...state, logo: payload }
    }

    case FETCH_LIST_CINEMA: {
      return { ...state, list: payload }
    }

    case FETCH_MOVIE_CINEMA: {
      return { ...state, movie: payload }
    }

    default:
      return state
  }
}
