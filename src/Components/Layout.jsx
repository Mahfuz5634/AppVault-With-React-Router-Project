import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>

      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ) : (
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
