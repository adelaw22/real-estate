import React from "react";
// eslint-disable-next-line
import {
  useForm
} from "react-hook-form";

import {
  useHistory
} from "react-router-dom";
import {
  useStateMachine
} from "little-state-machine";
import updateAction from "../UnitAddNav/updateAction";
import UnitAddNav from "../UnitAddNav"

import {
  Header,
  Label,
  Button,
  Segment,
  input,
  Form,
  Container
} from "semantic-ui-react";
import "./unitGallery.scss";

const Gallery = (props) => {

  const {
    // eslint-disable-next-line
    state,
    action
  } = useStateMachine(updateAction);
  const {
    handleSubmit,
    register,
  } = useForm();

  const {
    push
  } = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    action(data);
    push("/details");
  };

  return ( <
    div className = "Gallery" >
    <
    UnitAddNav / >
    <
    Container >
    <
    Header > You have completed 70 % of the listing..... < /Header>  <
    Form onSubmit = {
      handleSubmit(onSubmit)
    } >
    <
    Segment basic >
    <
    Label > Home Images: < /Label> <
    div className = "eachInput" >
    <
    input ref = {
      register
    }
    name = "homeImage"
    type = "file"
    required multiple / >
    <
    p > At least one image is required < /p>  <
    /div >  <
    Label > Floor Plans: < /Label>  <
    div className = "eachInput" >
    <
    input ref = {
      register
    }
    type = "file"
    fluid multiple name = "floorPlans" >
    <
    /input>  <
    /div>  <
    Label > Energy Certificate: < /Label>  <
    div className = "eachInput" >
    <
    input ref = {
      register
    }
    name = "energyCertificate"
    type = "file"
    fluid multiple >
    <
    /input>  <
    /div>  <
    Label > Home Videos: < /Label>  <
    div className = "eachInput" >
    <
    input ref = {
      register
    }
    name = "homeVideo"
    type = "file"
    fluid multiple >
    <
    /input>  <
    /div >  <
    div className = 'ButtonContainer' >
    <
    Button floated = 'left'
    className = 'backButton' > {
      " "
    }
    Back {
      " "
    } <
    /Button> <
    Button floated = 'right'
    className = 'nextButton'
    type = 'submit' >
    Next {
      " "
    } <
    /Button> <
    /div> <
    /Segment> <
    /Form >  <
    /Container> <
    /div>
  );
};

export default Gallery;