import React from "react";
import { Footer, Navbar } from "../components";
import Photo8 from "../assets/Photo8.png";
import Photo9 from "../assets/Photo 9.png";
import Photo10 from "../assets/Photo 10.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Services = () => {
  return (
    <div className="justify-center ">
      <div className="bg-projects h-screen bg-no-repeat">
        <div className="py-10 items-center flex justify-center">
          <Navbar />
        </div>
        <header className="justify-center items-center text-center pt-32 ">
          <p className="text-cyan-400 text-base tracking-tight">Services</p>
          <h1 className="text-3xl font-bold text-primary-letter-color-main">
            Owner and investor with a <br />
            reputation
          </h1>
          <div className="flex text-center items-center justify-center w-400 h-220 m-auto p-5 max-md:w-80 max-md:h-125">
            <p className=" text-primary-letter-color-secondary text-sm font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            </p>
          </div>
        </header>
      </div>
      <section className="flex space-x-20 py-28 max-md:space-x-0 max-md:flex-col max-md:text-center">
        <div>
          <img src={Photo8} alt="Photo_Header" className="p-12" />
        </div>
        <div className="max-md:flex-col">
          <p className="text-cyan-400 text-base tracking-tight">Services</p>
          <h1 className="text-3xl font-bold text-primary-letter-color-main">
            Owner and investor with a <br />
            reputation
          </h1>
          <p className="text-justify text-primary-letter-color-secondary text-sm font-medium w-400 h-220  max-md:w-96 max-md:h-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
          <div className="flex justify-between m-5">
            <div className="w-40 h-20 bg-primary-gradient-1 text-justify">
              <h1 className="text-primary-letter-color-main text-sm font-bold pl-3">
                Name
              </h1>
              <p className="text-primary-letter-color-secondary text-sm text font-light pl-3">
                Statics
              </p>
            </div>
            <div className="w-40 h-20 bg-primary-gradient-1">
              <h1 className="text-primary-letter-color-main text-sm font-bold pl-3">
                Name
              </h1>
              <p className="text-primary-letter-color-secondary text-sm font-light pl-3">
                Statics
              </p>
            </div>
          </div>
          <div className="inline-flex justify-around items-center pl-64 cursor-pointer">
            <h1 className="text-primary-letter-color-main text-sm font-bold pl-3">
              See More
            </h1>
            <AiOutlineArrowRight
              className="fill-primary-letter-color-main m-4"
              strokeWidth={5}
            />
          </div>
        </div>
      </section>
      <section className="flex space-x-20 py-28 max-md:space-x-0 max-md:flex-col max-md:text-center">
        <div className="max-md:flex-col">
          <p className="text-cyan-400 text-base tracking-tight">Services</p>
          <h1 className="text-3xl font-bold text-primary-letter-color-main">
            Owner and investor with a <br />
            reputation
          </h1>
          <p className="text-justify text-primary-letter-color-secondary text-sm font-medium w-400 h-220 m-auto max-md:w-96 max-md:h-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris.
          </p>
          <div className="flex justify-between m-5">
            <div className="w-40 h-28 bg-primary-gradient-1 shadow-md shadow-primary-gradient-1">
              <p className="text-primary-letter-color-secondary text-sm font-light text-center p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="w-40 h-28 bg-primary-gradient-1 shadow-md shadow-primary-gradient-1">
              <p className="text-primary-letter-color-secondary text-sm font-light text-center p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="inline-flex justify-around items-center pl-64 cursor-pointer">
            <h1 className="text-primary-letter-color-main text-sm font-bold pl-3">
              See More
            </h1>
            <AiOutlineArrowRight
              className="fill-primary-letter-color-main m-4"
              strokeWidth={5}
            />
          </div>
        </div>
        <div>
          <img src={Photo9} alt="Photo_Header" className="p-12" />
        </div>
      </section>
      <section className="flex space-x-20 py-28 max-md:space-x-0 max-md:flex-col max-md:text-center">
        <div>
          <img src={Photo10} alt="Photo_Header" className="p-12" />
        </div>
        <div className="m-auto">
          <p className="text-cyan-400 text-base tracking-tight">Services</p>
          <h1 className="text-3xl font-bold text-primary-letter-color-main">
            Owner and investor with a <br />
            reputation
          </h1>
          <p className="text-justify text-primary-letter-color-secondary text-sm font-medium w-400 h-220 m-auto max-md:w-96 max-md:h-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris.
          </p>
          <div className="flex justify-between m-5">
            <div className="w-40 h-20 bg-primary-gradient-1 text-justify">
              <p className="text-primary-letter-color-secondary text-sm font-medium py-3 text-center">
                Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="w-40 h-20 bg-primary-gradient-1">
              <p className="text-primary-letter-color-secondary text-sm font-medium py-3 text-center">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <div className="inline-flex justify-around items-center pl-64 cursor-pointer">
            <h1 className="text-primary-letter-color-main text-sm font-bold pl-3">
              See More
            </h1>
            <AiOutlineArrowRight
              className="fill-primary-letter-color-main m-4"
              strokeWidth={5}
            />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Services;
