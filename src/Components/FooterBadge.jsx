import React from "react";
import pic from "../assets/images/partner.jpg";

const FooterBadge = () => {
  return (
    <div className="relative h-64 rounded-md shadow-sm flex p-8 bg-[#e7f6ff]">
      {/* Image with gradient overlay */}
      <div className="relative w-full h-full rounded-xl overflow-hidden">
        <img src={pic} alt="Shoes" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005AA5] to-[#00A1DE] opacity-70"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-between p-8">
        {/* Left Text Section */}
        <div className="space-y-4 text-left ml-14">
          <h2 className="text-white font-extrabold text-3xl">
            Become a Partner Today
          </h2>
          <p className="text-white">
            Join us in shaping the future of tech education. Partner with us to
            make a lasting impact on both students and your industry.
          </p>
        </div>

        {/* Right Button Section */}
        <div>
          <a href="/join-now" className="btn bg-[#FECB00] w-32 font-inter font-medium text-center mr-10">
            Join Now
          </a>
        </div>
      </div>
    </div>
  );
};


export default FooterBadge;
