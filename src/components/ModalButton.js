import React, {useState} from 'react'
import {createPortal} from "react-dom" 
import ModalContent from './ModalContent'



function ModalButton({cartItems, setCartItems, productItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
    <button 
    onClick={() => setShowModal (true)}>
        <img src='/images/shopping.svg' alt='shopping'/>
    </button>
    {showModal && 
    createPortal(
    <ModalContent closeModal = {() => setShowModal (false)} productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>, 
    document.body
    )}
    </>
  )
}

export default ModalButton