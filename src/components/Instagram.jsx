import React from "react";
import Photo1 from "../assets/Photo 1.jpg";
import Photo2 from "../assets/Photo 2.png";
import Photo3 from "../assets/Photo 3.png";
import Photo4 from "../assets/Photo 4.png";
import Photo5 from "../assets/Photo 5.png";
import Photo6 from "../assets/Photo 6.png";
const Instagram = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <p className="text-cyan-400 text-sm">Socials</p>
      <h1 className="text-primary-letter-color-main font-bold text-2xl p-5">
        On Instagram
      </h1>
      <div className="grid grid-cols-3 gap-4 max-md:p-4">
        <img
          src={Photo1}
          alt="Photo1"
          className="w-80 h-60 max-md:w-72 max-md:h-32"
        />
        <img
          src={Photo2}
          alt="Photo1"
          className="w-80 h-60 max-md:w-72 max-md:h-32"
        />
        <img
          src={Photo3}
          alt="Photo1"
          className="w-80 h-60 max-md:w-72 max-md:h-32"
        />
        <img
          src={Photo4}
          alt="Photo1"
          className="w-80 h-60 max-md:w-72 max-md:h-32"
        />
        <img
          src={Photo5}
          alt="Photo1"
          className="w-80 h-60 max-md:w-72 max-md:h-32"
        />
        <img
          src={Photo6}
          alt="Photo1"
          className="w-80 h-60 max-md:w-72 max-md:h-32"
        />
      </div>
    </div>
  );
};

export default Instagram;
