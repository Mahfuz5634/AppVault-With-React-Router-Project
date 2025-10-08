import React from "react";
import heroimg from '../assets/hero.png'
import playstore from '../assets/playstore.png'
import appstore from '../assets/appstore.jpg'

const HeroSection = () => {
  return (
    <div className="bg-[#f5f5f5]">
        <div className="container mx-auto p-15 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-[#192f45]">We Build</h1>
      <h1 className="text-5xl font-bold text-[#192f45]"><span className="text-[#7d4de3]">Productive</span> Apps</h1>
      <p className="text-center text-[#627382] my-2">
        At App Vault , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="my-6">
        <button className="btn mr-2"><span><img className="h-[32px] w-[32px]" src={playstore} alt="" /></span><a href="https://play.google.com/store/games?hl=en">Google Play</a></button>
        <button className="btn"><span><img className="h-[32px] w-[32px]" src={appstore} alt="" /></span>App Store</button>
      </div>
      <div>
        <img src={heroimg} alt="" />
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
