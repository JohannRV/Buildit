import React from "react";
import {
  Footer,
  InfoContact,
  Instagram,
  Navbar,
  ServicesHeader,
} from "../components";
import Photos from "../assets/Photos.png";
import Photo7 from "../assets/Photo 7.png";

const Home = () => {
  return (
    <div className="justify-center bg-gradient-to-tl from-primary-gradient-1 to-primary-gradient-2">
      <div className="py-10 items-center flex justify-center">
        <Navbar />
      </div>
      <div className="flex space-x-20 text-center justify-center items-center max-md:flex-col">
        <div className="mb-32">
          <h1 className="text-primary-letter-color-main font-bold text-sm md:text-6xl">
            Development <br /> company
          </h1>
          <p className="p-2 text-primary-letter-color-secondary font-light text-lg">
            Forward-thinking real estate developer, owner <br /> and investor
            with a reputation
          </p>

          <img
            src={Photos}
            alt="Photos-hero"
            className="w-96 h-400 max-2xl:hidden max-md:flex"
          />

          <div className="mt-48 max-md:inline-flex max-md:justify-around">
            <a
              href="/services"
              className="bg-primary-button-color text-white rounded-md p-2 mr-3 text-center font-normal text-sm hover:shadow-lg">
              Services
            </a>
            <a
              href="/about"
              className="bg-primary-gradient-1 text-primary-letter-color-main rounded-md px-11 p-2 mr-3 text-center hover:shadow-lg">
              About Company
            </a>
          </div>
        </div>
        <div>
          <img
            src={Photos}
            alt="Photos-hero"
            className="w-96 h-500 max-md:hidden"
          />
        </div>
      </div>

      <div className="py-32 bg-secondary-bg ">
        <ServicesHeader />
      </div>
      <div className="bg-main-bg ">
        <div className="grid grid-cols-2 gap-4 text-justify justify-center items-center max-md:grid-cols-1 max-md:text-center max-md:p-5 ">
          <div>
            <img src={Photo7} alt="Photos-hero" className="p-12" />
          </div>
          <div className="m-auto">
            <p className="text-cyan-400 text-xs pb-12">About Us</p>
            <h1 className="text-3xl font-bold text-primary-letter-color-main">
              Owner and investor with a reputation
            </h1>
            <p className="text-primary-letter-color-secondary text-sm font-medium py-5 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
              Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
              viverra vel ultrices in, congue sed ex.
            </p>
            <div>
              <a
                href="/services"
                className="bg-primary-button-color text-white rounded-md py-2 px-12 font-normal text-sm hover:shadow-lg max-md:p-2">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-justify justify-center items-center max-md:grid-cols-1 max-md:text-center p-5">
        <div className="m-auto">
          <h1 className="text-3xl font-bold text-primary-letter-color-main">
            Featured Listing
          </h1>
          <p className="text-primary-letter-color-secondary text-sm font-medium py-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
            sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
            rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
            ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            Cras hendrerit molestie sapien sed fermentum. Mauris dui tortor,
            viverra vel ultrices in, congue sed ex.
          </p>
          <div>
            <a
              href="/services"
              className="bg-primary-button-color text-white rounded-md py-2 px-12 text-center font-normal text-sm hover:shadow-lg">
              Explore
            </a>
          </div>
        </div>
        <div>
          <img src={Photos} alt="Photos-hero" className="p-5" />
        </div>
      </div>
      <div className="py-32 bg-main-bg">
        <Instagram />
      </div>
      <div>
        <InfoContact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
