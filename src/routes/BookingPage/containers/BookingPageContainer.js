import React, { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router'
import BookingPage from '../components/BookingPage'
import { infoBookingPage, booking } from '../redux/actions'
import Swal from 'sweetalert2'
import { Loading } from 'routes/Components/Loading/components/Loading'

export default function BookingPageContainer() {
  const loading = useRef()

  const history = useHistory()

  const params = useParams()

  const dispatch = useDispatch()

  const movieBookingPage = useSelector(state => state.bookingPageReducer.bookingPage)
  const movieSeat = useSelector(state => state.bookingPageReducer.bookingSeat)
  const taiKhoanNguoiDung = useSelector(state => state.user.credential.taiKhoan)

  useEffect(() => {
    dispatch(infoBookingPage((`${params.maLichChieu}`), loading))
    loading.current.show()
  }, [dispatch, params.maLichChieu])

  const [total, reservedSeat, danhSachVe] = movieSeat.reduce((choosingInfo, item) => {
    if(item.isChoosing) {
      choosingInfo[0] += item.giaVe
      choosingInfo[1].push(<span className="m-1">{item.tenGhe}</span>)
      choosingInfo[2].push({
          maGhe: item.maGhe,
          giaVe: item.giaVe
      })
    }
    return choosingInfo
  }, [ 0, [], [] ])

  const bookTicket = useCallback(
    () => {
      dispatch(booking({
        maLichChieu: params.maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung
      }))
      Swal.fire({
        icon: 'success',
        title: 'Yeah',
        text: 'Đặt vé thành công!'
      })
      history.push('/AccountContainer')
    },
    [danhSachVe, dispatch, history, params.maLichChieu, taiKhoanNguoiDung],
  )

  return (
    <div>
      <BookingPage
        movieBookingPage={movieBookingPage}
        movieSeat={movieSeat}
        bookTicket={bookTicket}
        total={total}
        reservedSeat={reservedSeat}
      />
      <Loading ref={loading} />
    </div>
  )
}
