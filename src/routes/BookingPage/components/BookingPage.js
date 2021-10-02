import React from 'react'
import _ from 'lodash'
import '../assets/BookingPage.scss'
import Button from '@material-ui/core/Button'
import WeekendIcon from '@material-ui/icons/Weekend';
import { useDispatch } from 'react-redux';
import { choosingSeat } from '../redux/actions'

export default function BookingPage({ movieBookingPage, movieSeat, total, reservedSeat, bookTicket }) {
  const dispatch = useDispatch()

  const isReservation = seat => {
    if (!seat.daDat) {
      dispatch(choosingSeat(seat.maGhe))
    }
  }

  return (
    <div className="container-fluid">
      <div className="format__allSeat row">
        <div className="col-lg-8">
          <div className="booking__seat">
            <div className="booking__screen">
              SCREEN
            </div>
            {
              _.map(movieSeat, (seat, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`seat__format d-inline-block mb-2 mr-1 text-center ${seat.loaiGhe} ${seat.isChoosing ? 'isChoosing' : ''} ${seat.daDat ? 'daDat' : ''}`}
                    onClick={() => isReservation(seat)}
                  >
                    <Button variant="contained" size="small">
                      <WeekendIcon />
                    </Button>
                    <div>{seat.tenGhe}</div>
                  </div>
                  {(index + 1) % 16 === 0 && <br />}
                </React.Fragment>
              ))
            }
          </div>
        </div>
        <div className="col-lg-4">
          <div className=" d-flex booking__text">
            <div className="booking__img mr-3">
              <img src={movieBookingPage.hinhAnh} alt={movieBookingPage.tenPhim} />
            </div>
            <div className="booking__text-infor">
              <h3>{movieBookingPage.tenPhim}</h3>
              <p>{movieBookingPage.ngayChieu} - {movieBookingPage.gioChieu} - {movieBookingPage.tenRap}</p>
              <hr className="booking__border-hr" />
              <h5>{movieBookingPage.tenCumRap}</h5>
              <p>{movieBookingPage.diaChi}</p>
            </div>
          </div>
          <div className="booking__text-ing">
            <h4>Ghế đang đặt: </h4>
            <div className="booking__text-reserved">{reservedSeat}</div>
            <hr className="booking__border-hr" />
            <h4>
              Tổng tiền: <span>
                {total.toLocaleString('vi-VN', {
                  style: 'currency',
                  currency: 'VND'
                })}
              </span>
            </h4>
            <button className="booking__format-button" onClick={bookTicket}>ĐẶT VÉ</button>
          </div>
        </div>
      </div>
    </div>
  )
}
