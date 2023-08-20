import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import sliderImg from "../Assets/img/slider-img.png";
import mobilePhone from "../Assets/img/Mobile Phone.png";
import smartWatch from "../Assets/img/smart watch.png";
import headPhone from "../Assets/img/headphone.png";
import cpuHeat from "../Assets/img/cpu heat.jpg";
import About from "../Components/About";
import Product from "../Components/Product";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-banner bg-blue-100 py-8">
        <div className="container flex justify-between">
          <div className="px-8 details">
            <h2 className="text-4xl font-semibold text-blue-800">
              The Note Book Collection 2023
            </h2>
            <button
              onClick={() => navigate("/product")}
              className="py-2 px-4 mt-2 bg-white text-blue-800 rounded hover:bg-blue-100 transition flex items-center space-x-1"
            >
              Shop Now
              <BsArrowRight className="text-blue-800 ml-2 mt-1" />
            </button>
          </div>
          <div className="img_box">
            <img src={sliderImg} alt="sliderImg" />
          </div>
        </div>
      </div>
      <div className="product_type py-5 px-8">
        <div className="container flex justify-between">
          <div className="box">
            <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer">
              <img
                src={mobilePhone}
                alt="Mobile Phone"
                className="h-16 w-16 m-auto transition-transform transform hover:scale-125"
              />
            </div>
            <div className="deatils">
              <p className="text-gray-600 flex items-center justify-center">
                23 Products
              </p>
            </div>
          </div>

          <div className="box">
            <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer">
              <img
                src={smartWatch}
                alt="Smart Watch"
                className="h-16 w-16 m-auto transition-transform transform hover:scale-125"
              />
            </div>
            <div className="deatils">
              <p className="text-gray-600 flex items-center justify-center">
                18 Products
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer">
              <img
                src={headPhone}
                alt="Head Phone"
                className="h-16 w-16 m-auto transition-transform transform hover:scale-125"
              />
            </div>
            <div className="deatils">
              <p className="text-gray-600 flex items-center justify-center">
                52 Products
              </p>
            </div>
          </div>
          <div className="box">
            <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer">
              <img
                src={cpuHeat}
                alt="CPU Heat."
                className="h-16 w-16 m-auto transition-transform transform hover:scale-125"
              />
            </div>
            <div className="deatils">
              <p className="text-gray-600 flex items-center justify-center">
                63 Products
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Product />
    </>
  );
};

export default Home;
