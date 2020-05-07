import React from 'react'
import { Header, Divider, Form, Button, Container, Icon } from 'semantic-ui-react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/semantic-ui.css'
import './pdetails.scss';

const index = props => {
    const { firstName, secondName, mobileNumber, secondEmail } = props.values;
    const saveAndContinue = e => {
        e.preventDefault()
        props.nextStep()
    }

    const handleChange = (value, e) => {
        console.log("phone", value)
        console.log("e", e)
    }

    return (
        <Container>
            <div className="form-box">
                <Header as='h2' className="m-3">
                    <Icon name='address card outline' />
                    <Header.Content>
                        Basic Info
                        <Header.Subheader>Add some basic infomation about yourself.</Header.Subheader>
                    </Header.Content>
                </Header>
                <Divider />
                <Form>
                    <Form.Group widths="equal">
                        <Form.Field required>
                            <label>Enter your first name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Jon"
                                onChange={props.onChange}
                                value={firstName}
                            />
                        </Form.Field>
                        <Form.Field required>
                            <label>Enter your last name</label>
                            <input
                                type="text"
                                name="secondName"
                                id="secondName"
                                placeholder="Doe"
                                onChange={props.onChange}
                                value={secondName}
                            />
                        </Form.Field>
                    </Form.Group>
                    <Form.Field>
                        <label>Enter your replace email address</label>

                        <input
                            type="email"
                            name="secondEmail"
                            id="secondEmail"
                            placeholder="doe@example.com"
                            onChange={props.onChange}
                            value={secondEmail}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>Enter your phone number</label>

                        <PhoneInput
                            value={mobileNumber}
                            onChange={handleChange}
                            inputClass="phone"
                        />
                    </Form.Field>
                    <Button onClick={saveAndContinue} color="green">Save and Continue</Button>
                </Form>
            </div>
        </Container>
    )
}

export default index
