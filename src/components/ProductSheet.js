import React from 'react'

function ProductSheet({productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct}) {
  return (
            <div>
              {productItems?.map(productItem => (
                <div key={productItem.id} className='flex p-2'>
                  <div>
                    <img src={productItem.image} alt='' className='w-30 h-20'/>
                  </div>
                  <div>
                    <div>
                      <h3>{productItem.title}</h3>
                    </div>
                    <div>{productItem.price} €</div>
                  </div>
                  <div className='flex p-2'>
                    <div>
                      <button onClick={() => handleAddProduct(productItem)}>+</button>
                    </div>
                    <div>{productItem.quantity}</div>      
                    <div>
                      <button onClick={() => handleRemoveProduct(productItem)}>-</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    )
}

export default ProductSheet