import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";

const BaseRouter = props => (
  <Hoc>
    {/* “When you use the component props, the router uses React.createElement
      to create a new React element from the given component. That means if you
      provide an inline function to the component attribute, you would create a
      new component every render. This results in the existing component unmounting
      and the new component mounting instead of just updating the existing component.” */}

    <Route exact path="/" render={() => <HomepageLayout {...props} />} />
  </Hoc>
);

export default BaseRouter;
