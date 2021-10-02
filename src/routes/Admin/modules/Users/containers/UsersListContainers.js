import React, { useEffect, useCallback } from 'react'
import Swal from 'sweetalert2'
import UsersList from '../components/UsersList'
import { useDispatch, useSelector } from 'react-redux'
import { inforUsersList, inforSearchMovie } from '../redux/actions'
import axios from 'helpers/axios'

export default function AddUsersContainers() {
  const dispatch = useDispatch()

  const listUsers = useSelector(state => state.inforUsersListReducer.usersList)

  const searchUsers = useCallback(tuKhoa => {
    if(tuKhoa === '') {
      dispatch(inforUsersList())
    } else {
      dispatch(inforSearchMovie(tuKhoa.replace(/\s+/g, '-')))
    }
  },[dispatch])

  useEffect(() => {
    dispatch(inforUsersList())
  }, [dispatch])

  const onDeleteUsers = useCallback(taiKhoan => {
    axios({
      url: `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: 'DELETE',
    })
    .then(res => {
      dispatch(inforUsersList(res.data))
      Swal.fire({
        icon: 'success',
        title: 'Yeah',
        text: 'Xoá thành công!'
      })
    })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Rất tiếc',
          text: 'Bạn không có quyền xoá!'
        })
      })
  }, [dispatch])

  return (
    <div>
      <UsersList 
        listUsers={listUsers}
        searchUsers={searchUsers}
        onDeleteUsers={onDeleteUsers}
      />
    </div>
  )
}
