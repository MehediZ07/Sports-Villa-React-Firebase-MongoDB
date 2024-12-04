import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar/Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="">
      <div
        className=" "
        style={{
          minHeight: "calc(100vh - 250px)",
        }}
      >
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
