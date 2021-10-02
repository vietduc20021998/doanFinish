import React from 'react'
import '../assets/Login.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import { useHistory, Link } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div className="login">
      <h1 className="text-center">Đăng Nhập</h1>
      <div className="login__form">
        <Formik
          initialValues={{ taiKhoan: '', matKhau: '' }}
          validationSchema={
            Yup.object({
              taiKhoan: Yup.string()
                .min(2, "Tối thiểu 2 ký tự")
                .max(20, "Tối đa 20 ký tự")
                .required("Đây là phần bắt buộc!"),
              matKhau: Yup.string()
                .required("Đây là phần bắt buộc!"),
            })
          }
          onSubmit={(value, { setSubmitting }) => {
            dispatch(login(value, history, setSubmitting))
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="taiKhoan"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.taiKhoan}
                  className={`login__form-input form-control ${errors.taiKhoan && touched.taiKhoan && 'is-invalid'}`}
                  placeholder='Tài Khoản'
                />
                {errors.taiKhoan && touched.taiKhoan && <small id="helpId" class="form-text text-muted">{errors.taiKhoan}</small>}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="matKhau"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.matKhau}
                  className={`login__form-input form-control ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                  placeholder='Mật Khẩu'
                />
                {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted">{errors.matKhau}</small>}
              </div>

              <button className='login__form-button' type="submit" disabled={isSubmitting}>
                Đăng Nhập
              </button>
            </form>
          )}
        </Formik>
        <div className="d-flex">
          <p className="login__form-p"><Link to="/Register">Đăng Ký</Link> Nếu bạn chưa có tài khoản.</p>
        </div>
      </div>
    </div>
  )
}
