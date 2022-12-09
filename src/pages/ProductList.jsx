// import React from "react";

// const ProductList = () => {
//     return(
//         <div>
//             ProductList
//         </div>
//     )
// }

// export default ProductList



///////Let me write styling below



import React, {useState, useEffect} from 'react'
import '../App.css';
//import { json } from 'react-router-dom';

const ProductList = () => {

    const [fake, setFake] =useState([])
    console.log(fake)
    useEffect(() => {
        
        fakeStore();
    }, [])

    const fakeStore = async()=> {
        const response = await fetch("https://fakestoreapi.com/products");
        //console.log(response)
        const jsonData =await response.json()
        //console.log(jsonData);
        setFake(jsonData);
    }
    //fakeStore();
    //https://fakestoreapi.com/products
  return (
    <>
    <div className='product-container'>
        {fake.map((values)=> {
            return(
                <>
                <div className='box'>
                    <div className="content">
                    <h5 className='product-h5'>{values.title}</h5>
                    <p className='product-p'>{values.description}</p>
                    </div>
                    <img className='product-image' src={values.image}/>
                      <h5 className='product-h5'>{values.price}</h5>
                </div>    
                
                </>
            )
        })}
        {/* <div className='box'>
        <div className="content">
            <h5>Title</h5>
            <p>Description</p>
        </div>
        <h1>Image</h1>
        </div> */}
        
        
        </div>
        </>
  )
}

export default ProductList


