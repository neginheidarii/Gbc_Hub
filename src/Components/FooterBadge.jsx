import React from "react";
import pic from "../assets/images/partner.jpg";

const FooterBadge = () => {
  return (
    <>
      <div className="relative h-64 rounded-md shadow-xl flex p-8 bg-[#bfdbfe]">
        <img
          src={pic}
          alt="Shoes"
          className=" w-full object-cover rounded-xl inset-0 bg-black opacity-30 border-2 border-black"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative z-10 text-left space-y-4">
            <h2 className="text-black font-extrabold text-3xl">
              Become a Partner Today
            </h2>
            <p className="text-black">
              Join us in shaping the future of tech education. Partner with us
              to make a lasting impact on both students and your industry.
            </p>
            <div className="flex justify-start">
              <a className="btn bg-[#FECB00] w-32 font-inter font-medium text-center">
                Join Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBadge;
