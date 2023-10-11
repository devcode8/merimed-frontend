import React from "react";
import Signup from "../features/auth/Components/Signup";
import Navbar from "../features/navbar/Components/Navbar";

const SignupPage = () => {
  return (
    <>
      <Navbar>
        <Signup />
      </Navbar>
    </>
  );
};

export default SignupPage;
