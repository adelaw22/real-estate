import React from "react";
import { Container } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import queryString from 'query-string'

const HomePage = props => {

    console.log("props", props.location);

    console.log("query", queryString.parse(props.location.search))

   return (
        <Container>
        <h2>
            Home place
        </h2>
    </Container>
   )
};

export default withRouter(HomePage);