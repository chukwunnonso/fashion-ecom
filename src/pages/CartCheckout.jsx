import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { ProductContext } from '../App';
import { Link } from 'react-router-dom';

export let quantity = 0

const CartCheckout = () => {
  const {options, setOptions} = useContext(ProductContext);

  const cart = [];
  // Loop over the products and add them to the cart
  for (const option of options) {
    // Check if the product is already in the cart
    const existingProduct = cart.find((p) => p.id === option.id);
    if (existingProduct) {
      // If the product is already in the cart, increase the quantity by 1
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a default quantity of 1
      cart.push({ ...option, quantity: 1 });
    }
  }

  console.log(cart);
  return(
    <div className='text-2xl'>
      <Navbar/>
      <div className='flex flex-row justify-center items-center mt-20'>
      <div className=''>
      <table className="border border-separate border-spacing-7 table-auto lg:w-full ">
        <thead>
          <tr className='border'>
            <th className=''>Item</th>
            <th className=''>Rate</th>
            <th className=''>Quantity</th>
            <th className=''>Price</th>
          </tr>
        </thead>
        <tbody>
        {cart.map(item => {
          let total = Math.round(item.price*item.quantity)
          quantity += total
          return(            
                <tr>
                  <td className='text-left'>{item.title}</td>
                  <td className='text-center'>NGN {item.price}</td>
                  <td className='text-center'>{item.quantity}</td>
                  <td className='text-center'>NGN {total}</td>
                  <td className='text-center'>
                    <button 
                    className='bg-black text-white px-3 py-2 rounded-lg hover:px-4'
                    onClick={() => {
                      if(item.quantity > 0) {
                        item.quantity -= 1;
                      }
                      if(item.quantity === 0) {
                        // Remove item from cart
                      }
                    }}>
                      Remove Item
                    </button>
                  </td>
                </tr>
          )
        })}
        </tbody>
        </table>
        <div className="text-center mt-10">
          Grand Total = <span className='font-bold' >NGN {quantity}</span>
          <Link to={'/checkout/payment'} className='bg-black text-white px-3 py-2 rounded-lg hover:px-4 hover:py-3 m-10'>Checkout</Link> 
        </div>
      </div>
      </div>
    </div>
  )
}

export default CartCheckout
