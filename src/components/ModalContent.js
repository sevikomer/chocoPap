import React from 'react'

function ModalContent({ closeModal, productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct }) {
  console.log('cartItems:', cartItems)
  const totalPrice = (cartItems.reduce((price, cartItem) => price + cartItem.quantity * cartItem.price, 0)).toFixed(2)

  return (
    <>
      <button onClick={closeModal} tabIndex="0" className='fixed inset-0 bg-slate-800/50'>
      </button>
      <div className='fixed top-96 right-1 -translate-y-1/2 bg-white text-slate-900 rounded'>
        <button
          className='absolute top-1 left-1 w-7 h-7 bg-orange text-white rounded'
          onClick={closeModal}
        >
          X
        </button>

        <div className='text-orange text-4xl text-center font-bold mb-5 p-5 bg-yellow'>PANIER</div>
        <div className='p-1 text-xl'>
          {cartItems.length === 0 && (<div>Votre panier est vide.</div>)}
        </div>

        <div className='overflow-y-auto max-h-64'>
          {cartItems?.map(cartItem => (
            <div key={cartItem.id} className='grid grid-cols-4 p-2 pb-8'>
              <div className='flex justify-end pr-5'>
                <button className='w-5 h-5 bg-orange hover:bg-yellow text-white rounded' onClick={() => deleteProduct(cartItem)}>X</button>
              </div>
              <div className='flex justify-center pr-5'>
                <img src={`/${cartItem.image}`} alt='' className='w-30 h-20' />
              </div>
              <div className='pl-5'>
                <div>
                  <h3 className='font-bold '>{cartItem.title}</h3>
                </div>
                <div className='text-blue'>{cartItem.price} €</div>
              </div>
              <div className='flex ml-8 p-2'>
                <div className='pt-3 px-1 border-solid border-2 border-yellow'>{cartItem.quantity}</div>
                <div className='flex bg-yellow'>
                  <button className='text-white hover:bg-orange' onClick={() => handleAddProduct(cartItem)}>+</button>
                  <button className='text-white hover:bg-orange' onClick={() => handleRemoveProduct(cartItem)}>-</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-yellow p-5'>
          <div className='text-center font-bold text-orange text-4xl p-2'>Total : {totalPrice} €</div>
          <div className='flex justify-center pt-5'>
            <button onClick={() => handleCartClearance()} className='bg-white hover:bg-orange rounded m-2 p-2 px-12 uppercase '>Réinitialiser le panier</button>
          </div>
          <div className='flex justify-center'>
            <button className='bg-white hover:bg-orange rounded m-2 p-2 px-16 center uppercase'>Valider le panier</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalContent