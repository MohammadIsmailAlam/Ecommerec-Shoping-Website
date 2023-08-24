import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import Logo from "../Assets/img/cap.PNG";

const Footer = () => {
  return (
    <div className="footer bg-gray-100 py-8 px-10">
      <div className="container mx-auto md:flex justify-between">
        <div className="about">
          <div className="logo max-w-[250px]">
            <img src={Logo} alt="logo" className="w-full h-auto" />
          </div>
          <div className="detail mt-5 text-base text-gray-700">
            We are a team of designers and developers that create high quality
            WordPress
          </div>
          <div className="icon mt-5 flex">
            <RiFacebookFill className="icon-footer mr-4" />
            <AiOutlineInstagram className="icon-footer mr-4" />
            <AiOutlineTwitter className="icon-footer mr-4" />
            <BsYoutube className="icon-footer" />
          </div>
        </div>
        <div className="account mt-8">
          <h3 className="text-2xl text-gray-700">My Account</h3>
          <ul className="mt-3">
            <li className="footer my-account">Account</li>
            <li className="footer my-account">Order</li>
            <li className="footer my-account">Cart</li>
            <li className="footer my-account">Shipping</li>
            <li className="my-account">Return</li>
          </ul>
        </div>
        <div className="page mt-8">
          <h3 className="text-2xl text-gray-700">Pages</h3>
          <ul className="mt-3">
            <li className="footer-page my-account">Home</li>
            <li className="footer-page my-account">About</li>
            <li className="footer-page my-account">Contact</li>
            <li className="footer-page my-account">Terms &amp; Condition</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;