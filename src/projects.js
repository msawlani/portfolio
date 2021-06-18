import React, { Fragment } from "react";
import "./CSS/projects.css";
import projects from "./data/Projects.json"
import projects2 from "./data/Projects2.json";
 
const Projects = () => {
  return (
    <Fragment>
      <Fragment>
        <h1 className="mt-5 text-center">Projects</h1>
      </Fragment>
      <Fragment>
        <ul>
          {projects.MobileProjects.map((projects) => (
            <div className="pr-4 pb-4">
              <div className="card d-flex m-4">
                <div className="card-title mt-2 ml-4"></div>
                <div className="card-body">
                  <div className="images p-4">
                    {projects.Images.map((image) => (
                      <img
                        class="mobileImg"
                        src={require(`./assets/Images/${image}.png`)}
                      />
                    ))}
                  </div>
                  <h2 className="">
                    {projects.Name} | {projects.Platform}
                  </h2>
                  <div className="">
                    <h2>Technical</h2>
                    <ul>
                      {projects.Technical.map((technical) => (
                        <li>{technical}</li>
                      ))}
                    </ul>
                    <h2>Tasks</h2>
                    <ul>
                      {projects.Tasks.map((tasks) => (
                        <li className="task">{tasks}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {projects2.DesktopProjects.map((projects) => (
            <div className="pr-4 pb-4">
              <div className="card d-flex m-4">
                <div className="card-title mt-2 ml-4"></div>
                <div className="images p-4">
                  {projects.Images.map((image) => (
                    <img
                      class="desktopImg"
                      src={require(`./assets/Images/${image}.png`)}
                    />
                  ))}
                </div>
                <div className="card-body">
                  <h2 className="">
                    {projects.Name} | {projects.Platform}
                  </h2>
                  <div className="">
                    <h2>Technical</h2>
                    <ul>
                      {projects.Technical.map((technical) => (
                        <li>{technical}</li>
                      ))}
                    </ul>
                    <h2>Tasks</h2>
                    <ul>
                      {projects.Tasks.map((tasks) => (
                        <li className="task">{tasks}</li>
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
