import React from 'react'
import pic from "../assets/images/partner.jpg";

const FooterBadge = () => {
  return (
    <>
      <div className=" bg-base-100 w-full h-36 rounded-md shadow-xl flex relative ">
          <img
            src={pic}
            alt="Shoes"
            className="w-full object-cover rounded-l-md"
          />
        <div className="absolute">
          <h2 className="">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className=" justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterBadge