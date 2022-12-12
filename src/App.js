import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import CartCheckout from './pages/CartCheckout'
import './App.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/cart' element={<CartCheckout/>} />
      </Routes>
    </div>
  )
}

export default App