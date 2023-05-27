import React from "react";
import logo from "../assets/Vertical container.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="bg-inherit">
      <div className="h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex">
            <a href="/home">
              <img className="h-15 w-32 " src={logo} alt="logo" />
            </a>
            <div className="max-md:items-center max-md:text-center">
              <div className="flex items-baseline space-x-4 text-center ">
                <a
                  href="/about"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  About
                </a>
                <a
                  href="/services"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  Services
                </a>
                <a
                  href="/projects"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  Projects
                </a>
                <a
                  href="/contact"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  Contact
                </a>
                <a
                  href="/contact"
                  className="bg-primary-button-color text-white rounded-sm px-3 py-2 text-xs font-bold hover:shadow-xl shadow-slate-700 max-md:hidden">
                  Need a project?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
