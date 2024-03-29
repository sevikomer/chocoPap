import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ModalButton from './ModalButton';

function Header({ productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct }) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className=' bg-orange text-white'>
      <div className='flex justify-between items-center'>
        <div className='m-1 p-3'>
          <Link to="/" className=''><img src={'/images/logo.png'} alt="logo" className='w-20' /></Link>
        </div>
        <button onClick={() => setIsNavOpen((prev) => !prev)} >
          <img src={'/images/hamburger.svg'} alt='menu' className='lg:hidden pb-1 ml-1 w-10' />
        </button>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-xl m-1 p-3">
          <li className='hover:text-yellow'>
            <Link to="/" className=''>Accueil</Link>
          </li>
          <li className='hover:text-yellow'>
            <Link to="/shop">Boutique</Link>
          </li>
          <li className='hover:text-yellow'>
            <ModalButton productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />
          </li>
        </ul>
      </div>
      <nav className='flex gap-8 text-xl lg:hidden'>
        <section className='MOBILE-MENU block lg:hidden'>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <ul className="">
              <li className="my-8 hover:text-yellow">
                <Link to="/" className=''>Accueil</Link>
              </li>
              <li className="my-8 hover:text-yellow">
                <Link to="/shop">Boutique</Link>
              </li>
              <li className="my-8 hover:text-yellow">
                <ModalButton productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        
        width: 100%;
      }
    `}</style>

    </div >
  )
}

export default Header