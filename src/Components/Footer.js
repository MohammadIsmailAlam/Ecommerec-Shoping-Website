import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import logo from "../Assets/img/logo_transparent.png";

const Footer = () => {
  return (
    <>
      <div className="footer bg-blue-100">
        <div className="container md:flex justify-between px-8 py-6">
          <div className="about">
            <div className="logo max-w-[250px]">
              <img src={logo} alt="logo" />
            </div>
            <div className="detail text-left md:text-center">
              <div className="mt-5 text-base text-gray-700">
                Explore Our World of Gadgets.
              </div>
              <div className="mt-5">
                Discover the latest in cutting-edge technology and innovative
                gadgets at our online store. We're passionate about bringing you
                the best in electronics, from smart devices to entertainment
                systems. Our curated selection ensures you stay ahead with the
                most exciting products.
              </div>
              <div className="mt-5">Stay Connected</div>
            </div>

            <div className="md:flex justify-around items-center">
              <div className="account justify-items-center items-center">
                <h3 className="text-2xl text-black">My Account</h3>
                <ul className="mt-2">
                  <li className="icon-footer">Account</li>
                  <li className="icon-footer">Order</li>
                  <li className="icon-footer">Cart</li>
                  <li className="icon-footer">Shipping</li>
                  <li className="icon-footer">Return</li>
                </ul>
              </div>
              <div className="page justify-items-center items-center">
                <h3 className="text-2xl text-black">Pages</h3>
                <ul className="mt-2">
                  <li className="icon-footer">Home</li>
                  <li className="icon-footer">About</li>
                  <li className="icon-footer">Contact</li>
                  <li className="icon-footer">Terms &amp; Conditions</li>
                </ul>
              </div>
            </div>
            <div className="icon flex justify-center py-8">
              <li className="icon-footer">
                <RiFacebookFill className="icon-btn hover:text-blue-700" />
              </li>
              <li className="icon-footer">
                <button className="icon-btn hover:text-[#e4405f]">
                  <AiOutlineInstagram className="w-full h-full" />
                </button>
              </li>
              <li className="icon-footer">
                <button className="icon-btn hover:text-blue-400">
                  <AiOutlineTwitter className="w-full h-full" />
                </button>
              </li>
              <li className="icon-footer">
                <button className="icon-btn hover:text-red-600">
                  <BsYoutube className="w-full h-full" />
                </button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
