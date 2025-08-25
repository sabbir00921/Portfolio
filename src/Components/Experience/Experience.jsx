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
import { PiGithubLogoFill } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Experience = () => {
  const tools = [
    { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML5" },
    { icon: <FaCss3 color="#1572b6" size={50} />, name: "CSS3" },
    { icon: <RiTailwindCssFill color="#8DE1FF" size={50} />, name: "Tailwind" },
    { icon: <FaReact color="#61dafb" size={50} />, name: "React.js" },
    { icon: <FaFigma color="#F24E1E" size={50} />, name: "Figma" },
    { icon: <FaJs color="#F7DF1E" size={50} />, name: "JavaScript" },
    { icon: <FaNodeJs color="#649A5F" size={50} />, name: "Node.js" },
    { icon: <IoLogoFirebase color="#FFC400" size={50} />, name: "Firebase" },
    { icon: <SiMongodb color="#47A248" size={50} />, name: "MongoDB" },
    { icon: <DiGit color="#FF4438" size={50} />, name: "Git" },
    { icon: <PiGithubLogoFill color="#FFFFFF" size={50} />, name: "GitHub" },
  ];

  const companies = [
    {
      role: "Frontend Developer, DemoCorp",
      period: "Jan 2025 - Present",
      tasks: [
        "Built UI components",
        "Responsive layouts",
        "Collaborated with design team",
      ],
      icon: <FaReact color="#61dafb" size={50} />,
    },
    {
      role: "Backend Developer, DevStudio",
      period: "Mar 2024 - Dec 2024",
      tasks: ["Created APIs", "Managed mock DB", "Implemented auth"],
      icon: <FaNodeJs color="#649A5F" size={50} />,
    },
    {
      role: "Full Stack Developer, CodeLab",
      period: "Jun 2023 - Feb 2024",
      tasks: [
        "Integrated frontend & backend",
        "Optimized performance",
        "Used Redux state",
      ],
      icon: <FaGoogle color="#4285F4" size={50} />,
    },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-xl md:text-4xl text-white font-bold mb-10">
        Experience & Tools
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mx-4 md:mx-10">
        {/* Tools Section */}
        <div className="md:w-2/5 flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl text-white font-semibold mb-4">
            Tools
          </h2>
          <div className="flex flex-wrap gap-6">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl"
                title={tool.name}
              >
                {tool.icon}
              </span>
            ))}
          </div>
        </div>

        {/* Company / Experience Section */}
        <div className="md:w-3/5 flex flex-col gap-6 lg:px-10">
          <h2 className="text-xl md:text-2xl text-white font-semibold mb-4">
            Company / Experience
          </h2>

          {/* Job Cards Container */}
          <div className="flex flex-wrap gap-6">
            {companies.map((job, index) => (
              <div
                key={index}
                className="flex items-center gap-4 md:gap-6 bg-slate-950/40 p-4 md:p-6 rounded-xl w-full sm:w-[320px] md:w-[420px] hover:shadow-lg transition-shadow duration-300"
              >
                {/* Use company icon */}
                <span className="flex-shrink-0">{job.icon}</span>

                <div className="text-white">
                  <h3 className="text-lg md:text-xl font-semibold leading-tight">
                    {job.role}
                  </h3>
                  <p className="text-sm font-thin leading-tight">
                    {job.period}
                  </p>
                  <ul className="text-sm list-disc list-inside mt-2">
                    {job.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
