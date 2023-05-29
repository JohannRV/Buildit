import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-details-bg">
      <div className="container mx-auto grid grid-cols-4 gap-4 py-20 px-7">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-white max-md:text-lg">
            Buildit
          </h2>
          <p className="text-white block py-2 font-light text-sm">
            Development company, 2022
          </p>
          <div className="justify-between inline-flex">
            <a href="https://www.facebook.com/">
              <FaFacebookSquare className="fill-white m-2" size={32} />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram
                className="fill-white m-2"
                size={32}
                href="https://www.facebook.com/"
              />
            </a>
          </div>
        </div>
        <div>
          <NavLink
            exact
            to="/services"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 1{" "}
          </NavLink>
          <NavLink
            exact
            to="/services"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 2{" "}
          </NavLink>
          <NavLink
            exact
            to="/services"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 3{" "}
          </NavLink>
          <NavLink
            exact
            to="/services"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 4{" "}
          </NavLink>
        </div>
        <div>
          <NavLink
            exact
            to="/about"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            About Us{" "}
          </NavLink>
          <NavLink
            exact
            to="/services"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Services{" "}
          </NavLink>
          <NavLink
            exact
            to="/projects"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Projects{" "}
          </NavLink>
          <NavLink
            exact
            to="/contact"
            activeclassname="active"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Contact{" "}
          </NavLink>
        </div>
        <div>
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            Get in touch{" "}
          </a>
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            60 Manor Station St. Fairport, NY 14450{" "}
          </a>
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            708-790-0000{" "}
          </a>
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            sales@
            <br />
            buildit.site{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
