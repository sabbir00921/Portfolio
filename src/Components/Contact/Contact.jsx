import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col items-start gap-3 sm:gap-0 justify-around bg-[#465697] sm:flex-row text-white p-10 md:p-12 sm:items-center"
    >
      <div>
        <h1 className="text-2xl md:text-4xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal underline underline-offset-8 sm:no-underline">
          Feel Free to reach out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex items-center gap-2 cursor-pointer my-1.5">
          <MdOutlineEmail size={20} />
          <a href="mailto:sabbir00921@gmail.com" className="hover:underline">
            sabbir00921@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2 cursor-pointer my-1.5">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/sabbir142536"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/sabbir142536
          </a>
        </li>
        <li className="flex items-center gap-2 cursor-pointer my-1.5">
          <FaGithub />
          <a
            href="https://github.com/sabbir00921"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/sabbir00921
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
