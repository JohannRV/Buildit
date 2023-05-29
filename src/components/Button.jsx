import React from "react";
import { NavLink } from "react-router-dom";

const Button = () => {
  return (
    <NavLink
      exact
      to="/projects"
      activeclassname="active"
      className="bg-primary-button-color text-white rounded-sm px-3 py-2 text-xs font-bold hover:shadow-xl shadow-slate-700 ">
      Need a project?
    </NavLink>
  );
};

export default Button;
