import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Components/Home/About";
import Footer from "./Components/Footer";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Assets/ProductDetails";
import Model from "./Components/Model";
import Cart from "./Components/Cart";

export const userContext = React.createContext(null);

const App = () => {
  const [userEmail, setUserEmail] = useState("");

  const [product, setProduct] = useState(ProductDetails);
  const searchBtn = (searchTerm) => {
    const filteredProducts = ProductDetails.filter((product) =>
      product.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProduct(filteredProducts);
  };

  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  const [cart, setCart] = useState([]);
  // add to cart
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to cart");
    }
  };
  console.log(cart);

  return (
    <>
      <userContext.Provider value={{ userEmail, setUserEmail }}>
        <Router>
          <Nav searchBtn={searchBtn} />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  close={close}
                  onClose={() => setClose(false)}
                  detail={detail}
                  view={view}
                  addtocart={addtocart}
                />
              }
            />
            <Route
              path="/product"
              element={
                <ProductList
                  product={product}
                  setProduct={setProduct}
                  view={view}
                  addtocart={addtocart}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/cart"
              element={
                <Cart cart={cart} setCart={setCart} addtocart={addtocart} />
              }
            />
          </Routes>
          <Footer />
          <Model
            close={close}
            detail={detail}
            onClose={() => setClose(false)}
          />
        </Router>
      </userContext.Provider>
    </>
  );
};

export default App;
