import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Shop from './components/Shop'
import ModalContent from './components/ModalContent'
import ProductSheet from './components/ProductSheet'


function AppRoutes({ productItems, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClearance, deleteProduct }) {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/shop" element={<Shop productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />} />
        <Route path="/cart" element={<ModalContent productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />} />
        <Route path="/product/:productId" element={<ProductSheet productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />} />
      </Routes>
    </div>
  )
}

export default AppRoutes