import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import data from './products.json'
import AppRoutes from './Routes';

function App() {
  const productItems = data;
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    const parsedCartItems = JSON.parse(savedCartItems);
    return parsedCartItems || [];
  });
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  console.log('localstorage:', localStorage)


  const handleAddProduct = (productItem) => {
    const ProductExist = cartItems.find((cartItem) => cartItem.id === productItem.id);
    if (ProductExist) {
      setCartItems(cartItems.map((cartItem) => cartItem.id === productItem.id ? { ...ProductExist, quantity: ProductExist.quantity + 1 } : cartItem));
    }
    else {
      setCartItems([...cartItems, { ...productItem, quantity: 1 }])
    }
  }
  const handleRemoveProduct = (productItem) => {
    const ProductExist = cartItems.find((cartItem) => cartItem.id === productItem.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== productItem.id));
    }
    else {
      setCartItems(cartItems.map((cartItem) => cartItem.id === productItem.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : cartItem));
    }
  }
  const handleCartClearance = () => {
    setCartItems([])
  }
  const deleteProduct = (productItem) => { setCartItems(cartItems.filter((cartItem) => cartItem.id !== productItem.id)) }
  return (
    <div>
      <BrowserRouter>
        <Header productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />
        <AppRoutes productItems={productItems} cartItems={cartItems} setCartItems={setCartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} deleteProduct={deleteProduct} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
