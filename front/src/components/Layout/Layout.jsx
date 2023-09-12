import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import LoginAndSignup from "./../LoginAndSignup/LoginAndSignup";

const Layout = () => {
  const [loginClick, setLoginClick] = useState(false);
  return (
    <>
      <Header setLoginClick={setLoginClick} />
      {loginClick && <LoginAndSignup setLoginClick={setLoginClick} />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
