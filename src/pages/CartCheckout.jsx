import React, { useContext, useState } from 'react';

// const CartCheckout = () => {
//     return(
//         <div>
            
//         </div>
//     )
// }

// export default CartCheckout

// This is the context that holds the list of items in the cart
const CartContext = React.createContext();

// This component provides the context to its children
function CartProvider({ children }) {
  // This is the state that holds the list of items in the cart
  const [items, setItems] = useState([]);

  // This is the function that adds an item to the cart
  const addToCart = (product) => {
    // Create an object to represent the product
    const item = {
      title: product.title,
      price: product.price,
    };

    // Update the cart component's state to include the new item
    setItems([...items, item]);
  };

  return (
    // Provide the context to the components that need to access it
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// This component displays the list of items in the cart
function Cart() {
  // Use the useContext hook to access the context
  const { items } = useContext(CartContext);

  // Render the cart items in a list
  return (
    <ul>
      {items.map((item) => (
        <li>{item.title}: {item.price}</li>
      ))}
    </ul>
  );
}

export default CartContext