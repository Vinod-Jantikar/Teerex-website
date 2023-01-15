import { Route, Routes } from "react-router-dom";
import CartPage from "./components/cart/CartPage";
import Home from "./components/home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<CartPage/>} />
    </Routes>
  );
};

export default Routers;
