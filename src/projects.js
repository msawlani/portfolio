import React from "react";
import projects from "./data/Projects.json";

const Projects = () => {
  return (
    <div className="text-white">
      <h1 className="pb-5 text-center">Projects</h1>
      <div className="container">
        <div className="row">
          {projects.Projects.map((projects, id) => (
            <div className="card mb-5" key={id}>
              <img
                className="rounded img-fluid card-img-top"
                src={require(`./assets/Images/${projects.Image}.png`)}
                alt={projects.Image}
              />
              <div className="card-body text-black">
                <p className="fs-1 fw-bold">
                  {projects.Name} | {projects.Platform}
                </p>
                <a
                  className="fs-5"
                  href={projects.Website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {projects.Website}
                </a>

                <p className="">{projects.Description}</p>

                <p className="fs-4 fw-bold">Technical</p>
                <ul>
                  {projects.Technical.map((technical, id) => (
                    <li key={id}>{technical}</li>
                  ))}
                </ul>
                <p className="fs-4 fw-bold">Links</p>
                <ul>
                  {projects.Links?.map((link, id) => (
                    <li key={id}>
                      <a
                        href={link?.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link?.name}
                      </a>
                    </li>
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
