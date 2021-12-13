import React, {
    useState
} from 'react';
import {
    Button,
    Image
} from "semantic-ui-react";
import * as ROUTES from "../../constants/routes";
import {
    withFireBase
} from "../Firebase";
import {
    compose
} from "recompose"
import {
    withRouter
} from 'react-router-dom';
import GImage from "../images/google (3).png";


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
                        }, {
                            merge: true
                        })
                })
                .then(() => {
                    setError(null);
                    this.props.history.push(ROUTES.RENTPAGE)
                })
                .catch(error => {
                    setError(error)
                })

            e.preventDefault();
        }
        return ( 
        <form onSubmit = {
                submit
            }>
            <Button type = "submit"
            fluid color = "gray"> Sign In with Google <Image src={GImage} style={{display:'inline-flex',marginLeft:'5px'}} /> </Button>

            {
                error && <small> {
                        error.message
                    } </small> } 
                    </form >
            );
        }

        export default compose(withRouter, withFireBase)(SignInGoogleBase);