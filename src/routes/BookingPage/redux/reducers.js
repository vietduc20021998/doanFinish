import { FETCH_BOOKING_PAGE, CHOOSING_SEAT } from './types'

const initialState = {
  bookingPage: [],
  bookingSeat: [],
}

export default function bookingPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_BOOKING_PAGE: {
      const mapping = payload.danhSachGhe.map(seat => ({ ...seat, isChoosing: false }))
      return { ...state, bookingPage: payload.thongTinPhim, bookingSeat: mapping }
    }

    case CHOOSING_SEAT: {
      const cloneDanhSachGhe = [...state.bookingSeat]
      const idxFound = cloneDanhSachGhe.findIndex(item => item.maGhe === payload)
      cloneDanhSachGhe[idxFound].isChoosing = !cloneDanhSachGhe[idxFound].isChoosing
      return { ...state, bookingSeat: cloneDanhSachGhe }
    }

    default:
      return state
  }
}