import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ModalButton from './ModalButton';

function Header({ productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct }) {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className='flex justify-between items-center bg-orange text-white'>
      <div className='m-1 p-3'>
        <Link to="/" className=''><img src={'/images/logo.png'} alt="logo" className='w-20' /></Link>
      </div>
      <div className=''>
        <nav className='m-1 p-4 flex gap-8 text-xl'>
          <section className='MOBILE-MENU block lg:hidden'>
            <button onClick={() => setIsNavOpen((prev) => !prev)} >
              <img src={'/images/hamburger.svg'} alt='menu' className='lg:hidden pb-1 ml-1 w-10' />
            </button>
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <ul className="">
                <li className="my-8 hover:text-yellow">
                  <Link to="/" className=''>Accueil</Link>
                </li>
                <li className="my-8 hover:text-yellow">
                  <Link to="/shop">Boutique</Link>
                </li>
                <li className="my-8 hover:bg-yellow">
                  <ModalButton productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />
                </li>
              </ul>
            </div>
          </section>
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
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
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display : block;
        width: 100%;
      }
    `}</style>
      </div>
    </div >
  )
}

export default Header