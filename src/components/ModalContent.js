import React from 'react'

function ModalContent({closeModal, productItems, cartItems, setCartItems}) {
  return (
    <>
        <div onClick={closeModal}
            className='fixed inset-0 bg-slate-800/75'>
        </div>
        <div className='fixed z-10 top-1/2 right-1 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-900 p-10 rounded'>
            <button 
            className='absolute top-1 left-1 w-7 h-7 bg-red-600 text-slate-100 rounded'
            onClick={closeModal}
            >
                X
            </button>
            <h1>PANIER</h1>
            <ul>
              
            </ul>
        </div>
    </>
  )
}

export default ModalContent