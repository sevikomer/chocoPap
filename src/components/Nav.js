import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Shop from './Shop'
import ModalContent from './ModalContent'


function Nav({productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) {
  return (
    <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" element={<Shop productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>} />
          <Route path="/cart" element={<ModalContent productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>} />
        </Routes>
    </div>
  )
}

export default Nav