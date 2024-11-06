import React from "react";
import logo from "../assets/index"
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/project-ideas", label: "Project Ideas" },
    { path: "/pac-meetings", label: "Pac Meeting" },
    { path: "/guest-speaker", label: "Guest Speaker" },
    { path: "/contact-us", label: "Contact Us" },
  ];
  return (
    <div className="navbar">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-row justify-center items-center gap-2">
          <img src={logo} alt="logo" className="w-16" />
          <ul className="menu menu-horizontal px-1 text-gray-500 ">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:bg-transparent ${
                      isActive ? "bg-transparent text-gray-700 underline" : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <p className="pr-4">@ 2024 GBC Hub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
