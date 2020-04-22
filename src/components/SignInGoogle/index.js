import React, { useState } from 'react';
import { Button, Icon  } from "semantic-ui-react";
import * as ROUTES from "../../constants/routes";
import { withFireBase } from "../Firebase";
import { compose } from "recompose"
import { withRouter } from 'react-router-dom';
import './index.scss';

const SignInGoogleBase = props => {
    const [error, setError] = useState(null);


    const submit = e => {
        props.firebase
        .doSignInWithGoogle()
        .then(socialAuthUser => {
            return props.firebase.user(socialAuthUser.user.uid)
            .set({
                username: socialAuthUser.user.displayName,
                email: socialAuthUser.user.email,
                roles: {}
            }, { merge: true })
        })
        .then(() => {
            setError(null);
            this.props.history.push(ROUTES.HOME)
        })
        .catch(error => {
            setError(error)
        })

        e.preventDefault();
    }
    return  (
        <form onSubmit={submit}>
            <Button type="submit" fluid color="red" className="mt-5"><Icon name="google"/> Sign In with Google </Button>
        
            { error && <small className="danger d-flex">{ error.message }</small> }
        </form>
    );
}

export default compose(withRouter, withFireBase)(SignInGoogleBase);