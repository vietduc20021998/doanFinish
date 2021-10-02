/* eslint-disable jsx-a11y/img-redundant-alt */
import moment from 'moment'
import React, { useState } from 'react'
import { DatePicker } from "../../../../Components"
import '../assets/main.scss'

export default function Edit({ data, submit, setData, initNgayKhoiChieu }) {
  const [picture, setPicture] = useState(null)
  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]))
    setData({ ...data, hinhAnh: e.target.files[0] })
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="maPhim">Mã phim</label>
        <input disabled value={data.maPhim} className="form-control" type="text" id="maPhim" name="maPhim" onChange={e => setData({ maPhim: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="tenPhim">Tên phim</label>
        <input value={data.tenPhim} className="form-control" type="text" id="tenPhim" name="tenPhim" onChange={e => setData({ tenPhim: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="biDanh">Bí danh</label>
        <input value={data.biDanh} className="form-control" type="text" id="biDanh" name="biDanh" onChange={e => setData({ biDanh: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="trailer">Trailer</label>
        <input value={data.trailer} className="form-control" type="text" id="trailer" name="trailer" onChange={e => setData({ trailer: e.target.value })} />
      </div>

      <div className="form-group">
        <label htmlFor="hinhAnh">Hình ảnh</label>
        <input
          accept="image/*"
          type="file" id="hinhAnh" name="hinhAnh"
          onChange={e => onChangePicture(e)}
        />
        {picture
          ? <img src={picture} alt="picture" />
          : <img src={data.hinhAnh} alt={data.tenPhim} className="form-control haha" id="hinhAnh" name="hinhAnh" />}
      </div>

      <div className="form-group">
        <label htmlFor="moTa">Mô tả</label>
        <input value={data.moTa} className="form-control" type="text" id="moTa" name="moTa" onChange={e => setData({ moTa: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="maNhom">Mã nhóm</label>
        <input value={data.maNhom} className="form-control" type="text" id="maNhom" name="maNhom" onChange={e => setData({ maNhom: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="ngayKhoiChieu">Ngày khởi chiếu</label>
        <DatePicker
          cb={console.log}
          moment
          value={moment(initNgayKhoiChieu).format('DD/MM/yyyy HH:mm')}
          name="ngayKhoiChieu"
          onChange={e => setData({ ngayKhoiChieu: e.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="danhGia">Đánh giá</label>
        <input value={data.danhGia} className="form-control" type="text" id="danhGia" name="danhGia" onChange={e => setData({ danhGia: e.target.value })} />
      </div>
      <button className="btn btn-success" type="submit" onClick={submit} >Cập nhật</button>
    </div>
  )
}
