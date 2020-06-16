import React from 'react';
import "./UnitLocation.scss";
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
import AppMap from "../AppMap";
import UnitAddNav from "../UnitAddNav";


import {
    Header,
    Form,
    Segment,
    Container,
    Button
} from "semantic-ui-react";

const UnitLocation = () => {
    const {
        state,
        action
    } = useStateMachine(updateAction);
    const {
        handleSubmit,
        // eslint-disable-next-line
        errors,
        // eslint-disable-next-line
        setValue,
        register
    } = useForm({
        defaultValues: state.yourDetails
    });

    const {
        push
    } = useHistory();
    const onSubmit = data => {
        action(data);
        push("/details");
    };

    return ( <
        div className = "locationPage" >
        <
        UnitAddNav / >
        <
        Container >
        <
        Header > You are making progress... < /Header> <
        Form onSubmit = {
            handleSubmit(onSubmit)
        } >
        <
        Segment basic >
        <
        Form.Group widths = 'equal' >
        <
        Form.Field >
        <
        label > Home Address < /label>{" "} <
        input ref = {
            register
        }
        name = 'homeAddress'
        className = 'formInputs'
        type = 'Text'
        placeholder = 'Home Address..' /
        >
        <
        /Form.Field>{" "} <
        Form.Field >
        <
        label > Address Line No: < /label>{" "} <
        input ref = {
            register
        }
        className = 'formInputs'
        name = 'lineAddress'
        type = 'text'
        placeholder = 'Address No..' /
        >
        <
        /Form.Field>{" "} < /
        Form.Group > {
            " "
        } <
        Form.Group widths = 'equal'
        className = 'formGroup' >
        <
        Form.Field >
        <
        label > City < /label>{" "} <
        input ref = {
            register
        }
        name = 'city'
        className = 'formInputs'
        type = 'Text'
        placeholder = 'City.......' /
        >
        <
        /Form.Field>{" "} <
        Form.Field >
        <
        label > State: < /label>{" "} <
        input ref = {
            register
        }
        className = 'formInputs'
        name = 'state'
        type = 'Text'
        placeholder = 'State.' /
        >
        <
        /Form.Field>{" "} < /
        Form.Group > {
            " "
        } <
        Form.Group widths = 'equal'
        className = 'formGroup' >
        <
        Form.Field >
        <
        label > Country: < /label>{" "} <
        input ref = {
            register
        }
        className = 'formInputs'
        name = 'country'
        type = 'Text'
        placeholder = 'Country Name' /
        >
        <
        /Form.Field>{" "} <
        Form.Field >
        <
        label > Postal Code: < /label>{" "} <
        input ref = {
            register
        }
        className = 'formInputs'
        name = 'HomeAddress'
        type = 'Text'
        placeholder = 'Postal Code..' / >
        <
        /Form.Field> < /
        Form.Group > <
        label > Click on map to add marker
        for home address: < /label> <
        div className = 'good'
        fluid >
        <
        AppMap / >
        <
        /div> <
        div className = 'ButtonContainer' >
        <
        Button floated = 'left'
        className = 'backButton' >
        Back {
            " "
        } < /Button> <
        Button floated = 'right'
        className = 'nextButton' >
        Next {
            " "
        } < /Button> < /
        div > <
        /Segment> < /
        Form > <
        /Container>

        <
        /div>
    )
}

export default UnitLocation;