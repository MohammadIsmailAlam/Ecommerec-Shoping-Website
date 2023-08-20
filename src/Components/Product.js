import React from "react";
import HomeProduct from "../Assets/HomeProduct";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export default function Product() {
  return (
    <div className="product">
      <h2 className="text-2xl text-gray-800 mb-5">Top Products</h2>
      <div className="container grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {HomeProduct.map((curElm) => (
          <div
            className="box border rounded overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            key={curElm.id}
          >
            <div className="img_box relative group">
              <img
                src={curElm.Img}
                alt={curElm.Title}
                className="h-48 w-48 mx-auto transition-transform group-hover:scale-105"
              />
              <div className="icon absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <AiOutlineShoppingCart className="text-2xl mb-2" />
                <BsEye className="text-2xl mb-2" />
                <AiOutlineHeart className="text-2xl" />
              </div>
            </div>
            <div className="details text-center pt-3">
              <p className="text-gray-600">{curElm.Cat}</p>
              <h3 className="text-lg text-gray-800 font-semibold my-2">
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
