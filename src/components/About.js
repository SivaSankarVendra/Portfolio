import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">About</h2>
        </div>
        <p className="text-xl mt-20">
          I am Siva Sankar Vendra, a Full Stack Developer with a strong academic
          background. I graduated from the National Institute of Technology,
          Andhra Pradesh, with a CGPA of 7.24 in Civil Engineering. I completed
          my secondary education at Sri Chaitanya, Rajamandry, where I achieved
          a CGPA of 9.45, and my primary education at Sri Chaitanya, Penugonda,
          with a CGPA of 9.7.
        </p>
        <br />
        <p className="text-xl">
          In addition to my academic achievements, I have developed extensive
          skills in Full Stack Development, particularly with the MERN stack
          (MongoDB, Express.js, React, and Node.js). I have successfully
          completed numerous projects, demonstrating my ability to create
          dynamic and responsive web applications. My expertise in both
          front-end and back-end technologies enables me to build seamless and
          efficient user experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
