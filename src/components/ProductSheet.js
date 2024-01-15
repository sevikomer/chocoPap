import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'

function ProductSheet({ productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct }) {

  const params = useParams()

  const getProductItem = () => {
    return productItems.find((p) => p.id === params.productId) ?? {};
  };

  const productItem = useMemo(getProductItem, [params.productId, productItems]);

  let quantity = 1

  return (
    <div>
      <div key={productItem.id} className='p-2'>
        <div className='lg:flex'>
          <div>
            <img src={`/${productItem.image.replace("./", "")}`} alt='' className='' />
          </div>
          <div className='p-4 mr-10 ml-10'>
            <div>
              <h3 className='font-bold text-4xl pb-4'>{productItem.title}</h3>
            </div>
            <div className='text-blue font-semibold text-xl pb-4'>{productItem.price} €</div>
            <div className='pb-4'>{productItem.description}</div>
            <div className='flex'>
              <div className='flex'>
                <div>{quantity}</div>
                <div>
                  <div>
                    <button onClick={() => "handleIncrementQuantity()"}>+</button>
                  </div>
                  <div>
                    <button onClick={() => "handleDecrementQuantity()"}>-</button>
                  </div>
                </div>
              </div>
              <div>
                <button className='bg-yellow hover:bg-orange active:bg-orange focus:outline-none focus:ring focus:ring-yellow m-2 p-2 px-8 text-white rounded uppercase' onClick={() => handleAddProduct(productItem)}>Ajouter au panier</button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5 mb-5'>
          <div>
            <h3 className='text-orange font-semibold text-xl pt-4 pb-1'>Ingrédients</h3>
          </div>
          <div className='pt-4 pb-4'>{productItem.ingredients}</div>
        </div>
      </div>
    </div>
  )
}

export default ProductSheet