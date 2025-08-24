import React from "react";
import { IoArrowForward } from "react-icons/io5";
import aboutme from "../../assets/aboutme.png";

const About = () => {
  return (
    <div
      id="#About"
      className=" text-white md:flex md:flex-wrap md:justify-center bg-black/30 shadow-xl mx-0 md:mx-20 rounded-lg p-12"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium ab enim excepturi tempore. Repellat, iure cumque
                  alias est quidem eaque aspernatur architecto voluptatum
                  deserunt delectus fugiat pariatur illo dolorum enim explicabo
                  ducimus quas temporibus ipsum quae doloribus minima id
                  deleniti.
                </p>
              </span>
            </div>
            {/* 1st div  */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium ab enim excepturi tempore. Repellat, iure cumque
                  alias est quidem eaque aspernatur architecto voluptatum
                  deserunt delectus fugiat pariatur illo dolorum enim explicabo
                  ducimus quas temporibus ipsum quae doloribus minima id
                  deleniti.
                </p>
              </span>
            </div>
            {/* 1st div  */}
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium ab enim excepturi tempore. Repellat, iure cumque
                  alias est quidem eaque aspernatur architecto voluptatum
                  deserunt delectus fugiat pariatur illo dolorum enim explicabo
                  ducimus quas temporibus ipsum quae doloribus minima id
                  deleniti.
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
