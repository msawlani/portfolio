import React from "react";
import "./CSS/home.css";
import picture from "./assets/Images/picture.jpg";

const App = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-2 col-md-4 ">
          <h1 className="text-white font-weight-bold">
            I am a Software Developer determined on building products that
            change the world.
          </h1>
        </div>
        <div className="col-md-8 ">
          <img className="img-fluid opacity-50" src={picture} />
        </div>
      </div>
    </div>
  );
};

export default App;
