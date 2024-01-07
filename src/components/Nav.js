import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Products from './Products'


function Nav({productItems}) {
  return (
    <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/shop" Component={Products} productItems={productItems}/>
        </Routes>
    </div>
  )
}

export default Nav