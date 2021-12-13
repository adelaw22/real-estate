import React, { Component } from "react";
import "./profileDetails.scss";
// import * as ROUTES from "../../constants/routes";
// import { Link } from "react-router-dom";
import NavTwo from "../NavTwo";
import { Header, Tab, Form, Button, Divider, Image, Icon } from "semantic-ui-react";
import discover from "../images/discover.png";
import master from "../images/mastercard.png";
import visa from "../images/visa.png";
import user from "../images/user.png";

class ProfileDetails extends Component {
  // state ={activeItem: 'Basic Information'}

  // handleItemClick = (e, {name}) => this.setState({activeItem:name})

  render() {
    // const {activeItem}= this.state

    let panes = [
      {
        menuItem: "Basic Information",
        render: () => (
          <Tab.Pane>
            <div className='profile-section'>
              <div className='profileImg'>
                <Image src={user} size='tiny' circular />
                <p>Click to Upload Image</p>
              </div>

              <Form>
                <Form.Field>
                  <input type='text' name='' placeholder='Full Name' />
                </Form.Field>
                <Form.Field>
                  <input type='text' name='' placeholder='Phone Number' />
                </Form.Field>
                <Form.Field>
                  <input type='text' name='' placeholder='Street Address' />
                </Form.Field>
                <Form.Field>
                  <input type='text' name='' placeholder='City' />
                </Form.Field>
                <Form.Field>
                  <input
                    type='text'
                    name=''
                    placeholder='State/Province/Region'
                  />
                </Form.Field>
                <Form.Field>
                  <input type='text' name='' placeholder='Zip/Postal Code' />
                </Form.Field>
                <Form.Field>
                  <input type='text' name='' placeholder='Country/Region' />
                </Form.Field>
                <Button fluid primary role='submit'>
                  {" "}
                  Save{" "}
                </Button>
              </Form>
            </div>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Payment Method",
        render: () => (
          <Tab.Pane>
            <div className='paymentForm'>
              <div className='cardImages'>
                <Image src={discover} />
                <Image src={master} />
                <Image src={visa} />
              </div>
              <Form>
                <Form.Field>
                  <input
                    type='tel'
                    name='number'
                    placeholder='Card Number'
                    // onChange = {
                    //     handleInputChange
                    // }
                    // onFocus = {
                    //     handleInputFocus
                    // }
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    type='text'
                    name='cardName'
                    placeholder='Name on card'
                  />
                </Form.Field>
                <Form.Group>
                  <Form.Input
                    width='10'
                    fluid
                    id=''
                    className="date_input"
                    placeholder='MM/YY'
                  />
                  <Form.Input
                    width='6'
                    fluid
                    id=''
                    placeholder='CVC'
                  />
                </Form.Group>
                <Button className='saveBtn' fluid primary role='submit'>
                  {" "}
                  Save{" "}
                </Button>
                <span className='Or-sec'>
                  <Divider />
                  <p>or</p>
                  <Divider />
                </span>
                <Button fluid primary>
                <Icon name='paypal' />
                  {" "}
                  Paypal{" "}
                </Button>
              </Form>
            </div>
          </Tab.Pane>
        )
      }
    ];

    return (
      <div className='Details'>
        <NavTwo />
        <Header> Profile </Header>
        <div className='profileSection'>
          <Tab panes={panes} />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default ProfileDetails;
