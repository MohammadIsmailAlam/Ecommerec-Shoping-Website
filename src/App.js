import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Components/Home/About";
import Footer from "./Components/Footer";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Assets/ProductDetails";
import Model from "./Components/Model";

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

  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])

  const view = (product) => 
  {
    setDetail([{...product}])
    setClose(true)
  }

  return (
    <>
      <userContext.Provider value={{ userEmail, setUserEmail }}>
        <Router>
          <Nav searchBtn={searchBtn} />
          <Routes>
          <Route path="/" element={<Home close={close} onClose={() => setClose(false)} detail={detail} view={view}/>} />
            <Route
              path="/product"
              element={
                <ProductList product={product} setProduct={setProduct} view={view}/>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <Model close={close} detail={detail} onClose={() => setClose(false)} />
        </Router>
      </userContext.Provider>
    </>
  );
};

export default App;
