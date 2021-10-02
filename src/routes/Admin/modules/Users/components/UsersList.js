import React from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import '../../../assets/Users.scss'

import SettingsIcon from '@material-ui/icons/Settings';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import EditIcon from '@material-ui/icons/Edit';

export default function UsersList({ listUsers, searchUsers, onDeleteUsers }) {
  const history = useHistory()

  return (
    <div className="user__list-format">
      <h1 className="text-center">tài khoản</h1><br />
      <button
        className="btn btn-success"
        onClick={() => { history.push('danhSachNguoiDung/themNguoiDung') }}
      >
        Thêm người dùng
      </button><br />
      <input type="text" placeholder="Nhập Họ tên" onChange={e => searchUsers(e.target.value)} />
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tài khoản</th>
            <th>Mật khẩu</th>
            <th>Họ tên</th>
            <th>Mail</th>
            <th>Số điện thoại</th>
            <th className="text-center"><SettingsIcon /></th>
          </tr>
        </thead>
        <tbody>
          {
            _.map(listUsers, (item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.taiKhoan}</td>
                <td>{item.matKhau}</td>
                <td>{item.hoTen}</td>
                <td>{item.email}</td>
                <td>{item.soDt}</td>
                <td className="text-center">
                  <button onClick={() => { onDeleteUsers(item.taiKhoan) }}><DeleteSweepIcon /></button>
                  <button onClick={() => { history.push(`danhSachNguoiDung/${item.taiKhoan}/editUsers`)}}><EditIcon /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
