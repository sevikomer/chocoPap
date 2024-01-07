import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import data from './products.json'

function App() {
 const productItems = data;
 const [cartItems, setCartItems] = useState([])
 const handleAddProduct = (productItem) => { 
  const ProductExist = cartItems.find((cartItem) => cartItem.id === productItem.id);
  if(ProductExist){
    setCartItems(cartItems.map((cartItem) => cartItem.id === productItem.id ? {...ProductExist, quantity: ProductExist.quantity + 1}:cartItem));
  }
  else {
    setCartItems([...cartItems, {...productItem, quantity:1}])
  }
} 
const handleRemoveProduct = (productItem) => {
  const ProductExist = cartItems.find((cartItem) => cartItem.id === productItem.id);
  if(ProductExist.quantity === 1){
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== productItem.id));
  }
  else {
    setCartItems(cartItems.map((cartItem) => cartItem.id === productItem.id ? {...ProductExist, quantity: ProductExist.quantity - 1}:cartItem));
  }
}
const handleCartClearance = () => {
  setCartItems([])
}
  return (
    <div>
      <BrowserRouter>
        <Header productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
        <Nav productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
