import React from "react";
import pic from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="hero min-h-screen  flex flex-col lg:flex-row bg-[#e7f6ff]">
      <div className="text-center hero-content flex-1 w-1/3">
        <div className="flex flex-col px-24 mx-auto lg:mx-0">
          <h1 className="font-inter text-[55.35px] font-semibold leading-[61.5px] tracking-tight text-left">
            Connecting Industry with George Brown College
          </h1>
          <p className="my-7 text-[#787878] font-inter text-[20px] font-semibold leading-[33px] tracking-tight text-left">
            Partner with Us to Shape the Future of Tech Education
          </p>
          <button className="btn bg-[#005AA5] text-white w-36 justify-center rounded-xl">
            Learn more
          </button>
        </div>
      </div>
      <div className="hidden lg:block flex-1 w-2/3">
        <img src={pic} alt="hero" className="w-3/4 h-auto" />
      </div>
    </div>
  );
};

export default Hero;