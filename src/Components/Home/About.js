import React from "react";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";

const About = () => {
  return (
    <div className="about bg-gray-100 py-10">
      <div className="container mx-auto md:flex justify-evenly">
        <div className="box flex bg-blue-200 p-4 rounded-md cursor-pointer">
          <div className="icon text-pink-500">
            <FiTruck className="text-2xl" />
          </div>
          <div className="detail ml-4">
            <h3 className="text-black">Free Shipping</h3>
            <p className="text-gray-600">Order above $1000</p>
          </div>
        </div>

        <div className="box flex bg-blue-200 p-4 rounded-md cursor-pointer">
          <div className="icon text-pink-500">
            <BsCurrencyDollar className="text-2xl" />
          </div>
          <div className="detail ml-4">
            <h3 className="text-black">Return & Refund</h3>
            <p className="text-gray-600">Money Back Guarantee</p>
          </div>
        </div>

        <div className="box flex bg-blue-200 p-4 rounded-md cursor-pointer">
          <div className="icon text-pink-500">
            <CiPercent className="text-2xl" />
          </div>
          <div className="detail ml-4">
            <h3 className="text-black">Member Discount</h3>
            <p className="text-gray-600">On every Order</p>
          </div>
        </div>

        <div className="box flex bg-blue-200 p-4 rounded-md cursor-pointer">
          <div className="icon text-pink-500">
            <BiHeadphone className="text-2xl" />
          </div>
          <div className="detail ml-4">
            <h3 className="text-black">Customer Support</h3>
            <p className="text-gray-600">Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;