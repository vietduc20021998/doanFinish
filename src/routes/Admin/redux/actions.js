import axios from 'helpers/axios'
import { GET_LIST_FILM, CREATE_SCHEDULE, GET_THONG_TIN_PHIM } from './types'

//GET_LIST_FILM
export const inforListFilm = () => {
  return dispatch => {
    axios({
      url: 'api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02',
      method: 'GET',
    })
      .then(res => {
        dispatch(actInforListFilm(res.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const actInforListFilm = list => ({
  type: GET_LIST_FILM,
  payload: list
})

//CREATE_FILM
export const inforCreateFilm = newMovie => {
  return dispatch => {
    axios({
      url: 'api/QuanLyPhim/ThemPhimUploadHinh',
      method: 'POST',
      data: newMovie
    })
      .catch(err => {
        console.error(err)
      })
  }
}

//get thong tin phim
export const getThongTinPhim = maPhim => {
  return dispatch => {
    axios({
      url: `api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: 'GET',
    })
      .then(res => {
        dispatch(actGetThongTinPhim(res.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const actGetThongTinPhim = list => ({
  type: GET_THONG_TIN_PHIM,
  payload: list
})

//searchMovie
export const inforSearchMovie = tenPhim => {
  return dispatch => {
    axios({
      url: `api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02&tenPhim=${tenPhim}`,
      method: 'GET',
    })
      .then(res => {
        dispatch(actInforListFilm(res.data))
      })
  }
}

//get thông tin rạp
export const inforCreateSchedule = maHeThongRap => {
  return dispatch => {
    axios({
      url: `api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: 'GET'
    })
      .then(res => {
        dispatch(actFetchCreateSchedule(res.data))
      })
  }
}

export const actFetchCreateSchedule = list => ({
  type: CREATE_SCHEDULE,
  payload: list
})

//post lịch chiếu phim
export const postSchedule = newSchedule => {
  return dispatch => {
    axios({
      url: '/api/QuanLyDatVe/TaoLichChieu',
      method: 'POST',
      data: newSchedule
    })
      .catch(err => {
        console.error(err)
      })
  }
}