import axios from 'helpers/axios'

export const register = (userInfo, history, setSubmitting) => {
  console.log(userInfo)

  const mapping = {
    maNhom: 'GP02',
    maLoaiNguoiDung: 'KhachHang',
    ...userInfo
  }

  return () => {
    axios.post('api/QuanLyNguoiDung/DangKy', mapping)
      .then(res => {
        console.log(res.data)
        history.push('/user/Login')
      })
  }
}