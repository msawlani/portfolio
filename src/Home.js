import React from "react";
import "./CSS/home.css";
import picture from "./assets/Images/picture.jpg";

const App = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5 align-self-center">
          <span className="text-white fs-1 fw-bold ">
            I am a Software Developer determined on building products that
            change the world.
          </span>
        </div>

        <div className="col-7">
          <img
            className="img-fluid opacity-50"
            src={picture}
            alt="Michael Sawlani's Face"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
