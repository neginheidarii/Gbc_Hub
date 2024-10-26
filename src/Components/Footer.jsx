import React from "react";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-row justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-16" />
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
        </div>
        <p className=" pr-4">@ 2024 GBC Hub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
