import React from "react";
import { IoArrowForward } from "react-icons/io5";
import aboutme from "../../assets/aboutme.png";

const About = () => {
  return (
    <div
      id="#About"
      className=" text-white md:flex md:flex-wrap md:justify-center bg-black/30 shadow-xl mx-0 md:mx-10 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex py-8 md:py-6 flex-wrap flex-col md:flex-row md:items-center gap-8">
          <img className="md:h-70" src={aboutme} alt="About iamge" />
          <ul>
            {/* 1st div  */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Full Stack MERN Developer
                </h1>
                <p className="text-sm md:text-md">
                  Experienced in building and deploying full-stack web
                  applications using the MERN stack (MongoDB, Express.js,
                  React.js, Node.js). Capable of developing scalable RESTful
                  APIs, managing state with Redux Toolkit, integrating frontend
                  and backend seamlessly, and handling authentication &
                  authorization with JWT and Firebase. Delivered multiple
                  real-world projects with responsive UI and optimized
                  performance.
                </p>
              </span>
            </div>

            {/* Frontend Developer */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md">
                  Proficient in crafting dynamic and responsive user interfaces
                  using React.js, Tailwind CSS, Bootstrap, and modern JavaScript
                  (ES6+). Skilled in component-based architecture, reusable UI
                  patterns, form validation, API integration, and cross-browser
                  compatibility. Ensured pixel-perfect design implementation
                  while maintaining accessibility and performance best
                  practices.
                </p>
              </span>
            </div>

            {/* Backend Developer */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md">
                  Hands-on experience in developing secure and scalable backend
                  systems using Node.js and Express.js. Designed and implemented
                  RESTful APIs, handled database operations with MongoDB &
                  Mongoose, managed server-side logic, and implemented
                  authentication using JWT. Focused on writing clean, modular
                  code and following MVC architecture for maintainability and
                  scalability.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
