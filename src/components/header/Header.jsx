import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header-main-div">
      <div id="store-name">
        <h2>TeeRex Store</h2>
      </div>
      <div id="products">
        <h2>Products</h2>
        <Link to="/cart" id="cart">
          <h2 >Cart</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
