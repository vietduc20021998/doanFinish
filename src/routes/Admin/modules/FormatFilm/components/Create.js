/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"
import { inforCreateFilm } from '../../../redux/actions'
import DatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"

export default function Create() {

  const dispatch = useDispatch()

  const [picture, setPicture] = useState(null)

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

  const submit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('maPhim', data.maPhim)
    formData.append('tenPhim', data.tenPhim)
    formData.append('biDanh', data.biDanh)
    formData.append('trailer', data.trailer)
    formData.append('hinhAnh', data.hinhAnh)
    formData.append('moTa', data.moTa)
    formData.append('maNhom', data.maNhom)
    formData.append('ngayKhoiChieu', moment(data.ngayKhoiChieu).format('DD/MM/yyyy'))
    formData.append('danhGia', data.danhGia)

    dispatch(inforCreateFilm(formData))
  }

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]))
    setData({ ...data, hinhAnh: e.target.files[0] })
  };

  const history = useHistory()

  const toCancel = () => {
    history.push('/admin/listFilm')
  }

  return (
    <div>
      <button className="btn btn-outline-danger" onClick={toCancel}>Huỷ bỏ</button>

      <div>
        <form onSubmit={e => submit(e)} id="myForm" name="myForm">
          <div>
            <label htmlFor="tenPhim">Tên phim</label>
            <input type="text" id="tenPhim" name="tenPhim" onChange={e => setData({ ...data, tenPhim: e.target.value })} />
          </div>
          <div>
            <label htmlFor="biDanh">Bí danh</label>
            <input type="text" id="biDanh" name="biDanh" onChange={e => setData({ ...data, biDanh: e.target.value })} />
          </div>
          <div>
            <label htmlFor="trailer">Trailer</label>
            <input type="text" id="trailer" name="trailer" onChange={e => setData({ ...data, trailer: e.target.value })} />
          </div>
          <div>
            <label htmlFor="hinhAnh">Hình ảnh</label>
            <input
              accept="image/*"
              type="file" id="hinhAnh" name="hinhAnh"
              onChange={e => onChangePicture(e)}
            />
            <img src={picture} alt="picture" />
          </div>
          <div>
            <label htmlFor="moTa">Mô tả</label>
            <input type="text-aria" id="moTa" name="moTa" onChange={e => setData({ ...data, moTa: e.target.value })} />
          </div>
          <div>
            <DatePicker
              selected={data.ngayKhoiChieu}
              name="ngayKhoiChieu"
              dateFormat="dd/MM/yyyy"
              onChange={value => setData({ ...data, ngayKhoiChieu: value })}
            />
          </div>
          <div>
            <label htmlFor="danhGia">Đánh giá</label>
            <input type="text" id="danhGia" name="danhGia" placeholder="Đánh giá" onChange={e => setData({ ...data, danhGia: e.target.value })} />
          </div>
          <input type="submit" defaultValue="Submit!" />
        </form>
      </div>
    </div>
  )
}
