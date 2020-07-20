import React from "react";
import Copyright from "../shared/copyright";

const Error404 = () => {
  return (
    <div>
      <div>
        <h1
          className=" mt-5 text-center font-weight-bold"
          style={{
            fontSize: "90px",
          }}
        >
          404'd, Page Not Found!
        </h1>
      </div>

      <Copyright />
    </div>
  );
};

export default Error404;
