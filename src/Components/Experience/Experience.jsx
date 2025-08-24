import React from "react";
import { DiGit } from "react-icons/di";
import {
  FaCss3,
  FaFigma,
  FaGoogle,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiRadstudio } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="#8DE1FF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61dafb" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaNodeJs color="#649A5F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <IoLogoFirebase  color="#FFC400" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiGit color="#FF4438" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <PiGithubLogoFill color="#FFFFFF" size={50} />
          </span>
        </div>
        {/* Carrier */}
        <div className="flex flex-wrap md:w-2/5 gap-3 md:p-12 py-10">
          <div className="flex gap-10 bg-slate-950/40 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sep 2023 - present
              </p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Work as software Developer</li>
                <li>Sinior SDE Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950/40 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sep 2023 - present
              </p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Work as software Developer</li>
                <li>Sinior SDE Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950/40 mt-4 rounded-lg p-4 items-center">
            <FaGoogle color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Software Engineer, Google</h2>
              <p className="text-sm leading-tight font-thin">
                Sep 2023 - present
              </p>
              <ul className="text-sm p-2 list-disc list-inside">
                <li>Work as software Developer</li>
                <li>Sinior SDE Developer</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
