import React from 'react'
import './Routers.scss'
import ContactUS from '../../../layouts/ContactUS/components/ContactUS'
import TheaterList from '../../theaterList/containers/TheaterListContainer'
import TheaterExistingContainer from '../../TheaterInfoMovie/TheaterExisting/containers/TheaterExistingContainer'
import SlickContainer from '../../TheaterInfoMovie/TheaterExisting/containers/SlickContainer'

export default function MainPage() {
  return (
    <div className="routers__format">
      <ContactUS />
      <SlickContainer />
      <TheaterList />
      <TheaterExistingContainer />
    </div>
  )
}
