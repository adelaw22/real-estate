import React from "react";
import { withAuthorization, AuthUserContext } from "../Session";
import { withRouter } from "react-router-dom";


const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
                <div>
                    <h2>Dash Page: {authUser.username}</h2>
                </div>
            )
        }
    </AuthUserContext.Consumer>
    
);

const authUser = authUser => !!authUser

export default withRouter(withAuthorization(authUser)(AccountPage));