import React,{useState, useContext} from "react";
import { quantity } from "./CartCheckout";
import { PaystackButton } from 'react-paystack'
import { ProductContext } from "../App";
import '../components/Payment.css'

const Payment = () => {
    const publicKey = "pk_test_c623732d3f39b66bb4f3c725d1902d7a0adf4652"
  const amount = quantity*100 // Remember, set in kobo!
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const {options, setOptions} = useContext(ProductContext);
  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>{
      alert("Thanks for doing business with us! Come back soon!!");
      setOptions([])
      resetForm();
    },
    onClose: () => alert("You can try again, Dont go!!!!"),
  }


    return(
      <div className="checkoutApp">
            <div className="container">
            <div className="item">
                <div className="overlay-effect"></div>
                <img
                className="item-image"
                src="https://media.istockphoto.com/id/1135609382/photo/online-shopping-concept.jpg?b=1&s=170667a&w=0&k=20&c=zDqZiZRSxtKaHc8PKXZIt-yVze_ooh_bvFJ5W1vltyE="
                alt="product"
                />
                <div className="item-details">
                <p className="item-details__title">Ordered Items</p>
                <p className="item-details__amount">NGN {quantity}</p>
                </div>
            </div>
        <div className="checkout">
        <div className="checkout-form">
            <div className="checkout-field">
                <label>Name</label>
                <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="checkout-field">
                <label>Email</label>
                <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="checkout-field">
                <label>Phone</label>
                <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <PaystackButton className="paystack-button" {...componentProps} />
        </div>
    </div>
</div>   
</div> 
   )
}

export default Payment