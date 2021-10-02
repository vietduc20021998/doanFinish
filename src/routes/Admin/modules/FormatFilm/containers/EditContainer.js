import React, { useState, useEffect, useCallback, useRef } from 'react'
import Swal from 'sweetalert2'
import { useHistory, useParams } from 'react-router-dom'
import Edit from '../components/Edit'
import { objectToFormData } from 'helpers/func'
import axios from 'helpers/axios'
import { Loading } from 'routes/Components/Loading/components/Loading'

export default function EditContainer() {
  const loading = useRef()
  const params = useParams()
  const history = useHistory()

  const [initNgayKhoiChieu, setInitNgayKhoiChieu] = useState('')

  const [data, setData] = useState({
    maPhim: 0,
    tenPhim: '',
    biDanh: '',
    trailer: '',
    hinhAnh: '',
    moTa: '',
    maNhom: 'GP01',
    ngayKhoiChieu: '',
    danhGia: 0
  })

  const fetchEditFilm = useCallback(() => {
    axios({
      url: `api/QuanLyPhim/LayThongTinPhim?MaPhim=${params.maPhim}`,
      method: 'GET',
    })
      .then(res => {
        setData({
          maPhim: res.data.maPhim,
          tenPhim: res.data.tenPhim,
          biDanh: res.data.biDanh,
          trailer: res.data.trailer,
          hinhAnh: res.data.hinhAnh,
          moTa: res.data.moTa,
          maNhom: res.data.maNhom,
          ngayKhoiChieu: res.data.ngayKhoiChieu,
          danhGia: res.data.danhGia,
        })
        setInitNgayKhoiChieu(res.data.ngayKhoiChieu)
      })
      .finally(loading.current?.hide)
  }, [params.maPhim])

  useEffect(() => {
    fetchEditFilm()
    loading.current.show()
  }, [fetchEditFilm])

  const submit = useCallback(() => {
    axios({
      url: 'api/QuanLyPhim/CapNhatPhimUpload',
      method: 'POST',
      data: objectToFormData(data)
    })
      .then(res => {
        Swal.fire({
          icon: 'success',
          title: 'Yeah',
          text: 'Cập nhật thành công!'
        })
        history.push('/admin/listFilm')
      })
      .catch(err => {
        console.error(err)
        Swal.fire({
          icon: 'error',
          title: 'Rất tiếc',
          text: 'Có gì đó sai sai rồi!'
        })
      })
  }, [data, history])

  const toCancel = () => {
    history.push('/admin/listFilm')
  }

  return (
    <div>
      <button className="btn btn-outline-danger" onClick={toCancel}>Huỷ bỏ</button>
      <h1 className="text-center mt-3">CHỈNH SỬA PHIM</h1>
      <Edit
        setData={newUsers => { setData({ ...data, ...newUsers }) }}
        submit={submit}
        data={data}
        initNgayKhoiChieu={initNgayKhoiChieu}
      />
      <Loading ref={loading} />
    </div>
  )
}
