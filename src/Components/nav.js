import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";

export default function Nav() {
  return (
    <>
      <div className="free bg-blue-900 p-2 flex">
        <div className="icon text-yellow-500 text-2xl">
          <FaTruckMoving />
        </div>
        <p className="text-white text-sm mt-1 ml-2 font-semibold">
          FREE shipping when shopping up to $100
        </p>
      </div>

      <div className="main_header border-b bg-white py-8 px-10">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <img src="./img/logo.svg" alt="logo" />
          </div>
          <div className="search_box mr-8">
            <input
              type="text"
              placeholder="Enter The Product Name"
              className="outline-none py-2 px-4 border-3 border-blue-500 w-60 text-blue-900"
            />
          </div>
          <div className="icon flex items-center">
            <div className="account flex items-center mr-6">
              <div className="user_icon text-blue-900 text-base">
                <AiOutlineUser />
              </div>
              <p className="mr-1">Hello, User</p>
            </div>
            <AiOutlineHeart className="text-blue-500 text-xl" />
            <BsBagCheck className="text-blue-500 text-xl ml-2" />
          </div>
        </div>
      </div>
    </>
  );
}
