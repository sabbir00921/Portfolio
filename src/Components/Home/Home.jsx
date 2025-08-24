import React from "react";
import avatar from "../../assets/homeimg.png";
import resume from "../../assets/resume/Resume.pdf";
const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse sm:flex-row w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex tracking-tight">
          Hello I'm Sabbir
        </h1>
        <p className=" text-sm md:text-2xl leading-tight tracking-tighter my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem, in sint aperiam sed id iusto temporibus blanditiis
          debitis earum alias.
        </p>
        <div className="flex gap-4 md:mt-10">
          <a href="#Contact" className="text-white py-2 text-sm md:text-lg md:px-5 px-2 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697] cursor-pointer">
            Contact Me
          </a>

          <a
            href={resume}
            download
            className="text-white py-2 text-sm md:text-lg md:px-5 px-2 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697] cursor-pointer inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="w-4/5 md:w-2/5">
        <img className="" src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Home;
