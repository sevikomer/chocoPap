import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='relative'>
      <h1 className='absolute z-10 top-1/3 right-1/3 text-white lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-bold'>CHOCO PAP</h1>
      <Carousel>
        <img src={'/images/accueil1.jpg'} alt='accueil1' />
        <img src={'/images/accueil2.jpg'} alt='accueil2' />
        <img src={'/images/accueil3.jpg'} alt='accueil3' />
      </Carousel>
      <Link to="/shop" className='bg-orange hover:bg-yellow text-white shadow-xl shadow-black p-2 lg:text-4xl md:text-3xl sm:text-2xl text-xl absolute z-10 bottom-1/3 left-1/3 rounded'>VOIR LA BOUTIQUE</Link>
    </div>
  )
}

export default Home