import React from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/ContactUS.scss'

import BirdsofPrey from '../../../assets/img/BirdsofPrey.jpg'
import avenger from '../../../assets/img/avenger.jpg'
import dragon from '../../../assets/img/how-to-train-your-dragon.jpg'
import JusticeLuege from '../../../assets/img/JusticeLuege.jpg'


export default function ContactUS() {
  return (
    <div>
      {/* carousel */}

      <div className="bg__carousel">
        <div id="carouselId" className="container carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselId" data-slide-to={0} className="active" />
            <li data-target="#carouselId" data-slide-to={1} />
            <li data-target="#carouselId" data-slide-to={2} />
          </ol>
          <div className="bg__carousel-inner carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={BirdsofPrey} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={avenger} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src={dragon} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src={JusticeLuege} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
