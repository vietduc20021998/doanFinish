import { GET_LIST_FILM, CREATE_SCHEDULE, GET_THONG_TIN_PHIM } from './types'

const initialState = {
  listFilm: [],
  listCumRap: [],
  inforFilm: [],
}

export default function inforListFilmReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_LIST_FILM: {
      return { ...state, listFilm: payload}
    }
    case CREATE_SCHEDULE: {
      return { ...state, listCumRap: payload}
    }

    case GET_THONG_TIN_PHIM: {
      return { ...state, inforFilm: payload}
    }

    default: return state
  }
}