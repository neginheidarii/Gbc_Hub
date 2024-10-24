import React from "react";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="justify-center ">
          <img src={logo} alt="logo" className="hidden lg:block w-16" />
        </div>
        <div className=" hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-gray-600 ">
            <li> 
              <a className="text-left">Home</a>
            </li>
            <li>
              <a>Project Ideas</a>
            </li>
            <li>
              <a>PAC Meetings</a>
            </li>
            <li>
              <a>Guest Speaker</a>
            </li>
            <li>
              <a>Contact US</a>
            </li>
          </ul>
          <div className="">
          <p>@ 2024 GBC Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
