import React from 'react'
import ProductsList from '../products.json'


function Products() {
  return (
    ProductsList.map( productlist => { 
      return(
        <ul key={productlist.id}> 
          <li>
            <img src={productlist.image} alt='' />
            <p>{productlist.title}</p>
            <p>{productlist.price} €</p>
            <p>Note : {productlist.note}</p>
          </li>  
        </ul> 
        )
    }
    )
  )
}

export default Products