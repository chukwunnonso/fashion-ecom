import React, {useState, useEffect, useContext} from 'react'
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
        console.log(jsonData);
        setFake(jsonData);
    }


  return (
    <>
    <div className='product-container'>
        {fake.map((values)=> {
            return(
                <>
                <div key={values.id} className='box'>
                    <div className="content">
                    <h5 className='product-h5'>{values.title}</h5>
                    <p className='product-p'>{values.description}</p>
                    </div>
                    <img className='product-image' src={values.image}/>
                      <h5 className='product-h5'>${values.price}</h5>
                    <div className='flex flex-row justify-center mt-5'>
                        <button className='text-black p-2 bg-white rounded-lg'>Add to Cart</button>
                    </div>
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


