import React from "react";
import logo from "../assets/index";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/project-ideas", label: "Project Ideas" },
  { path: "/pac-meetings", label: "PAC Meetings" },
  { path: "/guest-speaker", label: "Guest Speaker" },
  { path: "/contact-us", label: "Contact US" },
];

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
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path}> {item.label} </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <img src={logo} alt="logo" className="hidden lg:block w-20" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-[#00A1DE] underline" : "text-[#005AA5]"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/join-now"
          className="btn  bg-[#FECB00] w-32 font-inter font-medium"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
