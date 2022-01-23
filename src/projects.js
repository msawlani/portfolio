import React from "react";
import "./CSS/projects.css";
import { Link } from "react-router-dom";
import projects from "./data/Projects.json";

const Projects = () => {
  return (
    <div className="text-white">
      <h1 className="pb-5 text-center">Projects</h1>

      <div className="container">
        <div className="row row-cols-2 g-3">
          {projects.Projects.map((projects, id) => (
            <div key={id}>
              <div className="position-relative">
                <img
                  className="rounded img-fluid"
                  src={require(`./assets/Images/${projects.Image}.png`)}
                  alt={projects.Image}
                />
                <p className="fs-1 fw-bold">
                  {projects.Name} | {projects.Platform}
                </p>
                <a
                  className="fs-5"
                  href={projects.Website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {projects.Website === "" ? "" : projects.Name}
                </a>

                <p className="">{projects.Description}</p>

                <p className="fs-4 fw-bold">Technical</p>
                <ul>
                  {projects.Technical.map((technical, id) => (
                    <li key={id}>{technical}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
