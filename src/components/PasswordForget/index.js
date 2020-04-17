import React, { useState } from "react";

import { 
    Container, 
    Grid, 
    Header, 
    Divider, 
    Form, 
    Button, 
    Message, 
    Icon } from 'semantic-ui-react'
import "./pwdForget.scss";
import { useForm  } from "react-hook-form";
import { withFireBase } from "../Firebase";
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';



const PasswordForgetPage = () => {
    return (
        <Container>
                <Grid columns={1} centered={true}>
            
                <Grid.Column mobile={16} computer={8} largeScreen={6}>
                    <Header as="h2" className="text-center">
                        Change password request
                    </Header>
                    <Divider/>

                    <PasswordForgetForm/>
                    <LoginLink/>
                </Grid.Column>
            </Grid> 
        </Container>
    )
}

const PasswordForget = props => {
        const { handleSubmit, register, errors } = useForm();

        const [email, setEmail] = useState('');
        const [error, setError] = useState([])

        const Submit = value => {
           
            props.firebase.doPasswordReset(value.email)
            .then(res => {

                setError('');
                setEmail(res)
            })
            .catch(error => {
                console.log("error", error);
                setError(error['message'])
                setEmail('');
            })
        }

        const onChange = event => {
            setEmail(event.target.value)
        }
       
        return (   
            <div>
                { error.length > 0 ?  <Message
                    error
                    header='Sorry process failed'
                    content={error}
                /> : ''}
                <Form onSubmit={handleSubmit(Submit)}>
                    
                    <Form.Field required>
                        <label>Email</label>
                        <input 
                        onChange={onChange} 
                        value={email} 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email"
                        ref={
                            register({
                                required: 'Please enter an email first',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }
                            })
                        }
                        />
                        { errors.email && <small className="danger">{ errors.email.message }</small> }
                    </Form.Field>
                    <Button fluid role="submit" primary>Send</Button>
                </Form>
            </div>
        )
}

const LoginLink = () =>  (
    <div className="text-center">
        <p>Go back to <Link to={ROUTES.SIGN_IN}>Login</Link></p>
    </div>
)

const PasswordForgetForm = withFireBase(PasswordForget);


export default PasswordForgetPage;
export { PasswordForget }