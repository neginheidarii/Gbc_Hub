import React from "react";
import Card from "./Card";

const Hero = ({ title, description, buttonText, imgSrc, formInput }) => {
  return (
    <div className="hero min-h-screen  flex flex-col lg:flex-row bg-[#e7f6ff]">
      <div className="text-center hero-content flex-1 w-1/3">
        <div className="flex flex-col px-24 mx-auto lg:mx-0">
          <h1 className="font-inter text-[55.35px] font-semibold leading-[61.5px] tracking-tight text-left">
            {title}
          </h1>
          <p className="my-7 text-[#787878] font-inter text-[20px] font-semibold leading-[33px] tracking-tight text-left">
            {description}
          </p>
          {buttonText && (
            <button className="btn bg-[#005AA5] text-white font-normal w-36 justify-center rounded-xl hover:text-[#131133] hover:bg-[#7fc8f0]">
              {buttonText}
            </button>
          )}
        </div>
      </div>
      {imgSrc && (
        <div className="hidden lg:block flex-1 w-2/3 ">
          <img
            src={imgSrc}
            alt="hero"
            className="w-5/6 h-full rounded-tl-[254px]"
          />
        </div>
      )}
      {formInput && (
        <div className=" justify-center items-center">
          <Card />
        </div>
      )}
    </div>
  );
};

export default Hero;
