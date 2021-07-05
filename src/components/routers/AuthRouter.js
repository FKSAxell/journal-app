import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { RegisterScreen } from "../auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <Fragment>
      <div className="container mt-2">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Fragment>
  );
};
