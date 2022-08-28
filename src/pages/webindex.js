import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./layout/footer";
import Header from "./layout/header";

/* const nav = useNavigate();

useEffect(() => {
  nav('/home');
}, []) */

const WebIndex = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default WebIndex;
