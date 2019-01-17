import React, { Component } from "react";
import { Route } from "react-router-dom";
import JobsContainer from "../Landing/JobsContainer";
import SingleJob from "../Landing/SingleJob";
import PostJob from "../PostJob/PostJob";
import Profile from "../CompanyProfile/profileForm.js";
import UpdateProfile from "../CompanyProfile/updateProfile.js";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import ResetPassword from "../ResetPassword/ResetPassword";
import Billing from "../billing/billing";
import RedirectPage from "../RedirectPage/RedirectPage";

import * as ROUTES from "../../constants/routes";
import "./Routes.css";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuth: null
    };
  }

  render() {
    return (
      <div className="routes">
        <Route exact path={ROUTES.LANDING} component={JobsContainer} />
        <Route path={ROUTES.JOB} render={props => <SingleJob {...props} />} />
        <Route path={ROUTES.POST_JOB} component={PostJob} />
        {/* <Route path={ROUTES.COMPANY_PROFILE} component={Profile} /> */}
        <Route path={ROUTES.BILLING} component={Billing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} render={() => <SignIn />} />
        <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
        <Route path={ROUTES.REDIRECT} component={RedirectPage} />
        <Route path={ROUTES.ACCOUNT} component = {UpdateProfile} />
      </div>
    );
  }
}

export default Routes;
