import React, { Fragment } from "react";
import Copyright from "./copyright";

const Error404 = () => {
  return (
    <Fragment>
      <Fragment>
        <h1
          className=" mt-5 text-center font-weight-bold display-1 text-white"
        >
          404'd, Page Not Found!
        </h1>
      </Fragment>

      <Copyright />
    </Fragment>
  );
};

export default Error404;
