import React from "react";
import { Employees, Footer, Navbar } from "../components";
import headerAbout from "../assets/headerAbout.png";
import { BsHouse } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import Partners from "../assets/Partners.png";
const About = () => {
  return (
    <>
      <div className="justify-center bg-gradient-to-t from-primary-gradient-1 to-primary-gradient-2 ">
        <div className="py-10 items-center flex justify-center">
          <Navbar />
        </div>
        <header className="flex text-center justify-center items-center max-md:flex-col">
          <div>
            <img
              src={headerAbout}
              alt="Header about"
              className="w-92 h-550 mt-5"
            />
          </div>
          <div className="m-auto">
            <p className="text-cyan-400 text-base tracking-tight">About</p>
            <h1 className="text-3xl font-bold text-primary-letter-color-main max-md:text-xl">
              Owner and investor with a <br />
              reputation
            </h1>
            <p className="text-justify text-primary-letter-color-secondary text-sm font-medium w-400 h-220 max-md:text-center max-md:w-96 max-md:h-125">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
          </div>
        </header>
        <section className="justify-center items-center bg-secondary-bg py-28 h-screen ">
          <div className="text-center">
            <p className="text-cyan-400 text-base tracking-tight">Statistics</p>
            <h1 className="text-3xl font-bold text-primary-letter-color-main">
              Development in numbers
            </h1>
          </div>
          <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 shadow-lg shadow-primary-gradient-1 items-center h-125 w-800 mx-auto my-20 flex justify-around text-center m-auto max-md:w-400 max-md:h-125">
            <div className="inline-flex justify-between items-center max-md:flex-col">
              <h1 className="text-xl text-primary-letter-color-main font-bold mx-4">
                &gt; Number
              </h1>
              <FaMapMarkedAlt
                className="rounded-md bg-primary-letter-color-secondary p-2 text-primary-gradient-2 shadow-xl shadow-primary-gradient-1"
                size={50}
                strokeWidth={0.1}
              />
            </div>
            <div className="inline-flex justify-between items-center max-md:flex-col">
              <h1 className="text-xl text-primary-letter-color-main font-bold mx-4">
                &gt; Number
              </h1>
              <BsHouse
                className="rounded-md bg-primary-letter-color-secondary p-2 text-primary-gradient-2 shadow-xl shadow-primary-gradient-1"
                size={50}
                strokeWidth={0.1}
              />
            </div>
            <div className="inline-flex justify-between items-center max-md:flex-col">
              <h1 className="text-xl text-primary-letter-color-main font-bold mx-4">
                &gt; Number
              </h1>
              <FaHandsHelping
                className="rounded-md bg-primary-letter-color-secondary p-2 text-primary-gradient-2 shadow-xl shadow-primary-gradient-1"
                size={50}
                strokeWidth={0.1}
              />
            </div>
          </div>
          <div className="justify-center items-center flex">
            <img src={Partners} alt="Partners" />
          </div>
        </section>
        <section className="bg-main-bg max-md:px-5">
          <Employees />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default About;
