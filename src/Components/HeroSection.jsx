import React from "react";
import heroimg from '../assets/hero.png'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.jpg'
import { Outlet } from "react-router";

const HeroSection = () => {
  return (
    <div className="bg-[#f5f5f5]">
        <div className="container mx-auto p-15 flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-2xl font-bold text-[#192f45]">We Build</h1>
      <h1 className="md:text-5xl text-2xl font-bold text-[#192f45]"><span className="text-[#7d4de3]">Productive</span> Apps</h1>
      <p className="md:text-center text-justify text-[#627382] my-2">
        At App Vault , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="my-6 flex flex-col md:flex-row">
        <button className="btn mr-2"><span><img className="h-[32px] w-[32px]" src={playstore} alt="" /></span><a href="https://play.google.com/store/games?hl=en">Google Play</a></button>
        <button className="btn"><span><img className="h-[32px] w-[32px]" src={appstore} alt="" /></span>App Store</button>
      </div>
      <div>
        <img src={heroimg} alt="" />
      </div>
    </div>
    {/* user-expericence-part */}
    <div className="flex flex-col justify-center items-center md:h-[350px] -mt-15 text-center bg-gradient-to-r from-[#6c36e5] to-[#9257ef]">
        <h1 className="md:text-4xl text-white font-bold">Trusted by Millions, Built for You</h1>
        <div className="flex justify-center items-center md:gap-30 md:mt-4">
            <div>
                <p className="text-white text-[10px] my-2">Total Downloads</p>
                <h1 className="text-white md:text-5xl font-bold">29.6M</h1>
                <p className="text-white text-[10px] my-2">21% more than last month</p>
            </div>
           <div>
                <p className="text-white text-[10px] my-2">Total Reviwes</p>
                <h1 className="text-white md:text-5xl font-bold">906K</h1>
                <p className="text-white text-[10px] my-2">46% more than last month</p>
            </div>
            <div>
                <p className="text-white text-[10px] my-2">Active Apps</p>
                <h1 className="text-white md:text-5xl font-bold">29.6M</h1>
                <p className="text-white text-[10px] my-2">31 More will launch</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default HeroSection;
