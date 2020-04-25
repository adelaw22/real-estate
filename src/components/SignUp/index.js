import React, {
    useState
} from "react";
import {
    Link,
    withRouter
} from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

// Organizes  higher-order components in this case it will handle withRouter and withFirebas for Sign up form.
import {
    compose
} from 'recompose'
import "./SignUp.scss";
import {
    withFireBase
} from "../Firebase";
import {
    useForm
} from "react-hook-form";

import {
    Header,
    Container,
    Form,
    Button,
    Divider,
    Message,
    Grid,
    Segment,
    Image
} from 'semantic-ui-react';
import SignInGoogle from "../SignInGoogle";


const SignUpPage = props => {

    console.log("history", props)
    return (
        <div className="wrapper">
            <Container>
                <Grid centered columns={
                    2
                }>
                    <Grid.Column stretched mobile="sixteen"
                        tablet="16"
                        computer="5">
                        <Segment className="image">
                            <div className="image__info">
                                <Header as="h1"
                                > Thank you
                                    for Signing Up </Header>
                                <Header as="h4"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Accusamus,
                                    fugit.Suscipit, rem possimus!Dolor, ad, quis totam officiis laudantium aperiam earum unde facere.
                            </Header>
                            </div>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column
                        className="box"
                        mobile="sixteen"
                        tablet="16"
                        computer="11">
                        <Header as='h3'
                            textAlign='center'>
                            Sign Up </Header>

                        <Divider />
                        <SignUpForm />
                        <SignInGoogle />
                        <SignUpLink login={
                            false
                        }
                            to={
                                ROUTES.SIGN_IN
                            }
                            name={
                                'Sign In'
                            }
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
};

const SignUpLink = (props) => {
    if (props.login) {
        return (
            <div className="text-center" >
                <p>
                    Forgot Password ?
                    <Link to={
                        ROUTES.PASSWORD_FORGET
                    } > Change it here
                    </Link>
                </p>

                <p>Don 't have an account? <Link to={props.to}>{props.name}</Link> </p>
            </div>
        )
    } else {
        return (
            <div className="text-center">
                <p>
                    Don 't have an account? <Link to={props.to}>{props.name}</Link>  </p>
                <p>
                    By Signing up you agree to our < span className="link-primary" > Terms and Conditions </span>
                </p>
            </div>
        )
    }

}

const FormSign = props => {
    const {
        handleSubmit,
        register,
        errors,
        watch
    } = useForm();

    // const pwd = useRef({});
    // pwd.current = watch(state.passwordOne, "");
    const [form, setForm] = useState({
        username: '',
        email: '',
        isAdmin: false,
        passwordOne: '',
        passwordTwo: ''
    });

    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('client');


    const submit = values => {

        const {
            email,
            passwordOne,
            username
        } = values;

        console.log("values", values);
        console.log("role", role)


        // Ensure the user knows the role selected.

        setLoading(true);
        // A user is created in Firebase's internal authentication database that is only limited accessible.
        props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {

                setLoading(false);

                // creates a user in Firebase's realtime database that is accessible.
                return props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        role
                    },
                        {
                            merge: true
                        })
                // Allow the user to be redirected to home pageb after successful login
                // The router capability is offered by the withRouter which offers higher order components
                // Access to all router properties push which handles routing to different pages.
            })
            .then(() => {
                setForm({
                    email: "",
                    passwordOne: "",
                    passwordTwo: "",
                    role: "",
                    username: ""
                })
                props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                console.log("error su", error);
                setError(error['message'])
                setLoading(false);
            })

    }


    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            {
                error.length > 0 ? <Message
                    error
                    header='Sorry Login failed'
                    content={
                        error
                    }
                /> : ''
            }

            <Form onSubmit={
                handleSubmit(submit)
            }>
                <Form.Field required>
                    <label> Username</label>
                    <input
                        name='username'
                        placeholder='Username'
                        width={
                            8
                        }
                        value={
                            form.username
                        }
                        onChange={
                            onChange
                        }
                        ref={
                            register({
                                required: 'Required',
                                maxLength: {
                                    value: 20,
                                    message: "Username requires a maximum of 20 characters."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Username requires a minimum of 3 characters."
                                },
                            })
                        }
                        type="text" /> {
                        errors.username && <small className="danger" > {
                            errors.username.message
                        } </small>}
                </Form.Field>

                <Form.Field required >
                    <label> Email </label>
                    <input
                        name='email'
                        placeholder='Email'
                        value={
                            form.email
                        }
                        onChange={
                            onChange
                        }
                        ref={
                            register({
                                required: 'Required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }
                            })
                        }
                        type="email" /> {
                        errors.email &&
                        <small className="danger" > {
                            errors.email.message
                        } </small>
                    }
                </Form.Field>
                <Form.Field required>
                    <label> Password </label>
                    <input
                        name='passwordOne'
                        placeholder='Password'
                        value={
                            form.passwordOne
                        }
                        onChange={
                            onChange
                        }
                        ref={
                            register({
                                required: "Password is required.",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                            })
                        }
                        type="password" /> {
                        errors.passwordOne &&
                        <small className="danger" > {
                            errors.passwordOne.message
                        }
                        </small>
                    } </Form.Field>
                <Form.Field required>
                    <label> Confirm Password </label>
                    <input
                        name='passwordTwo'
                        placeholder='Confirm your Password'
                        value={
                            form.passwordTwo
                        }
                        onChange={
                            onChange
                        }
                        ref={
                            register({
                                validate: value =>
                                    value === watch('passwordOne') || "The passwords do not match"
                            })
                        }
                        type="password" /> {
                        errors.passwordTwo &&
                        <small className="danger" > {
                            errors.passwordTwo.message
                        } </small>
                    }
                </Form.Field>

                <Button loading={
                    loading
                }
                    fluid primary role="submit"> Sign Up </Button>

            </Form>
        </div>
    )
}

const SignUpForm = compose(
    withRouter,
    withFireBase
)(FormSign);

export default SignUpPage;

export {
    SignUpForm,
    SignUpLink
};