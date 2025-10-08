import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";
import NotFound from "../Pages/NotFound";

const Allapp = () => {
  const data = useLoaderData();
  const [search,setsearch]=useState('') 
  const trim=search.trim().toLocaleLowerCase();
  const searchProduct=trim?data.filter(data=>data.title.toLocaleLowerCase().includes(trim)):data;

  return (
    <div className="bg-[#f5f5f5]">
      <h1 className="text-center md:text-4xl font-bold pt-7">
        Our All Application
      </h1>
  
      <p className="text-center  text-[#627382]">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="md:container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-xl">({searchProduct.length})Apps Found</h1>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input value={search} onChange={
              e=>setsearch(e.target.value)
            } type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-y-5 p-15 md:p-5 container mx-auto">
        {searchProduct.length > 0 ? (
          searchProduct.map((item) => (
            <NavLink key={item.id} to={`/details/${item.id}`}>
              <div className="hover:scale-105 transition-transform shadow-sm w-[280px] h-[300px] bg-white p-5 md:p-10 rounded-2xl mx-auto">
                <div className="flex flex-col items-center justify-center bg-gray-200 p-1 rounded-xl">
                  <img
                    className="h-[140px] w-[160px] rounded-2xl"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h1 className="text-center mt-1 font-semibold">{item.title}</h1>
                <div className="flex justify-between items-center mt-6">
                  <div className="flex justify-center items-center gap-1 bg-[#f1f5e8] p-2 rounded-sm">
                    <img className="h-[20px] w-[20px]" src={download} alt="Downloads" />
                    <h1 className="font-semibold text-[#00d390] text-[13px]">
                      {item.downloads}M
                    </h1>
                  </div>
                  <div className="flex justify-center items-center gap-1 bg-[#fff0e1] p-2 rounded-sm">
                    <img className="h-[20px] w-[20px]" src={rating} alt="Rating" />
                    <h1 className="font-semibold text-[#ff8811] text-[13px]">
                      {item.ratingAvg}M
                    </h1>
                  </div>
                </div>
              </div>
            </NavLink>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-[60vh]">
  <NotFound />
</div>

        )}
      </div>
    </div>
  );
};

export default Allapp;
