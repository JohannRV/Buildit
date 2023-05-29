import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Navbar } from "./components";

const app = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/projects" exact element={<Projects />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/services" exact element={<Services />} />
    </Routes>
  );
};

export default app;
