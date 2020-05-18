import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LandingPage from "../Landing";
import Contact from "../Contact";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import PasswordChangePage from "../PasswordChange";
import Error404 from "../Error404";
import Pricing from "../Pricing"
import LandlordPricing from "../LandlordPricing"

import * as ROUTES from "../../constants/routes";

import {
  withAuthentication
} from "../Session";
import {
  SingleUnit
} from "../SingleUnit";

const App = () => {
  return ( <
    Router >
    <
    div style = {
      {
        height: 100 + "%"
      }
    } >
    <
    Switch >
    <
    Route exact path = {
      ROUTES.LANDING
    }
    component = {
      LandingPage
    }
    />{" "} <
    Route path = {
      ROUTES.CONTACT
    }
    component = {
      Contact
    }
    exact / >
    <
    Route path = {
      ROUTES.SIGN_UP
    }
    component = {
      SignUpPage
    }
    exact / >
    <
    Route path = {
      ROUTES.LANDLORD
    }
    component = {
      LandlordPricing
    }
    exact / >
    <
    Route path = {
      ROUTES.SIGN_IN
    }
    component = {
      SignInPage
    }
    exact / >
    <
    Route path = {
      ROUTES.PASSWORD_FORGET
    }
    component = {
      PasswordForgetPage
    }
    exact /
    >
    <
    Route path = {
      ROUTES.PASSWORD_CHANGE
    }
    component = {
      PasswordChangePage
    }
    /> <
    Route path = {
      ROUTES.HOME
    }
    component = {
      HomePage
    }
    />{" "} <
    Route path = {
      ROUTES.ACCOUNT
    }
    component = {
      AccountPage
    }
    exact / >
    <
    Route path = {
      ROUTES.SINGLEUNIT
    }
    component = {
      SingleUnit
    }
    exact / >
    <
    Route path = {
      ROUTES.PRICING
    }
    component = {
      Pricing
    }
    exact / >
    <
    Route path = {
      ROUTES.ADMIN
    }
    component = {
      AdminPage
    }
    exact / >
    <
    Route component = {
      Error404
    }
    />{" "} < /
    Switch > {
      " "
    } <
    /div>{" "} < /
    Router >
  );
};

export default withAuthentication(App);