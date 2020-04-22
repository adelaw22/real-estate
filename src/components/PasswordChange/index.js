import React, { useState } from "react";
import { useForm } from  'react-hook-form';
import { Container, Form, Grid, Button, Header, Divider } from 'semantic-ui-react'

const PasswordChangePage = props => { 
    const [form, setForm] = useState({ passwordOne: "", passwordTwo: "" });
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, errors, watch } = useForm();
    console.log("error", error)
    const submit = values => {
        const { passwordOne } = values;
        setLoading(true)
        props
        .firebase
        .doPasswordUpdate(passwordOne)
        .then(res => {

        })
        .catch(error => {
            setError(error['messages'])
        })
    }

    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container>
            <Grid centered={true}>
                    <Grid.Column mobile="16" computer="6" largeScreen="4" tablet="6">
                            <Header as="h3" className="text-center">Reset your password</Header>
                            <Divider/>
                            <Form onSubmit={handleSubmit(submit)}>
                                <label>Enter new password</label>
                                <Form.Field>
                                    <input
                                        placeholder="New Password"
                                        name="passwordOne"
                                        onChange={onChange}
                                        value={form.passwordOne}
                                        ref={
                                            register({
                                                required: true,
                                                minLength: 8,
                                                maxLength: 20
                                            })
                                        }
                                        type="password"
                                    />

                                    {errors.message && <small className="danger">{ errors }</small>}
                                </Form.Field>
                                <Form.Field>
                                    <label>Confirm password</label>
                                    <input
                                        placeholder="Repeat password"
                                        name="passwordTwo"
                                        type="password"
                                        onChange={onChange}
                                        value={form.passwordTwo}
                                        ref={
                                            register({
                                                required: true,
                                                validate: value =>
                                                    value === watch('passwordOne') || 'Passwords do not match'
                                            })
                                        }
                                    />
                                </Form.Field>
                                <Button loading={loading} color="red" role="submit">Update Password</Button>
                            </Form>
                    </Grid.Column>
            </Grid>
        </Container>
    )
}

export default PasswordChangePage;