import React from "react";
import designs from "./data/Designs.json";

const ProjectDesigns = () => {
  return (
    <div className="text-white">
      <h1 className="pb-5 text-center">Designs</h1>
      <div className="container">
        <div className="row">
          {designs.Designs.map((designs, id) => (
            <div className="card mb-5" key={id}>
              <img
                className="rounded img-fluid card-img-top"
                src={require(`./assets/Images/${designs.Image}.png`)}
                alt={designs.Image}
              />
              <div className="card-body text-black">
                <p className="fs-1 fw-bold">{designs.Name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDesigns;
