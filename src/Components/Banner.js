import React from "react";
import { BsArrowRight } from "react-icons/bs";
import SliderImg from "../Assets/img/slider-img.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner bg-blue-800">
      <div className="container flex justify-between p-8">
        <div className="details text-white">
          <h4 className="font-semibol">
            LATEST TECHNOLOGY ADDED
          </h4>
          <h1 className="text-4xl font-semibold mt-8">
            Apple iPad 10.2 9th Gen - 2021
          </h1>
          <p className="text-3xl font-semibold">$ 986</p>
          <button
            onClick={() => navigate("/product")}
            className="btn-shopNow"
          >
            Shop Now
            <BsArrowRight className="text-blue-800 ml-2 mt-1" />
          </button>
        </div>
        <div className="img_box">
          <img src={SliderImg} alt="SliderImg" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Banner;