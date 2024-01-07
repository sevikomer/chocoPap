import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import data from './products.json'

function App() {
 const {productItems} = data;
 const [cartItems, setCartItems] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <Header productItems={productItems} cartItems={cartItems} setCartItems={setCartItems}/>
        <Nav productItems={productItems} cartItems={cartItems} setCartItems={setCartItems}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
