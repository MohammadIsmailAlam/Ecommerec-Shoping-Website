import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogin } from "react-icons/ci";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => loginWithRedirect()}
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <CiLogin />
      </button>
      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 ${showTooltip ? "block" : "hidden"}`}>
        <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md ">
          LogIn
        </span>
      </div>
    </div>
  );
};

export default LoginButton;
