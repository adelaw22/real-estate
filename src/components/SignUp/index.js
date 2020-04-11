import React, { Component } from "react";
import { Link } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";

import "./SignUp.scss";

import { 
    Header,
    Container, 
    Form, 
    Input,
    Button,
    Divider
 } from 'semantic-ui-react';
const SignUpPage = () => (
        <Container className="h-100">
            <Header as='h3' textAlign='center'>
                Sign Up
            </Header>

            <Divider />
           <SignUpForm/>
        </Container>
);


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }

    onSubmit = event => {
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state


        return (
      
                
                    
                    <Form>
                        <Form.Field required>
                            <label>Username</label>
                            <Input 
                            placeholder='Username'
                            name='name'
                            width={8}
                            value={username}
                            onChange={this.onChange}

                            type="text" />
                        </Form.Field>

                        <Form.Field required>
                            <label>Email</label>
                            <Input 
                            width={8}
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={this.onChange}
                            type="email" />
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <Input 
                            width={8}
                            placeholder='Password'
                            name='passwordOne'
                            value={passwordOne}
                            onChange={this.onChange}
                            type="password" />
                        </Form.Field>
                        <Form.Field required>
                            <label>Password</label>
                            <Input 
                            width={8}
                            placeholder='Repeat Password'
                            name='passwordTwo'
                            value={passwordTwo}
                            onChange={this.onChange}
                            type="password" />
                        </Form.Field>
                        <Button primary role="submit">Sign Up</Button>
                   </Form>
               
                   
             
        );
   }
}

const SignUpLink = () => (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

export default SignUpPage;

export { SignUpForm, SignUpLink };