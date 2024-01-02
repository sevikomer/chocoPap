import React from 'react'
import { Link } from 'react-router-dom';
import ModalButton from './ModalButton';

function Nav() {
  return (
    <div className='flex justify-between bg-orange'>
        <div className='m-1 p-3'>
            <Link to="/" className=''><img src={'/images/logo.png'} alt="logo" className='w-20'/></Link>
        </div>
        <nav className='m-1 p-4 flex items-center gap-8 text-xl'>
           <Link to="/" className=''>Accueil</Link>
           <Link to="/shop">Boutique</Link>
           <ModalButton />
        </nav>
    </div>
  )
}

export default Nav