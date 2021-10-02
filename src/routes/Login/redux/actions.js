import { LOGIN } from './types'
import Swal from 'sweetalert2'
import axios from 'helpers/axios'

export const login = (userInfo, history, setSubmitting) => {
  return dispatch => {
    axios.post('api/QuanLyNguoiDung/DangNhap', userInfo)
      .then(res => {
        dispatch(actLogin(res.data))
        localStorage.setItem('access_token', res.data.accessToken)
        axios.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`
        history.push('/')
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sai tài khoản hoặc mật khẩu'
        })
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
}

export const actLogin = credential => ({
  type: LOGIN,
  payload: credential
})