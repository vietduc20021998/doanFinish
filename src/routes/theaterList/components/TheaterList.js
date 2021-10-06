import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import moment from 'moment'
import '../assets/theaterList.scss'

export default function TheaterList({ logoCinema, listCinema, movieCinema, getListCinema, getMovieCinema }) {
  const history = useHistory()
  const [state, setState] = useState('bhd-star-cineplex-bitexco')

  const theaters = ['bhd-star-cineplex-bitexco', 'cgv-aeon-binh-tan', 'cns-hai-ba-trung', 'glx-kinh-duong-vuong', 'lotte-cantavil', 'megags-cao-thang']

  const user = useSelector(state => state.user.credential)

  const getMovie = (maCumRap, maHeThongRap) => {
    setState(maHeThongRap)
    getMovieCinema(maCumRap)
  }

  const [logoHover, setLogoHover] = useState('BHDStar')

  const getHover = (maHeThongRap) => {
    getListCinema(maHeThongRap)
    setLogoHover(maHeThongRap)
  }

  return (
    <div id="cumRap" className="grid__container">
      <div className="grid__item__1 d-flex justify-content-center mt-5">
        {
          logoCinema.map((item, index) => (
            <div key={index} className="theater__logo">
              <div>
                <img
                  className={`theater__logo__format ${item.maHeThongRap === logoHover ? 'theater__logo-hover' : ''} `}
                  onClick={() => getHover(item.maHeThongRap)}
                  src={item.logo} alt={item.maHeThongRap}
                />
                <p className="theater__name">{item.maHeThongRap}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="format__chooseFilm">
        <h2 className="format__chooseFilm-h2 text-center mb-3">Chọn Rạp</h2>
        <div className="theater__list__scroll">
          {
            listCinema.map((item, index) => (
              <div key={index}>
                {
                  item.lstCumRap.map((item1, index) => (
                    <div
                      className={`theater__list__point ${item1.maCumRap === state ? 'theater__list-hover' : ''}`}
                      key={index}
                      onClick={() => getMovie(item.maHeThongRap, item1.maCumRap)} >
                      <div className="d-flex mb-3 align-items-center">
                        <div className="theater__logo__list">
                          <img src={item.logo} alt={item1.tenCumRap} />
                        </div>
                        <div>
                          <h5 className="theater__list-font">{item1.tenCumRap}</h5>
                          <p className="theater__list-font-diaChi">{item1.diaChi}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="format__chooseSchedule">
        <h2 className="format__chooseSchedule-h2 text-center mb-3">Chọn Lịch Chiếu</h2>
        <div className="theater__list__scroll">
          {
            // eslint-disable-next-line array-callback-return
            movieCinema.map(item => {
              if (item.maCumRap === state) {
                return (
                  item.danhSachPhim.map((item1, index) => {
                    return (
                      <div key={index} className="theater__list-allFilm row">
                        <div className="col-lg-3 theater__list__pic">
                          <img className="theater__list-picFormat" src={item1.hinhAnh} alt={item1.tenPhim} />
                        </div>
                        <div className="col-lg-9 theater__list-schedule">
                          <div className="theater__list__word">{item1.tenPhim}</div>
                          <div className="theater__list-lichChieu">Lịch Chiếu</div>
                          <div className="theater__list__date d-flex">
                            {
                              item1.lstLichChieuTheoPhim.map((item2, index) => (
                                <div key={index}>
                                  <button
                                    onClick={() => { (user.accessToken) ? history.push(`/${item2.maLichChieu}/chiTietPhongVe`) : history.push(`/Login`) }}
                                    className="theater__list-button"
                                  >
                                    {moment(item2.ngayChieuGioChieu).format('DD/MM')} - {moment(item2.ngayChieuGioChieu).format('HH:mm')}
                                  </button>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    )
                  })
                )
              }
            })
          }
        </div>
      </div>
    </div >
  )
}
