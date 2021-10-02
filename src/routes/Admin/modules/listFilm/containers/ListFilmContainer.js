import React, { useEffect, useCallback } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import ListFilm from '../components/ListFilm'
import { inforListFilm, inforSearchMovie } from '../../../redux/actions'
import axios from 'helpers/axios'

export default function ListFilmContainer() {
  const dispatch = useDispatch()

  const listFilm = useSelector(state => state.inforListFilmReducer.listFilm)

  const searchMovie = useCallback(tenPhim => {
    if(tenPhim === '') {
      dispatch(inforListFilm())
    } else {
      dispatch(inforSearchMovie(tenPhim))
    }
  },[dispatch])

  useEffect(() => {
    dispatch(inforListFilm())
  }, [dispatch])

  const onDeleteMovie = useCallback(maPhim => {
    axios({
      url: `api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: 'DELETE',
    })
    .then(res => {
      Swal.fire({
        icon: 'success',
        title: 'Yeah',
        text: 'Xoá phim thành công!'
      })
      window.location.reload()
    })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Rất tiếc',
          text: 'Phim đã có người đặt rồi!'
        })
      })
  },[])

  return (
    <div>
      <ListFilm
        listFilm={listFilm}
        onDeleteMovie={onDeleteMovie}
        searchMovie={searchMovie}
      />
    </div>
  )
}
