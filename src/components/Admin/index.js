import React from "react";
import { withAuthorization } from "../Session";
// import * as ROLES from "../../constants/roles";
import { Container } from "semantic-ui-react";

const AdminPage = props => {
   console.log("props", props)
    return ( 
   <Container>
        <h2>Admin Page</h2>
    </Container>
    )
};
// Allows only the admin to access this site
const condition = authUser => !!authUser

// export default compose(withRouter, withFireBase, withAuthorization(AuthAdmin))(AdminPage);
// export default withRouter(withAuthorization(AuthAdmin)(StartPage));
export default withAuthorization(condition)(AdminPage)