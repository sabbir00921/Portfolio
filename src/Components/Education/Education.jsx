import React from "react";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institute: "Daffodil International University",
      period: "2025",
      details: [],
      icon: <FaUserGraduate color="#FFD700" size={40} />,
    },
    {
      degree: "Diploma in Computer",
      institute: "Sylhet Polytechnic Institute",
      period: "2020",
      details: [],
      icon: <FaUserGraduate color="#FFD700" size={40} />,
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institute: "DKNA High School",
      period: "2014",
      details: [],
      icon: <FaUserGraduate color="#FFD700" size={40} />,
    },
  ];

  return (
    <div id="Education" className="p-10 md:p-24">
      <h1 className="text-xl md:text-4xl text-white font-bold mb-10">
        Education
      </h1>

      <div className="flex flex-wrap justify-start gap-6 mx-4 md:mx-10">
        {education.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 md:gap-6 bg-slate-950/40 p-4 md:p-6 rounded-xl w-full sm:w-[320px] md:w-[420px] hover:shadow-lg transition-shadow duration-300"
          >
            {/* Education Icon */}
            <span className="flex-shrink-0">{edu.icon}</span>

            <div className="text-white">
              <h3 className="text-lg md:text-xl font-semibold leading-tight">
                {edu.degree}
              </h3>
              <p className="text-sm font-thin leading-tight">{edu.institute}</p>
              <p className="text-sm font-thin text-gray-400">{edu.period}</p>
              <ul className="text-xs md:text-sm list-disc list-inside mt-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
