import React, { useState, useRef } from 'react'
import { Header, Container, Divider, Icon, Form, Button } from 'semantic-ui-react'
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import Cards from 'react-credit-cards';
import "react-credit-cards/lib/styles.scss";

const stripePromise = loadStripe('pk_test_plFeVM9YFcItCMg9IZTbBMXL00KYV26Big');



const CheckOutform = () => {
    const [cardDetails, setCardDetails] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    })
    const handleInputFocus = (e) => {
        setCardDetails(prevState => ({
            focus: e.target.name
        }))
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setCardDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <div>
            <Container>
                <div className="form-box">
                    <Header as='h2' className="m-3">
                        <Icon name='credit card outline' />
                        <Header.Content>
                            Payment Details
                        <Header.Subheader>Add some basic payment details...</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Divider />
                    <Cards
                        cvc={cardDetails.cvc}
                        expiry={cardDetails.expiry}
                        focused={cardDetails.focus}
                        name={cardDetails.name}
                        number={cardDetails.number}
                    />
                    <Form>
                        <Form.Field>
                            <label>CardNumber</label>
                            <input
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </Form.Field>
                        <Form.Group>
                            <Form.Input
                                width="10"
                                fluid
                                id='form-subcomponent-shorthand-input-first-name'
                                label='First name'
                                placeholder='Expiry'
                            />
                            <Form.Input
                                width="4"
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='Last name'
                                placeholder='CVC'
                            />
                        </Form.Group>
                        <Button onClick={saveAndContinue} color="green">Complete</Button>
                    </Form>
                </div>
            </Container>
        </div>
    )
}




export default Index