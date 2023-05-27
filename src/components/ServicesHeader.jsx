import React from "react";
import { BsVectorPen, BsCode, BsMegaphone } from "react-icons/bs";

const ServicesHeader = () => {
  return (
    <div className="bg-secondary-bg">
      <div className=" text-center justify-center items-center pt-28">
        <h1 className="pb-16 text-3xl font-bold text-primary-letter-color-main">
          Innovate Execution
        </h1>
      </div>
      <div className="flex items-center justify-center text-center">
        <div className="w-1/3 p-4">
          <div className="flex justify-center mb-4">
            <BsVectorPen
              className="rounded-md bg-primary-letter-color-secondary p-2 text-primary-gradient-2 shadow-xl shadow-primary-gradient-1"
              size={50}
              strokeWidth={0.1}
            />
          </div>
          <h1 className="py-2 text-primary-letter-color-main font-bold text-xl">
            Featured Listing
          </h1>
          <p className="text-primary-letter-color-secondary text-sm font-light">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <div className="flex justify-center mb-4">
            <BsCode
              className="rounded-md bg-primary-letter-color-secondary p-2 text-primary-gradient-2 shadow-xl shadow-primary-gradient-1"
              size={50}
              strokeWidth={0.1}
            />
          </div>
          <h1 className="py-2 text-primary-letter-color-main font-bold text-xl">
            Available Properties
          </h1>
          <p className="text-primary-letter-color-secondary text-sm font-light ">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-1/3 p-4">
          <div className="flex justify-center mb-4">
            <BsMegaphone
              className="rounded-md bg-primary-letter-color-secondary p-2 text-primary-gradient-2 shadow-xl shadow-primary-gradient-1"
              size={50}
              strokeWidth={0.1}
            />
          </div>
          <h1 className="py-2 text-primary-letter-color-main font-bold text-xl">
            In the News
          </h1>
          <p className="text-primary-letter-color-secondary text-sm font-light ">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
