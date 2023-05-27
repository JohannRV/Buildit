import React, { useState } from "react";

const FormContact = () => {
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
    <div className="bg-gradient-to-t from-primary-gradient-1 to-primary-gradient-2 w-400 h-50 p-5 shadow-xl shadow-primary-gradient-1 max-w-md mx-auto">
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
  );
};

export default FormContact;
