<<<<<<< HEAD
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

import * as ROUTES from "../../constants/routes";

import {
  withAuthentication
} from "../Session";
import {
  SingleUnit
} from "../SingleUnit";
=======
import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Navigation from "../Navigation";
import { Transition } from 'semantic-ui-react'



import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import PasswordChangePage from "../PasswordChange";
import Pricing from "../Pricing";
import ProfilePage from "../Profile";
import Error404 from '../Error404';


import * as ROUTES from '../../constants/routes';
import SideBarDrawer from '../Sidebar';
import { withAuthentication } from '../Session';
// import { withAuthentication } from "../Session";

const App = () => {

    const [sideBarOpen, setsideBarOpen] = useState(false);

    useEffect(() => {
        console.log("awesomes")

    }, [])

    console.log("sidebar", sideBarOpen)

    return (
        <Router>

            <SideBarDrawer openSideBar={setsideBarOpen} sideBarOpen={sideBarOpen} />

            <Navigation click={setsideBarOpen} />
            <div id="page-wrap" style={{ height: 100 + "vh", overflow: 'auto' }}>
                <Switch>

                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage} exact />
                    <Route path={ROUTES.SIGN_IN} component={SignInPage} exact />
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} exact />
                    <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />

                    <Route path={ROUTES.PRICING} component={Pricing} />

                    <Route path={ROUTES.HOME} component={HomePage} />
                    <Route path={ROUTES.ACCOUNT} component={AccountPage} exact />
                    <Route path={ROUTES.PROFILE} component={ProfilePage} exact strict />
                    <Route path={ROUTES.ADMIN} component={props => <AdminPage {...props} />} exact />

                    <Route component={Error404} />

                </Switch>
            </div>
        </Router>
    )
}


>>>>>>> 1ba080b1b9f5039624777c90dbb04d6a2ed10d8e

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