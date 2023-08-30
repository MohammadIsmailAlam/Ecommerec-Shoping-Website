import React from "react";
import About from "../Components/Home/About";
import Product from "../Components/Home/Product";
import Banner from "../Components/Home/Banner";
import TopBanner from "../Components/Home/TopBanner";
import ProductTypes from "../Components/Home/ProductTypes";

const Home = ({close, setClose, detail, view, addtocart}) => {
  return (
    <>
      <TopBanner />
      <ProductTypes />
      <About />
      <Product close={close} onClose={() => setClose(false)} detail={detail} view={view} addtocart={addtocart}/>
      <Banner />
    </>
  );
};

export default Home;
