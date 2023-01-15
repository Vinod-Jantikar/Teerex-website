import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CartContext } from "../../context/CartContextProvider";
import PageWrapper from "../../pageWrapper/PageWrapper";
import FilterComponent from "../filterComp/FilterComponent";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [text, setText] =  useState("")
  const {handleCart} = useContext(CartContext)


  const handleSearchInput = (event) => {
    setText(event.target.value);
    setFilterData(products);
  };

  const handleSearch = () => {
    const input = text.replace(/\s+/g, " ").trim().toLowerCase();
    const temp = products.filter((obj) =>
      Object.values(obj).some((val) =>
        val.toString().toLowerCase().includes(input)
      )
    );
    setFilterData(temp);
  };

 

  useEffect(() => {
    fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    )
      .then((res) => res.json())
      .then((data) =>  {
        setProducts(data)
        setProductData(data)
      });
  }, []);

  useEffect(() => {
    if (filterData.length === 0) setProductData(products);
    else setProductData(filterData);
  }, [filterData]);


  
  const handleFilter = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    const check = filterData.some((item) => item[name.toLowerCase()] === value);
    if (check) {
      const temp = filterData.filter(
        (item) => item[name.toLowerCase()] !== value
      );
      setFilterData(temp);
    } else {
      const temp = products.filter((item) => item[name.toLowerCase()] === value);
      setFilterData([...filterData, ...temp]);
    }

    if (name === "Price") {
        const price = value.split("-");
        const check = filterData.some(
          (item) =>
            item[name.toLowerCase()] >= +price[0] &&
            item[name.toLowerCase()] <= +price[1]
        );
        if (check) {
          const temp = filterData.filter(
            (item) =>
              !(
                item[name.toLowerCase()] >= +price[0] &&
                item[name.toLowerCase()] <= +price[1]
              )
          );
          setFilterData(temp);
        } else {
          const temp = products.filter(
            (item) =>
              item[name.toLowerCase()] >= +price[0] &&
              item[name.toLowerCase()] <= +price[1]
          );
          setFilterData([...filterData, ...temp]);
        }
      } else {
        const check = filterData.some(
          (item) => item[name.toLowerCase()] === value
        );
        if (check) {
          const temp = filterData.filter(
            (item) => item[name.toLowerCase()] !== value
          );
          setFilterData(temp);
        } else {
          const temp = products.filter((item) => item[name.toLowerCase()] === value);
          setFilterData([...filterData, ...temp]);
        }
      }
  };

  if (products.length === 0) return <h1>Loading......</h1>;

  return (
    <PageWrapper>
      <div>
        <input
          id="input-bar"
          placeholder="Search Products by name or color or type"
          onChange={handleSearchInput}
        />
        <button  onClick={handleSearch}> Search</button>
      </div>

      <div id="main-div">
        <div id="search-div">
          <FilterComponent handleFilter={handleFilter} />
        </div>
        <div id="products-list">
          {productData.map((item) => (
            <div key={item.id}>
              <img src={item.imageURL} alt="" />
              <h1>{item.name}</h1>
              <p>Price: {item.price}</p>
              <button className="add-to-cart-btn" onClick={() => handleCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
