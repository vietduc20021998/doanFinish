import React from 'react'
import '../assets/InforAccount.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { putInforAccount } from '../redux/actions'

export default function InforAccount({ inforCustomer, inforUser }) {
  const dispatch = useDispatch()

  return (
    <div className="in4Account">
      <Formik
        initialValues={{
          taiKhoan: inforCustomer.taiKhoan,
          hoTen: inforCustomer.hoTen,
          email: inforCustomer.email,
          soDt: inforCustomer.soDT,
          matKhau: '',
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
        onSubmit={(value) => {
          if (value.matKhau === inforUser.matKhau) {
            dispatch(putInforAccount(value))
            Swal.fire({
              icon: 'success',
              title: 'Yeah',
              text: 'Cập nhật thành công!'
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Sai mật khẩu rồi'
            })
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="in4Account__form form-group">
              <input
                type="text"
                name="taiKhoan"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.taiKhoan}
                className={`form-control ${errors.taiKhoan && touched.taiKhoan && 'is-invalid'}`}
                placeholder='Tài Khoản'
                disabled
              />
              {errors.taiKhoan && touched.taiKhoan && <small id="helpId" className="form-text text-muted">{errors.taiKhoan}</small>}
            </div>

            <div className="in4Account__form form-group">
              <input
                type="text"
                name="hoTen"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hoTen}
                className={`form-control ${errors.hoTen && touched.hoTen && 'is-invalid'}`}
                placeholder='Họ và Tên'
              />
              {errors.hoTen && touched.hoTen && <small id="helpId" className="form-text text-muted">{errors.hoTen}</small>}
            </div>

            <div className="in4Account__form form-group">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                placeholder='Mail'
              />
              {errors.email && touched.email && <small id="helpId" className="form-text text-muted">{errors.email}</small>}
            </div>

            <div className="in4Account__form form-group">
              <input
                type="text"
                name="soDt"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.soDt}
                className={`form-control ${errors.soDt && touched.soDt && 'is-invalid'}`}
                placeholder='Số điện thoại'
              />
              {errors.soDt && touched.soDt && <small id="helpId" className="form-text text-muted">{errors.soDt}</small>}
            </div>

            <div className="in4Account__form form-group">
              <input
                type="password"
                name="matKhau"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
                className={`form-control ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                placeholder='Nhập mật khẩu để cập nhật'
              />
              {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted">{errors.matKhau}</small>}
            </div>

            <button className='in4Account__format-button' type="submit">
              Cập nhật
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
