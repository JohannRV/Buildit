import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
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
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 1{" "}
          </a>
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 2{" "}
          </a>
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 3{" "}
          </a>
          <a href="/" className=" text-white block py-2 font-light text-sm">
            {" "}
            Service 4{" "}
          </a>
        </div>
        <div>
          <a
            href="/about"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            About Us{" "}
          </a>
          <a
            href="/services"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Services{" "}
          </a>
          <a
            href="/projects"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Projects{" "}
          </a>
          <a
            href="/contact"
            className=" text-white block py-2 font-light text-sm">
            {" "}
            Contact{" "}
          </a>
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
