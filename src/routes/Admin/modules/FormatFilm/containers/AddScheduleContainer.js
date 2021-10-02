import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddSchedule from '../components/AddSchedule'
import { inforListFilm, inforCreateSchedule, postSchedule } from '../../../redux/actions'

export default function AddScheduleContainer() {
  const params = useParams()

  const dispatch = useDispatch()

  const listTheater = useSelector(state => state.logoReducer.logo)

  const nameListTheater = useSelector(state => state.inforCreateScheduleReducer.listCumRap)

  const nameTheater = useCallback(
    maHeThongRap => {
      dispatch(inforCreateSchedule(maHeThongRap))
    },
    [dispatch]
  )

  const sendSchedule = useCallback(
    newSchedule => {
      dispatch(postSchedule(newSchedule))
    }, [dispatch]
  )
  
  useEffect(() => {
    dispatch(inforListFilm(`${params.maPhim}`))
  }, [dispatch, params.maPhim])

  return (
    <div>
      <AddSchedule 
        maPhim={params.maPhim}
        listTheater={listTheater}
        nameTheater={nameTheater}
        nameListTheater={nameListTheater}
        sendSchedule={sendSchedule}
      />
    </div>
  )
}
