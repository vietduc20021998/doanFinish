import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import moment from 'moment'
import '../assets/TheaterDetailExisting.scss'
import '../../../../../node_modules/react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'

export default function TheaterDetailExisting(movieDetail) {
  const history = useHistory()

  const [isOpen, setOpen] = useState(false)

  const [movie, setMovie] = useState('')

  const [time, setTime] = useState('')
  const [cumRap, setCumRap] = useState('')
  const getTimeFilm = (time, cumRap) => {
    setTime(time)
    setCumRap(cumRap)
  }

  return (
    <div className="theater__detail-existing">
      <h1 className="theater__detail-h1">Nội Dung Phim</h1>
      <hr className="border-hr" />
      {
        _.map(movieDetail, (item, index) => (
          <div className="movie" key={index}>
            <div className="row">
              <div className="movie__pic col-3">
                <img src={item.hinhAnh} alt={item.hinhAnh} />
              </div>
              <div className="col-9">
                <h2 className="movie__text">{item.tenPhim}</h2>
                <p><b>Tóm tắt phim:</b> {item.moTa}</p>
                <p><b>Đạo diễn:</b> Anomynos</p>
                <p><b>Thể loại:</b> Thập cẩm</p>
                <p><b>Ngày khởi chiếu:</b> {moment(item.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                <p><b>Thời lượng:</b> Đoán xem</p>
                <p><b>Ngôn ngữ:</b> Phụ đề tiếng Việt</p>
                <p><b>IMDB:</b> {item.danhGia}/10</p>
                <button className="movie__format__button btn btn-primary" onClick={() => setOpen(true)}>XEM TRAILER</button>
                <ModalVideo
                  channel='youtube'
                  autoplay
                  isOpen={isOpen}
                  onClose={() => setOpen(false)}
                >
                  <iframe width="1920" height="1080" src={item.trailer} title={item.tenPhim} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </ModalVideo>
              </div>
            </div>
            <hr className="border-hr" />
            <h2 className="text-center mb-5">LỊCH CHIẾU</h2>
            <div className=" d-flex justify-content-center mb-5" id="booking">
              {
                _.map(item.heThongRapChieu, (item1, index) => (
                  <div className="movie__theater" key={index}>
                    <div className={`movie__theaterLogo ${item1.maHeThongRap === movie.maHeThongRap ? 'active__hover' : ''}`}>
                      <img
                        src={item1.logo}
                        onClick={() => setMovie(item1)}
                        alt='logo'
                      />
                    </div>
                  </div>
                ))
              }
            </div>

            <div>
              {/* <div className="movie__addressScroll col-3">
                {
                  _.map(movie.cumRapChieu, (item2, index) => (
                    <div className="movie__address" key={index}>
                      <div className={`duck ${item2.maCumRap === cumRap ? 'actHover' : ''}`} onClick={() => getDayShow(item2, item2.maCumRap)}>
                        <div className="movie__addressLogo">
                          <img src={movie.logo} alt={item2.tenCumRap} />
                        </div>
                        <p>{item2.tenCumRap}</p>
                      </div>
                    </div>
                  ))
                }
              </div> */}

              <div
                className="movie__addressScroll d-flex mb-5"
              >
                {
                  _.map(movie.cumRapChieu, item2 => (
                    _.map(_.uniq(_.map(item2.lichChieuPhim, item3 =>
                      moment(item3.ngayChieuGioChieu).format('DD-MM'))),
                      (dateShow1, index) => (
                        <button
                          className="movie__addressScroll__button mb-2"
                          key={index}
                          onClick={() => getTimeFilm(dateShow1, item2.maCumRap)}
                        >
                          {dateShow1}
                        </button>
                      )
                    )
                  ))
                }
              </div>

              <div>
                {
                  _.map(movie.cumRapChieu, (dateTime, index) => (
                    <div className="movie__time d-flex" key={index}>
                      {
                        _.map(dateTime.lichChieuPhim, (dateTime1, index) => {
                          if (moment(dateTime1.ngayChieuGioChieu).format('DD-MM') === time) {
                            return (
                              <div className="movie__time-row row" key={index}>
                                <div className="movie__time-pic col-3">
                                  <img src={movie.logo} alt={movie.tenHeThongRap} />
                                </div>
                                <div className="col-9">
                                  <p><b>Địa chỉ: </b>{dateTime.tenCumRap}</p>
                                  <p><b>Tên rạp: </b>{dateTime1.tenRap}</p>
                                  <p><b>Thời lượng: </b>{dateTime1.thoiLuong} phút</p>
                                  <div>
                                    <p><b>Suất chiếu: </b></p>
                                    <button
                                      className="movie__time-button"
                                      onClick={() => { history.push(`/${dateTime1.maLichChieu}/chiTietPhongVe`) }}
                                    >
                                      {moment(dateTime1.ngayChieuGioChieu).format('hh:mm')}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                        })
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}