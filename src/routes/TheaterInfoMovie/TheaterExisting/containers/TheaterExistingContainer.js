import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TheaterExisting from '../components/TheaterExisting'
import { infoTheaterExisting } from '../redux/actions'

export default function TheaterExistingContainer() {
  const dispatch = useDispatch()

  const movieExisting = useSelector(state => state.movieExistingReducer.existing)

  useEffect(() => {
    dispatch(infoTheaterExisting())
  }, [dispatch])

  const getTotalCount = useCallback(
    (soTrang, soPhanTuTrenTrang) => {
      dispatch(infoTheaterExisting(soTrang, soPhanTuTrenTrang))
    }, [dispatch]
  )

  return (
    <div>
      <TheaterExisting 
        movieExisting={movieExisting}
        getTotalCount={getTotalCount}
      />
    </div>
  )
}
