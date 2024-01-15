import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      <h1 className='absolute z-10 top-1/3 right-1/3 text-white text-8xl font-bold'>CHOCO PAP</h1>
      <Carousel>
        <img src={'/images/accueil1.jpg'} alt='accueil1' />
        <img src={'/images/accueil2.jpg'} alt='accueil2' />
        <img src={'/images/accueil3.jpg'} alt='accueil3' />
      </Carousel>
      <Link to="/shop" className='bg-orange hover:bg-yellow text-white shadow-xl shadow-black p-2 text-4xl absolute z-10 bottom-1/3 rounded'>VOIR LA BOUTIQUE</Link>
    </>
  )
}

export default Home