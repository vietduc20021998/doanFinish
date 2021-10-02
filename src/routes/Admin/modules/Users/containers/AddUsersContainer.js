import React, { useState, useCallback } from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CommonFormUsers from '../components/CommonFormUsers'
import { inforUsersList } from '../redux/actions'
import axios from 'helpers/axios'

export default function AddUsersContainer() {
  const history = useHistory()

  const dispatch = useDispatch()

  const [data, setData] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    maNhom: 'GP01',
    maLoaiNguoiDung: '',
    hoTen: '',
  })

  const submit = useCallback(() => {
    axios({
      url: 'api/QuanLyNguoiDung/ThemNguoiDung',
      method: 'POST',
      data: data
    })
      .then(res => {
        dispatch(inforUsersList(res.data))
        Swal.fire({
          icon: 'success',
          title: 'Yeah',
          text: 'Tạo tài khoản thành công!'
        })
        history.push('/admin/danhSachNguoiDung')
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Rất tiếc',
          text: 'Có gì đó sai sai rồi!'
        })
      })
  }, [data, dispatch, history])
  return (
    <div>
      <h1 className="text-center mt-3">THÊM NGƯỜI DÙNG</h1>
      <button className="btn btn-danger" onClick={() => { history.push('/admin/danhSachNguoiDung') }}>Huỷ</button>
      <CommonFormUsers
        data={data}
        setData={newUsers => { setData({ ...data, ...newUsers }) }}
        btnName='Thêm người dùng'
        submit={submit}
      />
    </div>
  )
}
