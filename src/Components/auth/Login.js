import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogin } from "react-icons/ci";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}><CiLogin/></button>;
};

export default LoginButton;