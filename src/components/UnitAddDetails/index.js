import React, { useState, useEffect } from "react";

import {
  useForm,
  // eslint-disable-next-line
  ErrorMessage
} from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useHistory } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../UnitAddNav/updateAction";

import {
  Header,
  Form,
  Segment,
  Button,
  Checkbox,
  Container
} from "semantic-ui-react";
import "./unitaddthree.scss";
import UnitAddNav from "../UnitAddNav";

// eslint-disable-next-line
function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}

const options = [
  {
    key: "bathtub",
    label: "Bathtubs",
    value: "bathtubs"
  },
  {
    key: "garden",
    label: "Garden",
    value: "garden"
  },
  {
    key: "swimmingpool",
    label: "Swimig Pool",
    value: "swimmingpool"
  },
  {
    key: "doghouse",
    label: "Dog House",
    value: "doghouse"
  },
  {
    key: "automategates",
    label: "Automated Gates",
    value: "automatedGates"
  },
  {
    key: "furnishes",
    label: "Furnished",
    value: "furnished"
  }
];

//Function starts here:

const Details = props => {
  const { state, action } = useStateMachine(updateAction);
  const {
    handleSubmit,
    // eslint-disable-next-line
    errors,
    setValue,
    register
  } = useForm({
    defaultValues: state.yourDetails
  });

  const { push } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/commercials");
  };

  const [values, setReactSelect] = useState({
    selectedOption: []
  });

  const handleMultiChange = selectedOption => {
    setValue("detailsTags", selectedOption);
    setReactSelect({
      selectedOption
    });
  };

  useEffect(() => {
    register({
      name: "detailsTags"
    });
  }, [register]);

  const animatedComponents = makeAnimated();

  return (
    <div className='detailsPage'>
      <UnitAddNav />
      <Container>
        <Header> You have completed 50 % of the listing..... </Header>
        <Form onSubmit={handleSubmit(onSubmit)} stackable>
          <Segment basic>
            <Form.Group widths='equal'>
              <Form.Field>
                <label className='labelSec'> Bedrooms: </label>
                <input
                  ref={register}
                  name='bedroomsCount'
                  className='inputBoxes'
                  type='number'
                  placeholder='Enter the numbers of Bedrooms..'
                />
              </Form.Field>
              <Form.Field>
                <label className='labelSec'> Bathrooms: </label>
                <input
                  ref={register}
                  className='inputBoxes'
                  name='bathroomsCount'
                  type='number'
                  placeholder='Enter the numbers of Bathrooms..'
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal' className='formGroup'>
              <Form.Field>
                <label className='labelSec'>
                  {" "}
                  360 Walk through Video link(Matterport):{" "}
                </label>
                <input
                  ref={register}
                  name='walkThroughVideoLInk'
                  className='inputBoxes'
                  type='Text'
                  placeholder='Copy your 360 degree link here......'
                />
              </Form.Field>
              <Form.Field>
                <label className='labelSec'> Youtube link here: </label>
                <input
                  ref={register}
                  className='inputBoxes'
                  name='youtubeWalkThroughVideoLInk'
                  type='Text'
                  placeholder='Copy your link here.'
                />
              </Form.Field>
            </Form.Group>

            <label className='Amenities'> Select Amenities: </label>

            <div className='checkButtonContainer'>
              <div className="BoxGrid">
                <div className='checkBoxRow'>
                  <Checkbox label='Furninshed' name='furninshes' ref={register} />

                  <Checkbox label='Bathtub' name='bathtub' ref={register} />

                  <Checkbox label='Garden' name='garden' ref={register} />

                  <Checkbox
                    label='automategates'
                    name='automateGates'
                    ref={register}
                  />

                  <Checkbox
                    label='Air Condition'
                    name='airConditioned'
                    ref={register}
                  />

                  <Checkbox label='Walk Area' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />
                </div>
                <div className='checkBoxRow'>
                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />
                </div>
              </div>
             <div className="BoxGrid">
                <div className='checkBoxRow'>
                  <Checkbox label='Air Condition' name='' ref={register} />
                  <Checkbox label='Air Condition' name='' ref={register} />
                  <Checkbox label='Air Condition' name='' ref={register} />
                  <Checkbox label='Furninshed' name='furninshes' ref={register} />
                  <Checkbox label='Bathtub' name='bathtub' ref={register} />
                  <Checkbox label='Garden' name='garden' ref={register} />
                  <Checkbox label='Air Condition' name='' ref={register} />
                  <Checkbox
                    label='automategates'
                    name='automateGates'
                    ref={register}
                  />{" "}
                </div>
                <div className='checkBoxRow '>
                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />

                  <Checkbox label='Air Condition' name='' ref={register} />
                </div>
             </div>
            </div>

            <div className='tagsContainer'>
              <label className='AddTag'> Add Tags: </label>
              <Select
                name='homeTypeTags'
                placeholder='Select from tags..'
                fluid
                isMulti
                closeMenuOnSelect={false}
                components={animatedComponents}
                value={values.selectedOption}
                options={options}
                onChange={handleMultiChange}
                className='selctOption'
              />
            </div>
            <div className='ButtonContainer'>
              <Button floated='left' className='backButton'>
                {" "}
                Back{" "}
              </Button>
              <Button floated='right' className='nextButton' type='submit'>
                Next{" "}
              </Button>
            </div>
          </Segment>
        </Form>
      </Container>
    </div>
  );
};

export default Details;
