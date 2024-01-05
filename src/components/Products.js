import React from 'react'
import productItems from '../products.json'
import Filter from './Filter'


function Products(props) {
  const ProductItems = productItems.map( productItem => { 
      return(
        <div key={productItem.id} className='p-20 text-center'>
            <div>
              <img src={productItem.image} alt='' className='w-60 h-40'/>
            </div>
            <div>
              <h3>{productItem.title}</h3>
            </div>
            <div>{productItem.price} €</div>
            <div>Note : {productItem.note}</div> 
            <div>
              <button className='bg-yellow m-2 p-2 text-white rounded'>Ajouter au panier</button>
            </div>
        </div> 
        )
    }
    )
    return (
      <>
      <h1 className='text-6xl text-center'>BOUTIQUE</h1>
      <div className='lg:flex sm:block'>
        <div>
        <Filter />
        </div>
      <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>{ProductItems}</ul>
      </div>
      </>
    )
}

export default Products