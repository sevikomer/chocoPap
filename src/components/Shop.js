import React from 'react'
import Products from './Products'

function Shop({productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct}) {
 
    return (
      <>
      <h1 className='text-6xl text-center'>BOUTIQUE</h1>
      <div className='lg:flex sm:block'>
          <div>
            < Products productItems={productItems} handleAddProduct={handleAddProduct} />
          </div>
      </div>
      </>
    )
}

export default Shop