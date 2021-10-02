import React from 'react'
import './Footer.scss'
import allLogoCinema from '../../assets/img/allLogo.png'
import fbLogo from '../../assets/img/fbLogo.png'
import Instagram from '../../assets/img/Instagram.png'
import youtube from '../../assets/img/youtube.png'
import zalo from '../../assets/img/zalo.png'

export default function Footer() {
  return (
    <div id="lienHe">
      <div className="format__modal-allLogo">
        <img src={allLogoCinema} alt="allLogoCinema" />
      </div>

      <div className="footer__container mt-3">
        <div className="container">
          <div className="row footer__row">
            <div className="col-lg-3">
              <h6 className="contact__text">VDTHEATER</h6>
              <div className="contact__link">
                <a href="https://www.facebook.com/Ducky-Graphic-105486617998922">Giới Thiệu</a><br />
                <a href="https://www.facebook.com/Ducky-Graphic-105486617998922">Tiện Ích Online</a><br />
                <a href="https://www.facebook.com/Ducky-Graphic-105486617998922">Thẻ Quà Tặng</a><br />
                <a href="https://www.facebook.com/Ducky-Graphic-105486617998922">Tuyển Dụng</a><br />
                <a href="https://www.facebook.com/Ducky-Graphic-105486617998922">Liên Hệ Quảng Cáo CGV</a>
              </div>
            </div>
            <div className="col-lg-3">
              <h6 className="contact__text">ĐỐI TÁC</h6>
              <div className="contact__all-logo d-flex">
                <div className="contact__logo">
                  <a target="_blank" rel="noreferrer" href="https://www.bhdstar.vn/"><img src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="Logo" /></a>
                </div>
                <div className="contact__logo">
                  <a target="_blank" rel="noreferrer" href="https://cgv.vn/"><img src="https://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" alt="Logo" /></a>
                </div>
                <div className="contact__logo">
                  <a target="_blank" rel="noreferrer" href="https://cinestar.com.vn/"><img src="https://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png" alt="Logo" /></a>
                </div>
                <div className="contact__logo">
                  <a target="_blank" rel="noreferrer" href="https://www.galaxycine.vn/"><img src="https://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png" alt="Logo" /></a>
                </div>
                <div className="contact__logo">
                  <a target="_blank" rel="noreferrer" href="https://www.lottecinemavn.com/LCHS/index.aspx#"><img src="https://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png" alt="Logo" /></a>
                </div>
                <div className="contact__logo">
                  <a target="_blank" rel="noreferrer" href="https://www.megagscinemas.vn/phim/#"><img src="https://movie0706.cybersoft.edu.vn/hinhanh/megags.png" alt="Logo" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h6 className="contact__text">CHĂM SÓC KHÁCH HÀNG</h6>
              <p>Hotline: 0337711116</p>
              <p>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</p>
              <p>Email hỗ trợ: vhtheater@gmail.com</p>
            </div>
            <div className="col-lg-3">
              <h6 className="contact__text">KẾT NỐI VỚI CHÚNG TÔI</h6>
              <div className="d-flex">
                <div className="contact__logoConnect">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Ducky-Graphic-105486617998922">
                    <img src={fbLogo} alt="fbLogo" />
                  </a>
                </div>
                <div className="contact__logoConnect">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Ducky-Graphic-105486617998922">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </div>
                <div className="contact__logoConnect">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Ducky-Graphic-105486617998922">
                    <img src={youtube} alt="youtube" />
                  </a>
                </div>
                <div className="contact__logoConnect">
                  <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Ducky-Graphic-105486617998922">
                    <img src={zalo} alt="zalo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
