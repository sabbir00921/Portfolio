import React from "react";

const ProjectCard = ({ image, title, main,link }) => {
  return (
    <div className="p-3 sm:p-6 flex flex-col gap-4 sm:w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="rounded-2xl h-[50%] sm:h-full object-cover"
        src={image}
        alt=""
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-base leading-tight break-words">
        {main}
      </p>
      <div className=" p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:bg-[#465697]/80  duration-200 hover:scale-105 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
          Demo
        </button>
        <a href={link} target="_blank">
          <button className="md:mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:bg-[#465697]/80 duration-200 hover:scale-110 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
