import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValues = { cart, addToCart, removeFromCart, clearCart };

  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
