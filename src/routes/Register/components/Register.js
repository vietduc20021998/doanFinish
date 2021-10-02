import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { register } from '../redux/actions'
import { useHistory, Link } from 'react-router-dom'
import '../assets/Register.scss'

export default function Register() {
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div className="register">
      <h1 className="text-center">Đăng Ký</h1>
      <div className="register__form">
        <Formik
          initialValues={{
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: ''
          }}
          validationSchema={
            Yup.object({
              taiKhoan: Yup.string()
                .min(2, "Tối thiểu 2 ký tự")
                .max(20, "Tối đa 20 ký tự")
                .required("Đây là phần bắt buộc!"),
              soDt: Yup.string()
                .max(10, "Tối đa 10 ký tự")
                .required("Đây là phần bắt buộc!")
                .matches(/^[0-9]*$/, "Chỉ được nhập số"),
              email: Yup.string()
                .email("Định dạng email không hợp lệ")
                .required("Đây là phần bắt buộc!"),
              matKhau: Yup.string()
                .required("Đây là phần bắt buộc!"),
              hoTen: Yup.string()
                .min(2, "Tối thiểu 2 ký tự")
                .max(20, "Tối đa 20 ký tự")
                .required("Đây là phần bắt buộc!")
            })
          }

          onSubmit={(value, { setSubmitting }) => {
            dispatch(register(value, history, setSubmitting))
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
                  className={`register__form-input form-control ${errors.taiKhoan && touched.taiKhoan && 'is-invalid'}`}
                  placeholder='Tài Khoản'
                />
                {errors.taiKhoan && touched.taiKhoan && <small id="helpId" className="form-text text-muted">{errors.taiKhoan}</small>}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="matKhau"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.matKhau}
                  className={`register__form-input form-control ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                  placeholder='Mật Khẩu'
                />
                {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted">{errors.matKhau}</small>}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`register__form-input form-control ${errors.email && touched.email && 'is-invalid'}`}
                  placeholder='Mail'
                />
                {errors.email && touched.email && <small id="helpId" className="form-text text-muted">{errors.email}</small>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="soDt"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.soDt}
                  className={`register__form-input form-control ${errors.soDt && touched.soDt && 'is-invalid'}`}
                  placeholder='Số điện thoại'
                />
                {errors.soDt && touched.soDt && <small id="helpId" className="form-text text-muted">{errors.soDt}</small>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="hoTen"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hoTen}
                  className={`register__form-input form-control ${errors.hoTen && touched.hoTen && 'is-invalid'}`}
                  placeholder='Họ và Tên'
                />
                {errors.hoTen && touched.hoTen && <small id="helpId" className="form-text text-muted">{errors.hoTen}</small>}
              </div>

              <button className='register__form-button' type="submit" disabled={isSubmitting}>
                Đăng ký
              </button>
            </form>
          )}
        </Formik>
        <div className="d-flex align-center">
          <p className="register__form-p"><Link to="/Login">Đăng Nhập</Link> Nếu bạn đã có tài khoản.</p>
        </div>
      </div>
    </div>
  )
}
