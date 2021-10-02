import _ from 'lodash'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inforUserType } from '../redux/actions'

export default function CommonFormUsers({ setData, btnName, submit, data }) {
  const dispatch = useDispatch()

  const usersTypes = useSelector(state => state.inforUsersListReducer.usersType)

  useEffect(() => {
    dispatch(inforUserType())
  }, [dispatch])

  return (
    <div className="common__form">
      <div className="form-group">
        <label htmlFor="taiKhoan">Tài khoản</label>
        <input value={data.taiKhoan} className="form-control" type="text" id="taiKhoan" name="taiKhoan" onChange={e => setData({ taiKhoan: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="matKhau">Mật khẩu</label>
        <input value={data.matKhau} className="form-control" type="password" id="matKhau" name="matKhau" onChange={e => setData({ matKhau: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="hoTen">Họ tên</label>
        <input value={data.hoTen} className="form-control" type="text" id="hoTen" name="hoTen" onChange={e => setData({ hoTen: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Mail</label>
        <input value={data.email} className="form-control" type="text" id="email" name="email" onChange={e => setData({ email: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="soDt">Số điện thoại</label>
        <input value={data.soDt} className="form-control" type="text" id="soDt" name="soDt" onChange={e => setData({ soDt: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="maLoaiNguoiDung">Mã loại người dùng</label>
        <select value={data.loaiNguoiDung} className="form-control" name="maLoaiNguoiDung" id="maLoaiNguoiDung" onChange={e => setData({ maLoaiNguoiDung: e.target.value })}>
          <option>Chọn</option>
          {
            _.map(usersTypes, (item, index) => (
              <>
                <option key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</option>
              </>
            ))
          }
        </select>
      </div>
      <button className="btn btn-success" type="submit" onClick={submit} >{btnName}</button>
    </div>
  )
}
