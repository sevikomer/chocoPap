import React from 'react'

function Footer() {
  return (
    <div className='lg:flex sm:block pb-1 bg-orange text-white'>
      <ul className='lg:flex sm:block justify-start gap-10 p-1'>
        <li className='basis-1/3 text-left'>
          <h3 className='text-yellow text-xl pt-4 pb-4'>Choco Pap</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minima odio at veritatis asperiores hic earum ex pariatur unde placeat.</p>
        </li>
        <li className='basis-1/3 text-left'>
          <h3 className='text-yellow text-xl pt-4 pb-4'>Contact</h3>
          <p><span className='text-yellow'>Adresse :</span> 51 rue du chocolat 75000 Paris</p>
          <p><span className='text-yellow'>Téléphone :</span> 01 23 45 67 89</p>
          <p><span className='text-yellow'>Horaires :</span> 9h00-17h00 du Lundi au vendredi</p>
        </li>
      </ul>
      <div className='flex items-center gap-8 m-1 p-4'>
        <img src={'/images/facebook.svg'} alt='facebookLogo' className='w-10' />
        <img src={'/images/instagram.svg'} alt='instagramLogo' className='w-10' />
        <img src={'/images/twitter.svg'} alt='twitterLogo' className='w-10' />
      </div>
    </div>
  )
}

export default Footer