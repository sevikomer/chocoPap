import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css";


function Slider() {
  return (
    <Carousel>
        <div>
            <img src={'/images/accueil1.jpg'} alt='accueil1'/>
        </div>
        <div>
            <img src={'/images/accueil2.jpg'} alt='accueil2'/>
        </div>
        <div>
            <img src={'/images/accueil3.jpg'} alt='accueil3'/>
        </div>
    </Carousel>
  )
}

export default Slider