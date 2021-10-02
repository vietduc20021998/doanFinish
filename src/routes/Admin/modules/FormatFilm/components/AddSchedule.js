import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import _ from 'lodash'
import DatePicker from "react-datepicker"
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css"

export default function AddSchedule({ maPhim, listTheater, nameTheater, nameListTheater, sendSchedule }) {

  const [schedule, setSchedule] = useState({
    maPhim: maPhim,
  })
  console.log(schedule)

  const [cinemaCode, setCinemaCode] = useState('')

  const history = useHistory()

  const toCancel = () => {
    history.push('/admin/listFilm')
  }

  const submit = e => {
    e.preventDefault()
    sendSchedule({
      ...schedule,
      maPhim: maPhim,
      ngayChieuGioChieu: moment(schedule.ngayChieuGioChieu).format('DD/MM/yyyy hh:mm:ss'),
    })
  }

  return (
    <div>
      <button className="btn btn-outline-danger" onClick={toCancel}>Huỷ bỏ</button>

      <div>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Mã phim</label>
            <input value={maPhim} type="text" className="form-control" disabled />
          </div>
          <div>
            <div className="form-group">
              <label>Tên hệ thống rạp</label>
              <select
                className="form-control"
                onClick={e => nameTheater(e.target.value)}
              >
                {
                  _.map(listTheater, (theater, index) => (
                    <option
                      key={index}
                      value={theater.maHeThongRap}
                    >
                      {theater.maHeThongRap}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="form-group">
              <label>Tên rạp</label>
              <select
                className="form-control"
                onClick={e => setCinemaCode(e.target.value)}
              >
                {
                  _.map(nameListTheater, (nameTheater, index) => (
                    <option
                      key={index}
                      value={nameTheater.tenCumRap}
                    >
                      {nameTheater.tenCumRap}
                    </option>
                  ))
                }
              </select>
            </div>

            <div className="form-group">
              <label>Rạp số - Mã rạp</label>
              <select
                className="form-control"
                onChange={e => setSchedule({ ...schedule, maRap: e.target.value })}
              >
                {
                  _.map(nameListTheater, listCinema => {
                    return listCinema.tenCumRap === cinemaCode && (
                      _.map(listCinema.danhSachRap, (nameCode, index) => (
                        <option
                          key={index}
                          value={nameCode.maRap}
                        >
                          {nameCode.tenRap} - {nameCode.maRap}
                        </option>
                      ))
                    )
                  })
                }
              </select>
            </div>

            <div>
              <label>Ngày chiếu - Giờ chiếu</label>
              <DatePicker
                onChange={value => setSchedule({ ...schedule, ngayChieuGioChieu: value })}
                showTimeSelect
                dateFormat="dd-MM-yyyy H:mm:ss"
                selected={schedule.ngayChieuGioChieu}
                name='ngayChieuGioChieu'
                timeIntervals={15} />
            </div>

            <div>
              <label>Giá vé</label>
              <input
                type="text"
                selected={schedule.giaVe}
                onChange={e => setSchedule({ ...schedule, giaVe: e.target.value })}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-success">Tạo lịch</button>
        </form>
      </div>
    </div>
  )
}
