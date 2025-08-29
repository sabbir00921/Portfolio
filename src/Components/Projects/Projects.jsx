import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage from "../../assets/projects1.webp";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h2 className=" text-2xl md:text-4xl font-bold">Projects</h2>
      <div className="py-12 px-4 sm:px-8 flex flex-wrap gap-6 justify-center ">
        <ProjectCard
          image={projectImage}
          title="Awaaz (Instagram clone)"
          main="A scalable, responsive frontend Social Media project built with React for the frontend and Firebase, real-time database on the backend."
          link="https://github.com/sabbir00921/Awaaz"
        />
        <ProjectCard
          image={projectImage}
          title="Task flow (ToDOist clone)"
          main="Task Flow is a Todoist clone with React.js frontend and Firebase Realtime Database backend for efficient, real-time task management."
          link="https://github.com/sabbir00921/TaskFlow.git"
        />
        <ProjectCard
          image={projectImage}
          title="E-Commerce Api (Backend)"
          main="Scalable e-commerce platform managing users, products, orders, payments, and roles with Express-MongoDB backend, React.js frontend, and secure authentication."
          link="https://github.com/sabbir00921/Ciclone_Ecommerce.git"
        />
      </div>
    </div>
  );
};

export default Projects;
