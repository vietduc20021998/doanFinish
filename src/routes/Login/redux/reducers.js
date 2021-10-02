import { LOGIN, CLEAR_STORE } from './types'

const initialState = {
  credential: { access_token: localStorage.getItem('access_token') }
}

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN: {
      return { ...state, credential: { ...state.credential, ...payload } };

    }
    case CLEAR_STORE:
      return { ...state, credential: { ...state.credential, accessToken: undefined } };

    default:
      return state
  }
}
