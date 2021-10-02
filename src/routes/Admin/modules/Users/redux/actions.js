import axios from 'helpers/axios'
import { GET_USERS_LIST, GET_USERS_TYPE } from './types'

//GET_USERS_LIST
export const inforUsersList = () => {
  return dispatch => {
    axios({
      url: '/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02',
      method: 'GET',
    })
      .then(res => {
        dispatch(actInforUsersList(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actInforUsersList = list => ({
  type: GET_USERS_LIST,
  payload: list
})

//searchUsers
export const inforSearchMovie = tuKhoa => {
  return dispatch => {
    axios({
      url: `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02&tuKhoa=${tuKhoa}`,
      method: 'GET',
    })
      .then(res => {
        dispatch(actInforUsersList(res.data))
      })
  }
}

//lấy danh sách loại người dùng
export const inforUserType = () => {
  return dispatch => {
    axios({
      url: 'api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung',
      method: 'GET',
    })
      .then(res => {
        dispatch(actUserType(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const actUserType = list => ({
  type: GET_USERS_TYPE,
  payload: list
})