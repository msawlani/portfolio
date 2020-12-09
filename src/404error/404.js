import React, { Fragment } from "react";
import Copyright from "../shared/copyright";

const Error404 = () => {
  return (
    <Fragment>
      <Fragment>
        <h1
          className=" mt-5 text-center font-weight-bold"
          style={{
            fontSize: "90px",
          }}
        >
          404'd, Page Not Found!
        </h1>
      </Fragment>

      <Copyright />
    </Fragment>
  );
};

export default Error404;
