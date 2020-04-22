import React from 'react';
import { Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';


const Error404 = ({ location }) => {
    console.log("location", location)
    
    return (
    <Container>
        No match for { location.pathname }
    </Container>
    )
}

export default withRouter(Error404);