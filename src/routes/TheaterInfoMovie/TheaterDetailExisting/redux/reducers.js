import { FETCH_DETAIL_MOVIE } from './types'

const initialState = {
  detailState: [],
}

export default function reducers(state = initialState, { type, payload }) {
  switch (type) {
    // case FETCH_DETAIL_MOVIE: {
    //   const mapping = payload.heThongRapChieu.map(codeTheater => ({ ...codeTheater, isChoosing: false }))
    //   return { ...state, detailState: { ...payload, heThongRapChieu: mapping } }
    // }
    case FETCH_DETAIL_MOVIE: {
      const mapping = payload.heThongRapChieu.map(codeTheater => {
        return (
          codeTheater.cumRapChieu.map(codeTheater1 => {
            return (
              codeTheater1.lichChieuPhim.map(codeTheater2 => ({ ...codeTheater2, isChoosing: false }))
            )
          })
        )
      })
      return { ...state, detailState: { ...payload, lichChieuPhim: mapping } }
    }

    default:
      return state
  }
}