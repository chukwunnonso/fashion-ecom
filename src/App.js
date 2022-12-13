import React, { useState, createContext } from 'react'
import Home from './pages/Home'
import ProductList from './pages/ProductList';
import {Routes, Route} from 'react-router-dom';
import CartCheckout from './pages/CartCheckout';
import './App.css';

export const ProductContext = createContext(null);;

export const App = () => {
  const [options, setOptions] = useState([]);
  const [selectedId, setSelectedId] = useState("")

  return (
    <ProductContext.Provider value={{options, setOptions, selectedId, setSelectedId}}>
      <div>
        <Routes>
            <Route path='/' element={<Home/>}   />
            <Route path='/productlist' element={<ProductList/>} />
            <Route path='/checkout' element={<CartCheckout/>} />
        </Routes>
      </div>
    </ProductContext.Provider>
  );
};

export default App