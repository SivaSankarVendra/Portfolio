import React, { useState } from "react";

const Contact = () => {
  const [mess, setMess] = useState({ userName: "", email: "", message: "" });
  const host = `https://portfolio-2den.onrender.com`;
  const addMessage = async (userName, email, message) => {
    const response = await fetch(`${host}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, message }),
    });
    console.log(response);
  };
  const handleMessage = (e) => {
    e.preventDefault();
    addMessage(mess.userName,mess.email,mess.message);
    setMess({userName: "", email: "", message: "" })
  };
  const handleChange = (e) => {
    setMess({ ...mess, [e.target.name]: e.target.value });
  };
  return (
    <div
      name="contact me"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center mx-auto h-full max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Contact me
          </p>
          <p className="py-6">Submit the form below to connect</p>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleMessage} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="userName"
              placeholder="Enter your name"
              value={mess.userName}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={mess.email}
              onChange={handleChange}
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your message"
              value={mess.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
