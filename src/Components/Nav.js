import React, { useState } from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import Logo from "../Assets/img/output-onlinepngtools.png";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/Login";
import LogoutButton from "./auth/LogOut";

export default function Nav({ searchBtn }) {
  const [search, setSearch] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
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
        <div className="md:flex justify-between items-center">
          <div className="logo max-w-[250px] m-3">
            <img src={Logo} alt="logo" />
          </div>
          <div className="search_box mr-8 md:flex items-center">
            <form
              className="md:flex items-center"
              onSubmit={(e) => {
                e.preventDefault();
                searchBtn(search);
              }}
            >
              <input
                type="text"
                value={search}
                placeholder="Enter The Product Name"
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 px-4 border-3 border-zinc-400 w-full md:w-50 text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
              >
                <BiSearchAlt />
              </button>
            </form>
          </div>

          <div className="icon md:flex items-center m-8">
            {isAuthenticated && (
              <div className="account md:flex items-center mr-8">
                <div className="user_icon text-blue-900 text-base">
                  <AiOutlineUser />
                </div>
                <p className="mr-1">Hello, {user.name}</p>
              </div>
            )}

            <div className="md:flex cursor-pointer">
              <div className="nav-favourite text-blue-500 text-xl mr-2">
                <AiOutlineHeart
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </div>
              <div className="nav-cart relative text-blue-500 text-xl ml-2">
                <BsBagCheck
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 ${
                    showTooltip ? "block" : "hidden"
                  }`}
                >
                  <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md ">
                    Cart
                  </span>
                </div>
              </div>
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
