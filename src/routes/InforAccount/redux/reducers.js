import { INFOR_ACCOUNT, PUT_INFOR_ACCOUNT } from './types'

const initialState = {
  credentialInfomation: {}
}

export default function inforAccountReducer(state = initialState, { type, payload }) {
  switch (type) {
    case INFOR_ACCOUNT: {
      return { ...state, credentialInfomation: payload }
    }

    case PUT_INFOR_ACCOUNT: {
      return { ...state, credentialInfomation: payload }
    }

    default:
      return state
  }
}
