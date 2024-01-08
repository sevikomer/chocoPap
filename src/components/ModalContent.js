import React from 'react'

function ModalContent({closeModal, productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct}) {
  const totalPrice = cartItems.reduce ((price, cartItem) => price + cartItem.quantity * cartItem.price, 0);
  
  
  return (
    <>
        <button onClick={closeModal} tabIndex="0" className='fixed inset-0 bg-slate-800/75'>
        </button>
        <div className='fixed top-1/2 right-1 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-900 p-10 rounded'>
            <button 
            className='absolute top-1 left-1 w-7 h-7 bg-orange text-white rounded'
            onClick={closeModal}
            >
                X
            </button>

            <div className='text-xl text-center font-bold mb-5 p-5 bg-yellow'>PANIER</div>
            <div>
              {cartItems.length === 0 && (<div>Votre panier est vide.</div>)}
            </div>

            <div className='overflow-y-scroll p-2'>
              {cartItems?.map(cartItem => (
                <div key={cartItem.id} className='flex p-2'>
                  <div>
                    <button className='w-5 h-5 bg-orange text-white rounded' onClick={() => deleteProduct(cartItem)}>X</button>
                  </div>
                  <div>
                    <img src={cartItem.image} alt='' className='w-30 h-20'/>
                  </div>
                  <div>
                    <div>
                      <h3>{cartItem.title}</h3>
                    </div>
                    <div>{cartItem.price} €</div>
                  </div>
                  <div className='flex p-2'>
                    <div>
                      <button onClick={() => handleAddProduct(cartItem)}>+</button>
                    </div>
                    <div>{cartItem.quantity}</div>      
                    <div>
                      <button onClick={() => handleRemoveProduct(cartItem)}>-</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='bg-yellow p-5'>
              <div className='text-center p-2'>Total : {totalPrice} €</div>
              <div>
                <button onClick={() => handleCartClearance()} className='bg-white rounded m-2 p-2 center'>Réinitialiser le panier</button>
              </div>
              <div>
                <button className='bg-white rounded m-2 p-2 center'>Valider le panier</button>
              </div>
            </div>
          </div>
          </>
  )
}

export default ModalContent