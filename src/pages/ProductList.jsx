import React, {useState, useEffect, useContext} from 'react'
import Navbar from '../components/Navbar';
import { ProductContext } from '../App';
import '../App.css';
import ReactLoading from 'react-loading';

const ProductList = () => {
    const [fake, setFake] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {        
        fakeStore();
    }, []);

    const fakeStore = () => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setFake(data);
            setIsLoading(false);
        });
    }

    const {options, setOptions} = useContext(ProductContext);
    const {cart, setCart} = useState([]);

    return (
        <div>
            <Navbar className='pb-16' />
            <div className='product-container mt-10'>
                {isLoading ? (
                    <ReactLoading type='spin' color='gray' height="20%" width="20%" />
                ) : (
                    fake.map((values)=> {
                        return(
                            <div key={values.id} className='box'>
                                <div className="content">
                                    <h5 className='product-h5'>{values.title}</h5>
                                    <p className='product-p'>{values.description}</p>
                                </div>
                                <div className='product-image-container'>
                                    <img className='product-image' src={values.image}/>
                                </div>
                                <h5 className='product-h5'>NGN {values.price}</h5>
                                <div className='flex flex-row justify-center mt-5'>
                                    <button 
                                    className='bg-gray-700 p-2 text-white rounded-lg hover:px-3' 
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
                    })
                )}     
            </div>
        </div>    
    );
}

export default ProductList
