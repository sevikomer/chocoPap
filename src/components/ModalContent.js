import React from 'react'

function ModalContent({closeModal, productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) {
  const totalPrice = cartItems.reduce ((price, cartItem) => price + cartItem.quantity * cartItem.price, 0);
  
  return (
    <>
        <button onClick={closeModal} tabIndex="0" className='fixed inset-0 bg-slate-800/75'>
        </button>
        <div className='fixed z-10 top-1/2 right-1 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-900 p-10 rounded'>
            <button 
            className='absolute top-1 left-1 w-7 h-7 bg-red-600 text-slate-100 rounded'
            onClick={closeModal}
            >
                X
            </button>

            <div>PANIER</div>
            <div>
              {cartItems.length === 0 && (<div>Votre panier est vide.</div>)}
            </div>

            <div>
              {cartItems?.map(cartItem => (
                <div key={cartItem.id}>
                  <div>
                    <button>X</button>
                  </div>
                  <div>
                    <img src={cartItem.image} alt='' className='w-60 h-40'/>
                  </div>
                  <div>
                    <h3>{cartItem.title}</h3>
                  </div>
                    <div>{cartItem.price} €</div>
                    <div>{cartItem.quantity}</div>      
                  <div>
                    <button onClick={() => handleAddProduct(cartItem)}>+</button>
                  </div>
                  <div>
                    <button onClick={() => handleRemoveProduct(cartItem)}>-</button>
                  </div>
                </div>
              ))}
              </div>
              <div>Total : {totalPrice} €</div>
            <div>
              <button onClick={() => handleCartClearance()}>Réinitialiser le panier</button>
            </div>
            <div>
              <button>Valider le panier</button>
            </div>
            </div>
          </>
  )
}

export default ModalContent