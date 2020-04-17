import React, {  useState, useEffect } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom'
import Navigation from "../Navigation";



import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import PasswordChangePage from "../PasswordChange";
import Error404 from '../Error404';


import * as ROUTES from '../../constants/routes';
import SideBarDrawer from '../Sidebar';
import { withAuthentication } from "../Session";


const App = () =>  {

        const [sideBarOpen, setsideBarOpen] = useState(false);

        // useEffect(() => {
            
        //     return () => {
        //         cleanup
        //     }
        // }, [input])

        console.log("sidebar", sideBarOpen)
        
        return (
                <Router>
                
                <SideBarDrawer openSideBar={setsideBarOpen} sideBarOpen={sideBarOpen}/>
    
                <Navigation click={setsideBarOpen}/>
                <div id="page-wrap" style={{ height: 100 + "%", overflow: 'auto'  }}>
                    <Switch>
                        <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                        <Route path={ROUTES.SIGN_UP} component={SignUpPage} exact/>
                        <Route path={ROUTES.SIGN_IN} component={SignInPage} exact/>
                        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} exact/>
                        <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />

                        <Route path={ROUTES.HOME} component={HomePage} />
                        <Route path={ROUTES.ACCOUNT} component={AccountPage} exact/>
                        <Route path={ROUTES.ADMIN} component={AdminPage} exact/>

                        <Route component={Error404}/>
                    </Switch>
                </div>
            </Router>   
    )
}

    


export default withAuthentication(App);