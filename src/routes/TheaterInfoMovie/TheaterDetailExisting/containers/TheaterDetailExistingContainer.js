import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TheaterDetailExisting from '../components/TheaterDetailExisting'
import { infoDetailMovie } from '../redux/actions'
import { Loading } from 'routes/Components/Loading/components/Loading'

export default function TheaterDetailExistingContainer() {
  const loading = useRef()

  const params = useParams()

  const dispatch = useDispatch()

  const movieDetail = useSelector(state => state.movieDetailReducer.detailState)

  useEffect(() => {
    dispatch(infoDetailMovie((`${params.maPhim}`), loading))
    loading.current.show()
  }, [dispatch, params.maPhim])

  return (
    <div>
      <TheaterDetailExisting
        movieDetail={movieDetail}
      />
      <Loading ref={loading} />
    </div>
  )
}
