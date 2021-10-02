import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slick from '../components/Slick'
import { infoSlick } from '../redux/actions'

export default function SlickContainer() {
  const dispatch = useDispatch()

  const movieSlick = useSelector(state => state.movieSlick.existing)

  useEffect(() => {
    dispatch(infoSlick())
  }, [dispatch])

  return (
    <div>
      <Slick 
        movieSlick={movieSlick}
      />
    </div>
  )
}
