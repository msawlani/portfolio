import { Button } from "bootstrap";
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
        class="carousel slide position-absolute"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators position-fixed">
          {projects.Projects.map((projects, index) => (
            <li
              data-target="#carouselProjects"
              data-slide-to={index}
              class={projects.classI}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {projects.Projects.map((projects) => (
            <div className={projects.class}>
              <div className="container">
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
        <a
          class="carousel-control-prev position-fixed"
          href="#carouselProjects"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>

        <a
          class="carousel-control-next position-fixed"
          href="#carouselProjects"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
