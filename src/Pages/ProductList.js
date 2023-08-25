import React from "react";
import ProductDetails from "../Assets/ProductDetails";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";

const Product = () => {
  return (
    <>
      <div className="products p-8">
        <h2 className="text-3xl font-semibold"># Products</h2>
        <p className="text-gray-600">Home . Product</p>
        <div className="container flex justify-between">
          <div className="filter p-5">
            <div className="categories">
              <h3 className="text-lg font-semibold">Categories</h3>
              <ul className="mt-3 space-y-3">
                <li>
                  <button className="px-4 py-2">Tablet</button>
                </li>
                <li>
                  <button className="px-4 py-2">Smart Watch</button>
                </li>
                <li>
                  <button className="px-4 py-2">HeadPhone</button>
                </li>
                <li>
                  <button className="px-4 py-2">Camera</button>
                </li>
                <li>
                  <button className="px-4 py-2">Gaming</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="productbox flex flex-wrap">
            <div className="container">
              <div className="mx-8 grid gap-5 xl:grid-cols-4">
                {ProductDetails.map((curElm) => {
                  return (
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
