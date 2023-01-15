import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import "./CartPage.css";

const CartPage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartData, setCartData } = useContext(CartContext);

  console.log(cartData);

  const getTotal = () => {
    let max = 0;
    for (let i = 0; i < cartData.length; i++) {
      max = max + cartData[i].price;
    }
    setTotalPrice(max);
  };

  useEffect(() => {
    getTotal();
  }, [cartData]);
  console.log(totalPrice);

  const deleteData = (product) => {
    let data = cartData.filter((item) => item.id !== product.id)
    setCartData(data)
  }

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartData.map((item) => (
        <div id="card">
          <img src={item.imageURL} alt="" />
          <div>
            <h4>{item.name}</h4>
            <h6>{item.price}</h6>
          </div>
          <div>
            <select name="" id="">
              <option value="">Qty</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <button onClick={() => deleteData(item)}>Delete</button>
        </div>
      ))}

      <h2>Total Amount: {totalPrice} </h2>
    </div>
  );
};

export default CartPage;
