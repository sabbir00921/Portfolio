import React from "react";
import avatar from "../../assets/homeimg.png";
import resume from "../../assets/resume/Sabbir-dev-resume.pdf";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className="text-white flex flex-col-reverse sm:flex-row w-full justify-between items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="flex flex-col gap-2 text-3xl md:text-6xl font-bold tracking-tight">
          Hi, I'm Sabbir
          <span
            className="
        text-xl md:text-3xl font-extrabold
        bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500
        bg-clip-text text-transparent
        tracking-wide
      "
          >
            <Typewriter
              options={{
                strings: ["MERN Stack Developer"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 3000,
              }}
            />
          </span>
        </h1>

        <p className="text-sm md:text-xl leading-tight tracking-tighter my-5">
          MERN developer skilled in MongoDB, Express.js, React.js, Node.js,
          crafting scalable apps with responsive UI using HTML5, CSS3, Tailwind,
          Bootstrap, ES6+.
        </p>

        <div className="flex gap-4 md:mt-10">
          <a
            href="#Contact"
            className="text-white py-2 text-sm md:text-lg md:px-5 px-2 hover:scale-105 duration-300 font-semibold rounded-3xl bg-[#465697] cursor-pointer"
          >
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
      <div className="w-4/5 lg:w-4/10 xl:w-3/10 md:w-2/5 relative">
        <img
          className="w-full rounded-lg object-cover"
          src={avatar}
          alt=""
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
