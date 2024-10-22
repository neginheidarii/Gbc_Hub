import React from 'react'
import logo from "../assets/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar px-12 bg-[#E7F6FF] font-inter text-base font-bold leading-5 tracking-tight text-left  text-[#005AA5]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li className="">
              <a className="">Home</a>
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
        <img src={logo} alt="logo" className="hidden lg:block w-20" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
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
      <div className="navbar-end">
        <a className="btn  bg-[#FECB00] w-32 font-inter font-medium">Join Now</a>
      </div>
    </div>
  );
}

export default Navbar