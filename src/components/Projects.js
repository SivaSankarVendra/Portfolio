import React from "react";
import Inotebook from "../assets/images/inotebook.png";
import Gofood from "../assets/images/gofood.png";
import Calculator from "../assets/images/calculator.png";

const Projects = () => {
  const handleLink = (url) => {
    window.open(url, "_blank");
  };

  const projects = [
    {
      id: 1,
      src: Inotebook,
      demoLink: 'https://inotebook26.netlify.app/',
      gitLink: 'https://github.com/SivaSankarVendra/Inotebook'
    },
    {
      id: 2,
      src: Gofood,
      demoLink: 'https://gofood26.netlify.app/',
      gitLink: 'https://github.com/SivaSankarVendra/Gofood'
    },
    {
      id: 3,
      src: Calculator,
      demoLink: 'https://calculatorproject26.netlify.app/',
      gitLink: 'https://github.com/SivaSankarVendra/Calculator'
    },
    {
      id: 4,
      src: Titanic Survival Prediction,
      demoLink: 'https://github.com/SivaSankarVendra/TitanicMLModel/tree/main',
      gitLink: 'https://github.com/SivaSankarVendra/TitanicMLModel/tree/main'
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demoLink, gitLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-md">
              <img
                src={src}
                alt="projectImg"
                className="rounded-md duration-200 hover:scale-105 h-44 w-full"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleLink(gitLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
                <button
                  onClick={() => handleLink(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
