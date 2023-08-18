import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/nav";
import Home from "./Pages/home";
import Product from "./Pages/product";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Cart from "./Pages/cart";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
