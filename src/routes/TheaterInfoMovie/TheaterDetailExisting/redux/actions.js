import { FETCH_DETAIL_MOVIE } from './types'
import axios from 'helpers/axios'

//FETCH_DETAIL_MOVIE
export const infoDetailMovie = (MaPhim, loading) => {
  return dispatch => {
    axios.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${MaPhim}`)
      .then(res => {
        dispatch(actFetchDetailMovie(res.data))
      })
      .catch(err => {
        console.error(err)
      })
      .finally(loading.current?.hide)
  }
}

export const actFetchDetailMovie = list => ({
  type: FETCH_DETAIL_MOVIE,
  payload: list
})