import React from 'react'
import '../assets/InforAccount.scss'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { putInforAccount } from '../redux/actions'

export default function ChangePassword({inforCustomer, inforUser}) {
  const dispatch = useDispatch()

  return (
    <div className="changePw">
      <Formik
        initialValues={{
          taiKhoan: inforCustomer.taiKhoan,
          hoTen: inforCustomer.hoTen,
          email: inforCustomer.email,
          soDt: inforCustomer.soDT,
          matKhauCu: '',
          matKhau: '',
          matKhauMoi: '',
        }}
        validationSchema={
          Yup.object({
            matKhau: Yup.string()
              .required("Đây là phần bắt buộc!"),
            matKhauCu: Yup.string()
              .required("Đây là phần bắt buộc!"),
            matKhauMoi: Yup.string()
              .required("Đây là phần bắt buộc!"),
          })
        }
        onSubmit={(value) => {
          if (value.matKhauCu !== inforUser.matKhau) {
            Swal.fire({
              icon: 'error',
              title: 'Hmm...',
              text: 'Sai mật khẩu rồi'
            })
          } else if (value.matKhau !== value.matKhauMoi ) {
            Swal.fire({
              icon: 'error',
              title: 'Hmm...',
              text: 'Mật khẩu không hợp lệ'
            })
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Tuyệt vời!!!',
              text: 'Cập nhật mật khẩu thành công'
            })
            dispatch(putInforAccount(value))
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
            <div className="changePw__form form-group">
              <input
                type="password"
                name="matKhauCu"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhauCu}
                className={`form-control ${errors.matKhauCu && touched.matKhauCu && 'is-invalid'}`}
                placeholder='Mật khẩu cũ'
              />
              {errors.matKhauCu && touched.matKhauCu && <small id="helpId" className="form-text text-muted">{errors.matKhauCu}</small>}
            </div>

            <div className="changePw__form form-group">
              <input
                type="password"
                name="matKhau"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhau}
                className={`form-control ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                placeholder='Mật khẩu mới'
              />
              {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted">{errors.matKhau}</small>}
            </div>

            <div className="changePw__form form-group">
              <input
                type="password"
                name="matKhauMoi"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.matKhauMoi}
                className={`form-control ${errors.matKhauMoi && touched.matKhauMoi && 'is-invalid'}`}
                placeholder='Nhập lại mật khẩu mới'
              />
              {errors.matKhauMoi && touched.matKhauMoi && <small id="helpId" className="form-text text-muted">{errors.matKhauMoi}</small>}
            </div>

            <button className='changePw__format-button' type="submit">
              Cập nhật mật khẩu
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
