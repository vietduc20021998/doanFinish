import { FETCH_THEATER_EXISTING, SLICK } from './types'
import axios from 'helpers/axios'

//FETCH_THEATER_EXISTING
export const infoTheaterExisting = (soTrang = 1, soPhanTuTrenTrang = 10) => {
  return dispatch => {
    axios.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`)
      .then(res => {
        dispatch(actFetchTheaterExisting(res.data.items))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actFetchTheaterExisting = list => ({
  type: FETCH_THEATER_EXISTING,
  payload: list
})

//SLICK
export const infoSlick = (soTrang = 1, soPhanTuTrenTrang = 20) => {
  return dispatch => {
    axios.get(`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`)
      .then(res => {
        dispatch(actFetchSlick(res.data.items))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actFetchSlick = list => ({
  type: SLICK,
  payload: list
})
