import { REGISTER } from './types'

const initialState = {
  credential: {}
}

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER: {
      return { ...state, credential: payload }
    }

    default:
      return state
  }
}
