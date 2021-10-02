import React, { useState, useCallback, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import CommonFormUsers from '../components/CommonFormUsers'
import { inforUsersList } from '../redux/actions'
import axios from 'helpers/axios'
import '../../../assets/Users.scss'

export default function EditUsersContainer() {
  const dispatch = useDispatch()

  const params = useParams()

  const [data, setData] = useState({
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDT: '',
    maNhom: '',
    maLoaiNguoiDung: '',
    hoTen: '',
  })

  const fetchInforUsers = useCallback(() => {
    axios({
      url: `api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: 'POST',
      data: { 'taiKhoan': params.taiKhoan }
    })
      .then(res => {
        setData({
          taiKhoan: res.data.taiKhoan,
          matKhau: res.data.matKhau,
          email: res.data.email,
          soDt: res.data.soDT,
          maNhom: res.data.maNhom,
          maLoaiNguoiDung: res.data.maLoaiNguoiDung,
          hoTen: res.data.hoTen,
        })
      })
  }, [params.taiKhoan])

  useEffect(() => {
    fetchInforUsers()
  }, [fetchInforUsers])

  const history = useHistory()

  const submit = useCallback(() => {
    axios({
      url: 'api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      method: 'PUT',
      data: data
    })
      .then(res => {
        dispatch(inforUsersList(res.data))
        Swal.fire({
          icon: 'success',
          title: 'Yeah',
          text: 'Cập nhật thành công!'
        })
        history.push('/admin/danhSachNguoiDung')
      })
      .catch(err => {
        console.error(err)
        Swal.fire({
          icon: 'error',
          title: 'Rất tiếc',
          text: 'Có gì đó sai sai rồi!'
        })
      })
  }, [data, dispatch, history])

  return (
    <div  className="edit__form">
      <h1 className="text-center mt-3">CẬP NHẬT NGƯỜI DÙNG</h1>
      <button className="btn btn-danger" onClick={() => { history.push('/admin/danhSachNguoiDung') }}>Huỷ</button>
      <CommonFormUsers
        data={data}
        setData={newUsers => { setData({ ...data, ...newUsers }) }}
        btnName="Cập nhật"
        submit={submit}
      />
    </div>
  )
}
