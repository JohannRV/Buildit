import React from "react";
import logo from "../assets/Vertical container.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-inherit">
      <div className="h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex">
            <NavLink exact to="/" activeclassname="active">
              <img className="h-15 w-32 " src={logo} alt="logo" />
            </NavLink>
            <div className="max-md:items-center max-md:text-center">
              <div className="flex items-baseline space-x-4 text-center ">
                <NavLink
                  exact
                  to="/about"
                  activeclassname="active"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  About
                </NavLink>
                <NavLink
                  exact
                  to="/services"
                  activeclassname="active"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  Services
                </NavLink>
                <NavLink
                  exact
                  to="/projects"
                  activeclassname="active"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  Projects
                </NavLink>
                <NavLink
                  exact
                  to="contact"
                  activeclassname="active"
                  className=" text-primary-letter-color-secondary px-3 py-2 text-sm font-medium hover:text-primary-letter-color-main">
                  Contact
                </NavLink>
                <NavLink
                  exact
                  to="contact"
                  activeclassname="active"
                  className="bg-primary-button-color text-white rounded-sm px-3 py-2 text-xs font-bold hover:shadow-xl shadow-slate-700 max-md:hidden">
                  Need a project?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
