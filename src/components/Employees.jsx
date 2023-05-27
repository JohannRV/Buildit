import React from "react";
import employeer1 from "../assets/employeer1.png";
import employeer2 from "../assets/employeer2.png";
import employeer3 from "../assets/employeer3.png";
import employeer4 from "../assets/employeer4.png";
import employeer5 from "../assets/employeer5.png";
import employeer6 from "../assets/employeer6.png";
import employeer7 from "../assets/employeer7.png";
import employeer8 from "../assets/employeer8.png";
import employeer9 from "../assets/employeer9.png";
const Employees = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-16 bg-main-bg">
      <p className="text-cyan-400 text-sm">Our Team</p>
      <h1 className="text-primary-letter-color-main font-bold text-2xl p-5">
        Let’s meet
      </h1>
      <div className="grid grid-cols-3 gap-10 py-10">
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer1}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer2}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer3}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer4}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer5}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer6}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer7}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer8}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-gradient-1 to-primary-gradient-2 pb-6 shadow-lg shadow-primary-gradient-1">
          <img
            src={employeer9}
            alt="Employeer"
            className="w-60 h-52 max-md:h-32"
          />
          <div className="text-justify p-3">
            <p className="text-base font-semibold text-primary-letter-color-main leading-10">
              Name Surname
            </p>
            <p className="text-base text-primary-letter-color-secondary leading-5">
              Worker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
