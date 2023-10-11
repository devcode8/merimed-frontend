import React from "react";
import Login from "../features/auth/Components/Login";
import Navbar from "../features/navbar/Components/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar>
        <Login />
      </Navbar>
    </>
  );
};

export default LoginPage;
