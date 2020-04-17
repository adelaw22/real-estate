import React from "react";
import { withAuthorization } from "../Session";
import * as ROLES from "../../constants/roles";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFireBase } from "../Firebase";

const AdminPage = () => (
    <div>
        <h2>Admin Page</h2>
    </div>
);
// Allows only the admin to access this site
const AuthAdmin = authUser => authUser && authUser.roles[ROLES.ADMIN];

export default compose(withRouter, withAuthorization(AuthAdmin), withFireBase)(AdminPage);
// export default withRouter(withAuthorization(AuthAdmin)(StartPage));