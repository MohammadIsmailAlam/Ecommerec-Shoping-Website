import React from "react";
import { BsArrowRight } from "react-icons/bs";
import sliderImg from "../../Assets/img/slider-img.png";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="top-banner bg-blue-100 py-8">
      <div className="container flex justify-between">
        <div className="px-8 detail">
          <h2 className="text-4xl font-semibold text-blue-800 mb-6">
            The Note Book Collection 2023
          </h2>
          <button
            onClick={() => navigate("/product")}
            className="btn-shopNow bg-white text-blue-800 py-2 px-4 rounded-full hover:bg-blue-800 hover:text-white transition duration-300"
          >
            Shop Now
            <BsArrowRight className="ml-2 mt-1" />
          </button>
        </div>
        <div className="img_box">
          <img src={sliderImg} alt="sliderImg" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;