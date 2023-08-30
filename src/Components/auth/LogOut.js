import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  const { logout } = useAuth0();
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        className="relative group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <CiLogout />
      </button>
      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 ${showTooltip ? "block" : "hidden"}`}>
        <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap">
          Log Out
        </span>
      </div>
    </div>
  );
};

export default LogoutButton;