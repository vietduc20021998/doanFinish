import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/Slick.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function Slick({ movieSlick }) {
  const history = useHistory()

  const ref = useRef({});

  const settings = {
    className: 'section-outstanding__slider',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    rows: 1,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          rows: 1
        }
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1
        }
      }
    ]
  };

  return (
    <div className="container mt-3">
      <h1 className="slick-h1">PHIM HOT</h1>
      <hr className="border-hr" />
      <div className="d-flex slick-bg">
        <Slider ref={ref} {...settings} className="container">
          {
            movieSlick.map((item, index) => (
              <div key={index} className="slick__format__film">
                <div className="slick__pic__format mr-3">
                  <img src={item.hinhAnh} alt={item.tenPhim} className="slick__format__img" />
                </div>
                <div>
                  <p className="slick__format__tenPhim" title={item.tenPhim}>{item.tenPhim}</p>
                  <button
                    className="slick__format__button"
                    onClick={() => { history.push(`/${item.maPhim}/chiTietPhim`) }}>Chi Tiết</button>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}