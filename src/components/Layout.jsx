import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar/Navbar";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
const Layout = () => {
  const scrollToTopStyle = {
    background: "linear-gradient(to bottom, #00e0a1, #00b0e0, #0088cc)",
  };
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
      <ScrollToTop
        smooth
        style={scrollToTopStyle}
        className={` rounded-xl w-12 h-12 flex justify-center items-center`}
      />
    </div>
  );
};

export default Layout;
