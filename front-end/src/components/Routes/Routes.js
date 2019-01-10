import React, { Component } from "react";

import { Route } from "react-router-dom";

import JobsContainer from "../jobContainer/jobsContainer";
import JobList from "../jobList/jobList.js";
import Job from "../jobList/job.js";
import PostJob from "../postJob/postJob.js";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import ResetPassword from "../ResetPassword/ResetPassword";
import Billing from "../billing/billing";

import * as ROUTES from "../../constants/routes";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      userAuth: null
    };
  }

  render() {
    return (
      <div className="routes">
        <Route exact path={ROUTES.LANDING} component={JobsContainer} />
        <Route path={ROUTES.JOB} component={Job} />
        <Route path={ROUTES.POST_JOB} component={PostJob} />
        <Route path={ROUTES.BILLING} component={Billing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
        <Route path={ROUTES.ACCOUNT} />
      </div>
    );
  }
}

export default Routes;