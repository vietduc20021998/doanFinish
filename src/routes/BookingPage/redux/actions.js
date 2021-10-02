import { FETCH_BOOKING_PAGE, CHOOSING_SEAT } from './types'
import axios from 'helpers/axios'

//FETCH_BOOKING_PAGE
export const infoBookingPage = (maLichChieu, loading) => {
  return dispatch => {
    axios.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    .then(res => {
      dispatch(actFetchBookingPage(res.data))
      console.log(res.data)
    })
    .catch(err => {
      console.error(err)
    })
    .finally(loading.current?.hide)
  }
}

export const actFetchBookingPage = list => ({
  type: FETCH_BOOKING_PAGE,
  payload: list
})

export const choosingSeat = maGhe => ({
  type: CHOOSING_SEAT,
  payload: maGhe
})

export const booking = thongTinDatVe => {
  return dispatch => {
    axios ({
      url: '/api/QuanLyDatVe/DatVe',
      method: 'POST',
      data: thongTinDatVe
    })
    .then(res => {
      dispatch(actBooking(res.data))
    })
    .catch(err => {
      console.error(err)
    })
  }
}

export const actBooking = bookingInfo => ({
  type: FETCH_BOOKING_PAGE,
  payload: bookingInfo
})