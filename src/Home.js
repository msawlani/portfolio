import React from "react";
import picture from "./assets/Images/picture.jpg";
import "./CSS/home.css";

const App = () => {
  return (
    <div className="container home">
      <div className="row">
        <div className="col-12 col-sm-5 offset-sm-1 align-self-center">
          <span className="text-white fs-1 fw-bold">
            Full Stack Developer determined on building products that customers
            want.
          </span>
        </div>

        <div className="col-12 col-sm-5">
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
