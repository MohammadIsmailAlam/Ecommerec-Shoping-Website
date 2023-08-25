import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Components/Home/About";
import Footer from "./Components/Footer";
import ProductList from "./Pages/ProductList";

export const userContext = React.createContext(null);

const App = () => {
  const [userEmail, setUserEmail] = useState("");
  return (
    <>
      <userContext.Provider value={{ userEmail, setUserEmail }}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </userContext.Provider>
    </>
  );
};

export default App;
