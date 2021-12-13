
import React, { useState } from "react";
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import NavFour from "../NavFour";
// Organizes  higher-order components in this case it will handle withRouter and withFirebas for Sign up form.
import { compose } from 'recompose'
import "./SignUp.scss";
import { withFireBase } from "../Firebase";
import { useForm  } from "react-hook-form";
import GImage from "../images/google (3).png";
import { 
    Header,
    Container, 
    Form, 
    Button,
    Divider,
    Message,
    Grid,
    Checkbox,
    Image
   // Checkbox,
   // Popup,
 } from 'semantic-ui-react';
 import SideBarDrawer from "../Sidebar";


const SignUpPage = () => {
     const [sideBarOpen, setsideBarOpen] = useState(false);

     // useEffect(() => {

     //     return () => {
     //         cleanup
     //     }
     // }, [input])

     console.log("sidebar", sideBarOpen);
    return(
        <div>
             < SideBarDrawer openSideBar = {
                 setsideBarOpen
             }
             sideBarOpen = {
                 sideBarOpen
             }
             />
            <NavFour/>
            <Container>
            <Grid columns={1} centered>
                <Grid.Column mobile={16} tablet={8} largeScreen={5} computer={5} style={{marginTop:'28px'}}>

                    <Header as='h3' textAlign='center'>
                        Sign Up
                    </Header>

                    <Divider />
                    <SignUpForm/>
                    <SignUpLink login={false}  to={ROUTES.SIGN_IN} name={'Sign In'}/>
                </Grid.Column>
            </Grid>
        </Container>
        </div>
    );
};


const SignUpLink = (props) => {
    if(props.login) {
        return (
            <div className="text-center">
                    <p>
                        Forgot Password? <Link to={ROUTES.PASSWORD_FORGET}>Change it here</Link>
                     </p>

                     <p>
                     Already have an account? <Link to={props.to}>{props.name}</Link>
                     </p>
                    
            </div>
        )
    } else {
        return (
            <div className="text-center">
        

             <p>
             Already have an account? <Link to={props.to}>{props.name}</Link>
             </p>
            </div>
        )
    }
    
}
    
const FormSign = props => {
    const { handleSubmit, register, errors, watch } = useForm();

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
    const [role] = useState('Regular');

    
    const [ setConfirm] = useState(false);

    const submit = values => {
        setConfirm(true);
        const { email, passwordOne, username } = values;

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
                    }, { merge: true  })
                // Allow the user to be redirected to home pageb after successful login
                // The router capability is offered by the withRouter which offers higher order components
                // Access to all router properties push which handles routing to different pages.
            })
            .then(() => {
                setForm({ email: "", passwordOne: "", passwordTwo: "", role: ROLES.client, username: "" })
                props.history.push(ROUTES.RENTPAGE);
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
             { error.length > 0 ?  <Message
                error
                header='Sorry Login failed'
                content={error}
            /> : ''}

            <Form onSubmit={handleSubmit(submit)}>
                    <Form.Field required>
                        <input 
                        name='username'
                        placeholder='Fullname'
                        width={8}
                        value={form.Fullname}
                        onChange={onChange}
                        ref={
                            register({
                                required: 'Required',
                                maxLength: {
                                    value: 20,
                                    message: "Fullname requires a maximum of 20 characters."
                                },
                                minLength: {
                                    value: 3,
                                    message: "Fullname requires a minimum of 3 characters."
                                },
                            })
                        }
                        type="text" />
                    { errors.username && <small className="danger">{ errors.username.message }</small> }
                    </Form.Field>
                   {/* <Grid className="p-2" columns={1}>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                                <Popup
                                    content="You will be an agent if you choose this option. You will be able to sell on behalf of other companies"
                                    header="Agent"
                                    mouseLeaveDelay={500}
                                    trigger={
                                        <Form.Field>
                                            <Checkbox
                                                radio
                                                label='Agent'

                                                value='Agent'
                                                checked={ role === 'Agent'}
                                                onChange={() => setRole('Agent')}
                                            />
                                        </Form.Field>
                                    }
                                />
                                
                            </Grid.Column>
                            
                            <Grid.Column>
                                <Popup
                                    content="You will be able to add, update, sell, showcase your homes and choose agents who will communicate to your potential clients."
                                    header="Company owner"
                                    mouseLeaveDelay={500}
                                    trigger={
                                        <Form.Field>
                                            <Checkbox
                                                radio
                                                label='Owner'
                                                value='Owner'
                                                checked={role === 'Owner'}
                                                onChange={() => setRole('Owner')}
                                            />
                                        </Form.Field>
                                    }
                                />
                                
                            </Grid.Column>
                            
                            <Grid.Column>
                                <Popup
                                    mouseLeaveDelay={500}
                                    content="You will be able to buy, rent and communicate with agents to better help you understand your future home and price of it."
                                    header="I want to rent and/or buy"
                                    trigger={
                                        <Form.Field>
                                            <Checkbox
                                                radio
                                                label='Regular'
                                                value='Regular'
                                                checked={role === 'Regular'}
                                                onChange={() => setRole('Regular')}
                                            />
                                        </Form.Field>
                                    }
                                />
                                
                            </Grid.Column>
                            
                        </Grid.Row>
                                </Grid>*/}
                    
                    <Form.Field required>
                        <input 
                        name='email'
                    
                        placeholder='Email'
                        value={form.email}
                        onChange={onChange}
                        
                        ref={
                            register({
                                required: 'Required',
                                pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                                }
                            })
                        }
                        type="email" />
                    { errors.email && <small className="danger">{ errors.email.message }</small> }
                    </Form.Field>
                    <Form.Field required>
                        <input 
                        name='passwordOne'
                        
                        placeholder='Password'
                        value={form.passwordOne}
                        onChange={onChange}
                        ref={
                            register({
                                required: "Password is required.",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                }
                            })
                        }
                        type="password" />
                    { errors.passwordOne && <small className="danger">{ errors.passwordOne.message }</small> }
                    </Form.Field>
                    <Form.Field required>
                        <input 
                        name='passwordTwo'
                        placeholder='Confirm your Password'
                        value={form.passwordTwo}
                        onChange={onChange}
                        
                        ref={
                            register({
                                validate: value =>
                                value === watch('passwordOne') || "The passwords do not match" 
                            })
                        }
                        type="password" />
                        { errors.passwordTwo && <small className="danger">{ errors.passwordTwo.message }</small> }
                    </Form.Field>

                    <Checkbox label='I agree to the Terms & Conditions'/>

                <Button loading={loading} fluid primary role="submit">Sign Up</Button>
                <span className="Or-sec"><Divider/><p>or</p><Divider/></span>
                <Button fluid color="gray"> Sign Up with Google <Image src={GImage} style={{display:'inline-flex',marginLeft:'5px'}}/> </Button>
            </Form>
        </div>
    )
}

const SignUpForm = compose(
    withRouter,
    withFireBase
)(FormSign);

export default SignUpPage;

export { SignUpForm, SignUpLink };