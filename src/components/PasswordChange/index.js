import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Form,
  Grid,
  Button,
  Header,
  Divider
} from 'semantic-ui-react';

const PasswordChangePage = props => {
  const [form, setForm] = useState({ passwordOne: '', passwordTwo: '' });
  const [loading] = useState(false);

  const { register, handleSubmit, watch } = useForm();

  const submit = values => {
    const { passwordOne } = values;

    props.firebase
      .doPasswordUpdate(passwordOne)
      .then(res => {})
      .catch(error => {});
  };

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Grid columns={1} centered={true}>
        <Grid.Column mobile={16} largeScreen={8}>
          <Header as='h3' className='text-center'>
            Reset your password
          </Header>
          <Divider />
          <Form onSubmit={handleSubmit(submit)}>
            <label>Enter new password</label>
            <Form.Field>
              <input
                placeholder='New Password'
                name='passwordOne'
                onChange={onChange}
                value={form.passwordOne}
                ref={register({
                  required: true,
                  minLength: 8,
                  maxLength: 20
                })}
                type='password'
              />
            </Form.Field>
            <Form.Field>
              <label>Confirm password</label>
              <input
                placeholder='Repeat password'
                name='passwordTwo'
                type='password'
                onChange={onChange}
                value={form.passwordTwo}
                ref={register({
                  required: true,
                  validate: value =>
                    value === watch('passwordOne') || 'Passwords do not match'
                })}
              />
            </Form.Field>
            <Button loading={loading} color='red' role='submit'>
              Update Password
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default PasswordChangePage;
