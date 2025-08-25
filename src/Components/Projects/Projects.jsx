import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage from "../../assets/projects1.webp"

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h2 className=" text-2xl md:text-4xl font-bold">Projects</h2>
      <div className="py-12 px-4 sm:px-8 flex flex-wrap gap-6 justify-center ">
        <ProjectCard image={projectImage} title="Bloging Website" main="This is blogging website"/>
        <ProjectCard image={projectImage} title="ToDo List" main="This is blogging website"/>
        <ProjectCard image={projectImage} title="Instagram Clone" main="This is blogging website"/>
      </div>
    </div>
  );
};

export default Projects;
