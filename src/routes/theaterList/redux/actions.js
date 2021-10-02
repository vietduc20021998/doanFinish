import { FETCH_LOGO_CINEMA, FETCH_LIST_CINEMA, FETCH_MOVIE_CINEMA } from './types'
import axios from 'helpers/axios'

//FETCH_LOGO_CINEMA
export const infoLogoCinema = () => {
  return dispatch => {
    axios.get('/api/QuanLyRap/LayThongTinHeThongRap')
      .then(res => {
        dispatch(actFetchLogoCinema(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actFetchLogoCinema = list => ({
  type: FETCH_LOGO_CINEMA,
  payload: list
})

// FETCH_LIST_CINEMA
export const infoListCinema = (maHeThongRap = "BHDStar") => {
  return dispatch => {
    axios.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`)
      .then(res => {
        dispatch(actFetchListCinema(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actFetchListCinema = list => ({
  type: FETCH_LIST_CINEMA,
  payload: list
})

// FETCH_MOVIE_CINEMA
export const infoMovieCinema = (maHeThongRap = "BHDStar") => {
  return dispatch => {
    axios.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`)
      .then(res => {
        dispatch(actFetchMovieCinema(res.data[0].lstCumRap))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actFetchMovieCinema = list => ({
  type: FETCH_MOVIE_CINEMA,
  payload: list
})