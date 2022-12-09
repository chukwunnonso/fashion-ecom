import React from 'react'
import  ReactDOM from 'react-dom'
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css'
//import 'bootstrap/dist/css/bootstrap.css'
import ProductList from './pages/ProductList';
ReactDOM.render( 
    <Router>
        <Routes>
            <Route path='/' element={<App/>}   />
            <Route path='/productlist' element={<ProductList/>}   />
        </Routes>
    </Router>,

document.getElementById('root')
);



