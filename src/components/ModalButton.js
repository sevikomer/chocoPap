import React, { useState } from 'react'
import { createPortal } from "react-dom"
import ModalContent from './ModalContent'



function ModalButton({ cartItems, setCartItems, productItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <button
        className='flex items-center'
        onClick={() => setShowModal(true)}>
        <span className='pr-2 lg:hidden'>Panier </span>
        <div className='text-blue pr-1'>{cartItems.length}</div>
        <img src='/images/shopping.svg' alt='shopping' className='w-5' />
      </button>
      {showModal &&
        createPortal(
          <ModalContent closeModal={() => setShowModal(false)} productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />,
          document.body
        )}
    </>
  )
}

export default ModalButton