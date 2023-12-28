import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';
import ModalButton from './ModalButton';

function Nav() {
  return (
    <div className='flex'>
        <div className='m-1'>
            <img src={'/images/logo.png'} alt="logo" className='w-20'/>
        </div>
        <nav className='m-1'>
           <Link to="/">Accueil</Link>
           <Link to="/shop">Boutique</Link>
           <ModalButton />
        </nav>
    </div>
  )
}

export default Nav