import { GET_USERS_LIST, GET_USERS_TYPE } from './types'

const initialState = {
  usersList: [],
  usersType: [],
}

export default function inforUsersListReducer(state = initialState, { type, payload}) {
  switch (type) {
    case GET_USERS_LIST: {
      return { ...state, usersList: payload }
    }
    case GET_USERS_TYPE: {
      return { ...state, usersType: payload }
    }

    default: return state
  }
}