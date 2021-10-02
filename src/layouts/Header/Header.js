import React from 'react'
import './assets/Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo1.png'
import { useSelector, useDispatch } from 'react-redux'
import { CLEAR_STORE } from '../../routes/Login/redux/types'

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import cinema from '../../assets/img/cinema.png'
import nowShowing from '../../assets/img/nowShowing.png'
// import special from '../../assets/img/special.png'
import contact from '../../assets/img/contact.png'
// import NEWS from '../../assets/img/NEWS.png'

import { Link as LinkScroll } from 'react-scroll'

export default function Header() {
  const user = useSelector(state => state.user.credential)

  // const toAccessToken = localStorage.getItem('access_token')

  const dispatch = useDispatch()

  const logout = () => {
    localStorage.clear()
    dispatch({ type: CLEAR_STORE })
  }

  return (
    <div className="header__format-all">
      <div className="header container d-flex justify-content-end">
        <div className="text-right">
          {
            (user.accessToken)
              ?
              (
                <div className='d-flex'>
                  <PermIdentityIcon />
                  <h6>Xin chào, <Link className="top__header" to="/AccountContainer">{user.hoTen}</Link></h6>
                  <button className="header__format-button" onClick={logout}>ĐĂNG XUẤT</button>
                </div>
              )
              :
              (
                <div>
                  <VpnKeyIcon className="mr-2" />
                  <Link className="mr-2 top__header" to="/Login">ĐĂNG NHẬP</Link>
                  /
                  <Link className="ml-2 top__header" to="/Register">ĐĂNG KÝ</Link>
                </div>
              )

          }
        </div>
      </div>

      <div className="bg__color">
        <nav className="container navbar navbar-expand-lg navbar-light w-75 mx-auto d-flex justify-content-between">
          <div>
            <Link className="bg__logo navbar-brand" to="/">
              <img src={logo} alt='logo' />
            </Link>
          </div>
          <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="total__format navbar-nav mr-auto bg__nav__font">
                <li className="nav-item active">
                  <div className="total__format__div">
                    <div className="pic__1">
                      <LinkScroll activeClass="active" to="cumRap" spy={true} smooth={true} duration={500} >
                        <img className="pic__format" src={cinema} alt='cinema' />
                      </LinkScroll>
                    </div>
                    <p className="pic__text">CỤM RẠP</p>
                  </div>
                </li>

                <li className="nav-item active">
                  <div className="total__format__div">
                    <div className="pic__1">
                      <LinkScroll activeClass="active" to="phimChieuRap" spy={true} smooth={true} duration={500} >
                        <img className="pic__format" src={nowShowing} alt='nowShowing' />
                      </LinkScroll>
                    </div>
                    <p className="pic__text">PHIM</p>
                  </div>
                </li>

                <li className="nav-item active">
                  <div className="total__format__div">
                    <div className="pic__1">
                      <LinkScroll activeClass="active" to="lienHe" spy={true} smooth={true} duration={500} >
                        <img className="pic__format" src={contact} alt='contact' />
                      </LinkScroll>
                    </div>
                    <p className="pic__text">LIÊN HỆ</p>
                  </div>
                </li>

                {/* <li className="nav-item active">
                  <div className="total__format__div">
                    <div className="pic__1" onClick={() => history.push('user/Register')} >
                      <img className="pic__format" src={REGISTER} alt='REGISTER' />
                    </div>
                    <p className="pic__text">ĐĂNG KÝ</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}