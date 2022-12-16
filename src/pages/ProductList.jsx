import React, {useState, useEffect, useContext} from 'react'
import Navbar from '../components/Navbar';
import { ProductContext } from '../App';
import '../App.css';

const ProductList = () => {
    const [fake, setFake] =useState([])
    // console.log(fake)

    useEffect(() => {        
        fakeStore();
    }, [])

    // const fakeStore = async()=> {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     //console.log(response)
    //     const jsonData =await response.json()
    //     // console.log(jsonData);
    //     setFake(jsonData);
    // }

    const fakeStore = () => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setFake(data))
    }

    const {options, setOptions} = useContext(ProductContext);
    const {cart, setCart} = useState([])
    // const addToCart = 

  return (
    <div>
        <Navbar className='pb-16' />
        <div className='product-container mt-10'>
            {fake.map((values)=> {
                return(
                    <div key={values.id} className='box'>
                        <div className="content">
                            <h5 className='product-h5'>{values.title}</h5>
                            <p className='product-p'>{values.description}</p>
                        </div>
                        <img className='product-image' src={values.image}/>
                        <h5 className='product-h5'>NGN {values.price}</h5>
                        <div className='flex flex-row justify-center mt-5'>
                            <button 
                            className='text-black p-2 bg-white rounded-lg hover:px-3' 
                            onClick={() => {setOptions([{
                                            id: values.id,
                                            title: values.title,
                                            price: values.price },...options])
                            console.log(options)}}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )
            })}        
        </div>
    </div>    
  )
}

export default ProductList


