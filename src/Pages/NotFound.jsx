import React from "react";
import notfound from "../assets/App-Error.png";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="container mx-auto  flex flex-col justify-center items-center  ">
      <img className="text-center md:h-[300px] md:w-[300px]" src={notfound} alt="" />
      <h1 className="text-2xl font-bold my-2">OPPS!! APP NOT FOUND</h1>
      <p>
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <NavLink to={"/"}>
        {" "}
        <button className="my-5 hover:scale-105 btn mt-2 bg-gradient-to-r from-[#7941e8] to-[#9257ef] text-white">
          Go Home!
        </button>
      </NavLink>
    </div>
  );
};

export default NotFound;
