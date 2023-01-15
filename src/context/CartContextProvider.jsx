import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const handleCart = (data) => {
    setCartData([...cartData, data]);
  };

  return (
    <CartContext.Provider value={{ cartData, handleCart, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};
