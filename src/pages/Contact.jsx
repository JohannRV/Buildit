import React from "react";
import { Footer, InfoContact, Navbar } from "../components";

const Contact = () => {
  return (
    <div className="justify-center">
      <div className="py-10 items-center flex justify-center">
        <Navbar />
      </div>
      <section>
        <InfoContact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
