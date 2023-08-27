import React, { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import Logo from "../Assets/img/twitter_header_photo_1.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/Login";
import LogoutButton from "./auth/LogOut";

export default function Nav() {
  const [search, setSearch] = useState()
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();
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

      <div className="main_header border-b border-zinc-400 bg-white">
        <div className="container md:flex justify-between items-center">
          <div className="logo max-w-[250px]">
            <img src={Logo} alt="logo" />
          </div>
          <div className="search_box mr-8 md:flex items-center">
            <input
              type="text"
              value={search}
              placeholder="Enter The Product Name"
              onChange={(e) => setSearch(e.target.value)}
              className="py-2 px-4 border-3 border-zinc-400 w-50 text-black"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
              <BiSearchAlt />
            </button>
          </div>
          <div className="icon md:flex items-center">
            {isAuthenticated && (
              <div className="account flex items-center mr-6">
                <div className="user_icon text-blue-900 text-base">
                  <AiOutlineUser />
                </div>
                <p className="mr-1">Hello, {user.name}</p>
              </div>
            )}

            <div className="flex cursor-pointer">
              <AiOutlineHeart
                className="text-blue-500 text-xl"
                onClick={() => {
                  navigate("/");
                }}
              />
              <BsBagCheck
                className="text-blue-500 text-xl ml-2"
                onClick={() => {
                  navigate("/cart");
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="header bg-white py-5 px-8 shadow-md flex justify-between">
        <ul className="md:flex">
          <li>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="text-blue-500 hover:text-blue-700 mr-4"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/product");
              }}
              className="text-blue-500 hover:text-blue-700 mr-4"
            >
              Product
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="text-blue-500 hover:text-blue-700 mr-4"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="text-blue-500 hover:text-blue-700"
            >
              Contact
            </button>
          </li>
        </ul>
        <div className="auth flex items-center">
          {isAuthenticated ? (
            <LogoutButton className="mr-4 text-xl cursor-pointer" />
          ) : (
            <LoginButton className="mr-4 text-xl cursor-pointer" />
          )}
        </div>
      </div>
    </>
  );
}
