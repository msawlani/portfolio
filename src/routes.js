import React, { Suspense, Fragment } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Nav from "./Navbar";
import Error404 from "./404";
import Projects from "./projects";
import About from "./skills";
import "./CSS/routes.css";
const Copyright = React.lazy(() => import("./copyright"));


const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Fragment>
          <Nav />
          <Fragment>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/skills" exact component={About}/>
              <Route path="**" exact component={Error404} />
            </Switch>
          </Fragment>
        {/* <Copyright/> */}
        </Fragment>
      </Suspense>
    </Router>
  );
};

export default Routes;
