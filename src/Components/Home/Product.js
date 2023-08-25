import React from "react";
import HomeProduct from "../../Assets/HomeProduct";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export default function Product() {
  return (
    <div className="mb-5">
      <h2 className="text-2xl text-gray-800 mb-5 my-8 ml-4">Top Products</h2>
      <div className="mx-8 grid gap-5 xl:grid-cols-4">
        {HomeProduct.map((curElm) => (
          <div
            className="product-box"
            key={curElm.id}
          >
            <div className="img_box relative group">
              <img
                src={curElm.Img}
                alt={curElm.Title}
                className="h-48 w-48 mx-auto transition-transform group-hover:scale-105"
              />
              <div className="icon absolute inset-0 flex flex-col items-end mx-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="btn-product-icons ml-2">
                  <AiOutlineShoppingCart />
                </button>
                <button className="btn-product-icons ml-2">
                  <BsEye />
                </button>
                <button className="btn-product-icons p-2">
                  <AiOutlineHeart />
                </button>
              </div>
            </div>
            <div className="details text-center pt-3">
              <p className="text-gray-600 text-sm">{curElm.Cat}</p>
              <h3 className="text-lg text-gray-800 font-semibold my-2 transition duration-500 hover:text-blue-500">
                {curElm.Title}
              </h3>
              <h4 className="text-blue-600 text-lg font-semibold mb-1">
                ${curElm.Price}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
