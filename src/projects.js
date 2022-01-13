import React, { Fragment } from "react";
import "./CSS/projects.css";
import projects from "./data/Projects.json";

const Projects = () => {
  return (
    <div className=" text-white ">
      <Fragment>
        <h1 className="pb-5 text-center">Projects</h1>
      </Fragment>

      <div
        id="carouselProjects"
        class="carousel slide position-aboslute"
        data-bs-ride="carousel"
      >
          <div class="carousel-indicators position-fixed">
          {projects.Projects.map((projects, index) => (
            <button
              type="button"
              data-target="#carouselProjects"
              data-bs-slide-to={index}
              class={projects.classI}
              aria-current={projects.aCurrent}
              aria-label={projects.Name}
            ></button>
          ))}
  </div>

        <div className="carousel-inner">
          {projects.Projects.map((projects) => (
            <div className={projects.class}>
              <div className="container d-flex justify-content-center">
                {projects.Images.map((image) => (
                  <div className="">
                    <img
                      class="img-fluid rounded"
                      src={require(`./assets/Images/${image}.png`)}
                    />
                  </div>
                ))}
                <div className="">
                  <h2 className="">
                    {projects.Name} | {projects.Platform}
                  </h2>
                  <a href={projects.Website} rel="noopener" target="_blank">
                    {projects.Name}
                  </a>
                  <p className="">{projects.Description}</p>

                  <h2>Technical</h2>
                  <ul>
                    {projects.Technical.map((technical) => (
                      <li>{technical}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev position-fixed"
          data-bs-target="#carouselProjects"
          type="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>

        </button>

        <button
          class="carousel-control-next position-fixed"
          data-bs-target="#carouselProjects"
          type="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>

        </button>
      </div>
    </div>
  );
};

export default Projects;
