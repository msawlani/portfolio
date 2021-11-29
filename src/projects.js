import React, { Fragment } from "react";
import "./CSS/projects.css";
import projects from "./data/Projects.json";
import { Carousel } from 'react-responsive-carousel';


const Projects = () => {
  return (
    <Fragment>
      <Fragment>
        <h1 className="mt-5 text-white text-center">Projects</h1>
      </Fragment>
      <Fragment>
      <div className="carousel-wrapper">

<Carousel>
  {projects.Projects.map((projects) => (

        <div className="card">
          {projects.Images.map((image) => (
            <div className="card-img-top">
              <img
                class="img-fluid rounded"
                src={require(`./assets/Images/${image}.png`)}
              />
            </div>
          ))}
<div className="card-body">
          <h2 className="card-title">
            {projects.Name} | {projects.Platform}
          </h2>
          <p className="card-text">{projects.Description}</p>
          
            <h2>Technical</h2>
            <ul>
              {projects.Technical.map((technical) => (
                <li>{technical}</li>
              ))}
            </ul>
          </div>
        </div>

    
  ))}
               </Carousel>
  </div>
      </Fragment>
    </Fragment>
  );
};

export default Projects;
