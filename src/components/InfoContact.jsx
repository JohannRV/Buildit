import React, { useState } from "react";
import { BsTelephoneOutbound, BsMailbox } from "react-icons/bs";
import { GrMailOption } from "react-icons/gr";
const InfoContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    console.log(formData);
  };
  return (
    <div className="justify-center items-center h-screen ">
      <div className="grid grid-cols-2 gap-5 justify-center items-center max-md:grid-cols-1 ">
        <div className="flex flex-col p-6">
          <p className="text-cyan-400 text-xs p-3">Contact</p>
          <h1 className="text-primary-letter-color-main font-semibold text-2xl mb-12">
            Get In Touch
          </h1>
          <div className="inline-flex text-center items-center py-2 px-2">
            <div className="flex bg-primary-gradient-1 h-12 w-12 items-center justify-center rounded-md">
              <BsTelephoneOutbound
                className="fill-primary-letter-color-main"
                size={20}
                strokeWidth={0.3}
              />
            </div>
            <p className="p-2 text-sm text-primary-letter-color-main font-semibold">
              Tel:
            </p>
            <h1 className="text-primary-letter-color-main text-sm font-semibold">
              708-790-0000
            </h1>
          </div>
          <div className="inline-flex text-center items-center py-2 px-2">
            <div className="flex bg-primary-gradient-1 h-12 w-12 items-center justify-center rounded-md">
              <GrMailOption
                className="fill-primary-letter-color-main"
                size={20}
                strokeWidth={0}
              />
            </div>
            <p className="p-2 text-sm text-primary-letter-color-main font-semibold">
              Email:
            </p>
            <h1 className="text-primary-letter-color-main text-sm font-semibold">
              sales@buildit.site
            </h1>
          </div>
          <div className="inline-flex text-center items-center py-2 px-2">
            <div className="flex bg-primary-gradient-1 h-12 w-12 items-center justify-center rounded-md">
              <BsMailbox
                className="fill-primary-letter-color-main"
                size={20}
                strokeWidth={0.3}
              />
            </div>
            <p className=" p-2 text-sm text-primary-letter-color-main font-semibold">
              Office:
            </p>
            <h1 className="text-primary-letter-color-main text-sm font-semibold">
              60 Manor Station St.Fairport, NY 14450
            </h1>
          </div>
        </div>
        <section className="p-10">
          <div className="bg-gradient-to-t from-primary-gradient-1 to-primary-gradient-2 p-5 shadow-xl shadow-primary-gradient-1 max-w-md mx-auto">
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="name"
                      className="block text-primary-letter-color-main font-normal mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-inherit border-2 border-solid border-primary-letter-color-main rounded w-full py-2 px-3 text-primary-letter-color-main leading-tight focus outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="w-1/2 mr-2">
                    <label
                      htmlFor="email"
                      className="block text-primary-letter-color-main font-normal mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className=" bg-inherit border-2 border-solid border-primary-letter-color-main rounded w-full py-2 px-3 text-primary-letter-color-main leading-tight focus outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-primary-letter-color-main font-normal mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className=" bg-inherit border-2 border-solid border-primary-letter-color-main rounded w-full py-2 px-3 text-primary-letter-color-main focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-primary-letter-color-main font-normal mb-2">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none bg-inherit border-2 border-solid border-primary-letter-color-main rounded w-full py-4 px-3  text-primary-letter-color-main focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-primary-button-color text-white font-bold py-2 px-4 w-96 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoContact;
