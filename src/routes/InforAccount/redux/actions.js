import { INFOR_ACCOUNT } from './types'
import axios from 'helpers/axios'
import { actLogin } from '../../Login/redux/actions'

//INFOR_ACCOUNT
export const inforAccount = (taiKhoanNguoiDung) => {
  return dispatch => {
    axios ({
      url: 'api/QuanLyNguoiDung/ThongTinTaiKhoan',
      method: 'POST',
      data: {
        'taiKhoan': taiKhoanNguoiDung
      }
    })
      .then(res => {
        dispatch(actInforAccount(res.data))
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export const actInforAccount = credentialInfomation => ({
  type: INFOR_ACCOUNT,
  payload: credentialInfomation
})

//Cập nhật thông tin người dùng
export const putInforAccount = (userInfo) => {
  console.log(userInfo)
  const mapping = {
    maNhom: 'GP02',
    maLoaiNguoiDung: 'KhachHang',
    ...userInfo
  }

  return dispatch => {
    axios ({
      url: 'api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      method: 'PUT',
      data: mapping
    })
    .then(res => {
      const mapping = {
        ...res.data,
        matKhau: '',
      }
      dispatch(actLogin(mapping))
    })
  }
}

