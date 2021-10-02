import React from 'react'
import '../assets/InforAccount.scss'
import _ from 'lodash'
import moment from 'moment'

export default function ListBooked({ inforUser }) {

  return (
    <div className="list__booked-div">
      <table className="table">
        <thead>
          <tr className="listBooked__table-tr">
            <th>Tên phim</th>
            <th>Ngày đặt</th>
            <th>Giá vé</th>
            <th>Hệ thống rạp</th>
            <th>Rạp</th>
            <th>Số ghế</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {
            _.map(inforUser.thongTinDatVe, (listFilm, index)=> (
              <tr className="listBooked__tbody-tr" key={index}>
                <td>{listFilm.tenPhim}</td>
                <td>{moment(listFilm.ngayDat).format('DD/MM/yyyy H:mm')}</td>
                <td>{listFilm.giaVe}</td>
                <td>{listFilm.danhSachGhe[0].tenHeThongRap}</td>
                <td>{listFilm.danhSachGhe[0].tenRap}</td>
                <td>
                  {
                    _.map(listFilm.danhSachGhe, item => (
                      <p>{item.tenGhe},</p>
                    ))
                  }
                </td>
                <td>
                  {((listFilm.giaVe) * (listFilm.danhSachGhe.length)).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                  })}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
