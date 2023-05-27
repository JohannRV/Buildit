import React from "react";
import { Navbar, Footer, ProjectsViews } from "../components";

const Projects = () => {
  return (
    <div>
      <div className="bg-projects h-screen bg-no-repeat ">
        <div className="py-10 items-center flex justify-center">
          <Navbar />
        </div>
        <header className="justify-center items-center text-center pt-32">
          <p className="text-cyan-400 text-base tracking-tight">Projects</p>
          <h1 className="text-3xl font-bold text-primary-letter-color-main">
            Owner and investor with a <br />
            reputation
          </h1>
          <div className="flex items-center justify-center m-auto">
            <p className=" text-primary-letter-color-secondary text-sm font-medium  w-400 h-220">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit
              sem, vestibulum sed leo eu, malesuada pharetra mauris. Integer
              rhoncus, eros vel euismod tempor, ipsum magna tristique nisi, quis
              ullamcorper enim magna eu orci. Sed semper ex quis semper aliquet.
            </p>
          </div>
        </header>
        <section className="pt-52 ">
          <ProjectsViews />
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Projects;
