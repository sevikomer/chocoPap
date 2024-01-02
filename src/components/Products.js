import React from 'react'
import datas from '../products.json'
import Filter from './Filter'


function Products(props) {
  const listProducts = datas.map( productlist => { 
      return(
        <div key={productlist.id} className='p-20 text-center'>
            <img src={productlist.image} alt='' className='w-60 h-40'/>
            <p>{productlist.title}</p>
            <p>{productlist.price} €</p>
            <p>Note : {productlist.note}</p> 
            <button className='bg-yellow m-2 p-2 text-white rounded'>Ajouter au panier</button>
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
      <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>{listProducts}</ul>
      </div>
      </>
    )
}

export default Products