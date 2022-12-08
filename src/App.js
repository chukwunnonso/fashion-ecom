import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </div>
  )
}

export default App