import React, { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TheaterList from '../components/TheaterList'
import { infoLogoCinema, infoListCinema, infoMovieCinema } from '../redux/actions'
import { Loading } from 'routes/Components/Loading/components/Loading'

export default function TheaterListContainer() {
  const loading = useRef()

  const dispatch = useDispatch()

  const logoCinema = useSelector(state => state.logoReducer.logo)

  const listCinema = useSelector(state => state.listReducer.list)

  const movieCinema = useSelector(state => state.movieReducer.movie)

  useEffect(() => {
    dispatch(infoLogoCinema())
  }, [dispatch])

  const getListCinema = useCallback(
    maHeThongRap => {
      dispatch(infoListCinema(maHeThongRap))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(infoListCinema())
  }, [dispatch])

  const getMovieCinema = useCallback(
    maHeThongRap => {
      dispatch(infoMovieCinema(maHeThongRap))
    },
    [dispatch],
  )

  // const getCinema = useCallback(
  //   maHeThongRap => {
  //     getListCinema(maHeThongRap)
  //     getMovieCinema(maHeThongRap)
  //   },
  //   [getListCinema, getMovieCinema]
  // )

  return (
    <div>
      <TheaterList
        logoCinema={logoCinema}
        listCinema={listCinema}
        movieCinema={movieCinema}
        getListCinema={getListCinema}
        getMovieCinema={getMovieCinema}
        // getCinema={getCinema}
      />
      <Loading ref={loading} />
    </div>
  )
}