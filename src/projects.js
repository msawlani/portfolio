import React, { Fragment } from "react";
import "./CSS/projects.css";
import projects from "./data/Projects.json";

const Projects = () => {
  return (
    <Fragment>
      <Fragment>
        <h1 className="mt-5 text-center">Projects</h1>
      </Fragment>
      <Fragment>
        <ul>
          {projects.Projects.map((projects) => (
            <div className="pr-4 pb-4">
              <div className="card d-flex m-4">
                <div className="card-title mt-2 ml-4"></div>
                <div className="card-body">
                  {projects.Images.map((image) => (
                    <div className="col-sm-6">
                      <img
                        class="img-fluid rounded  w-100 h-100"
                        src={require(`./assets/Images/${image}.png`)}
                      />
                    </div>
                  ))}

                  <h2 className="">
                    {projects.Name} | {projects.Platform}
                  </h2>
                  <p>{projects.Description}</p>
                  <div className="">
                    <h2>Technical</h2>
                    <ul>
                      {projects.Technical.map((technical) => (
                        <li>{technical}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </Fragment>
    </Fragment>
  );
};

export default Projects;
