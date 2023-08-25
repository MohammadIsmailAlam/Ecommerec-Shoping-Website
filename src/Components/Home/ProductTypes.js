import React from "react";
import mobilePhone from "../../Assets/img/Mobile Phone.png";
import smartWatch from "../../Assets/img/smart watch.png";
import headPhone from "../../Assets/img/headphone.png";
import cpuHeat from "../../Assets/img/cpu heat.jpg";

const ProductTypes = () => {
  return (
    <div className="product_type py-5 px-8">
      <div className="container md:flex justify-between">
        <div className="box flex flex-col md:flex-row items-center">
          <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer mb-3 md:mb-0">
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

        <div className="box flex flex-col md:flex-row items-center">
          <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer mb-3 md:mb-0">
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
        <div className="box flex flex-col md:flex-row items-center">
          <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer mb-3 md:mb-0">
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
        <div className="box flex flex-col md:flex-row items-center">
          <div className="img_box h-32 w-32 rounded-full bg-blue-200 flex items-center justify-center cursor-pointer mb-3 md:mb-0">
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
  );
};

export default ProductTypes;
