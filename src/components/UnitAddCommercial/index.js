import React, {
  useState
} from "react";

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
  Form,
  Button,
  Label,
  Container,
  Segment,
} from "semantic-ui-react";
import "./unitAddFive.scss";

function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange,
  };

  return [value, inputProps];
}
const Commercials = (props) => {
  const {
    state,
    action
  } = useStateMachine(updateAction);

  const {
    handleSubmit,
    register
  } = useForm({
    defaultValues: state.yourDetails,
  });

  const {
    push
  } = useHistory();
  const onSubmit = (data) => {
    action(data);
    push("/result");
  };

  const [CommercialListingValue, listingInputProps] = useRadioButtons(
    "CommercialListing"
  );
  const [priceing, priceingInputProps] = useRadioButtons("PriceOnApplication");

  return ( <
    div className = "Commercials" >
    <
    UnitAddNav / >
    <
    Container >
    <
    Header > You have almost completed the listing..... < /Header>   <
    Form onSubmit = {
      handleSubmit(onSubmit)
    } >
    <
    Form.Group style = {
      {
        marginBottom: "40px"
      }
    } >
    <
    Form.Field width = {
      3
    } >
    <
    Label > Sale Price: < /Label>   <
    input ref = {
      register
    }
    className = "inputField"
    name = "salePrice"
    icon = "money"
    iconPosition = "left"
    type = "number"
    placeholder = "Sale Price" / >
    <
    /Form.Field>   <
    Form.Field width = {
      4
    }
    className = "checkBoxField"
    inline >
    <
    input ref = {
      register
    }
    value = "SalePriceAppliaction"
    checked = {
      priceing === "SalePriceAppliaction"
    } {
      ...priceingInputProps
    }
    />   <
    Label > PRICE ON APPLICATION < /Label>   <
    /Form.Field >   <
    Form.Field width = {
      3
    } >
    <
    Label > Rent Price: < /Label>   <
    input className = "inputField"
    ref = {
      register
    }
    name = "rentPrice"
    icon = "money"
    iconPosition = "left"
    type = "number"
    placeholder = "Rent Price" / >
    <
    /Form.Field>   <
    Form.Field width = {
      3
    }
    className = "checkBoxField"
    inline >
    <
    input ref = {
      register
    }
    value = "RentPriceAppliaction"
    checked = {
      priceing === "RentPriceAppliaction"
    } {
      ...priceingInputProps
    }
    />   <
    Label > PRICE ON APPLICATION < /Label>   <
    /Form.Field >   <
    /Form.Group>  <
    Label > Listing type: < /Label>   <
    Segment basic className = "ListingSegment" >
    <
    Form.Group inline >

    <
    input className = "radioInput"
    ref = {
      register
    }
    value = "publicListing"
    checked = {
      CommercialListingValue === "publicListing"
    } {
      ...listingInputProps
    }
    />   <
    Label style = {
      {
        marginRight: "70px"
      }
    } > PUBLIC < /Label>

    <
    input ref = {
      register
    }
    value = "offmarketListing"
    checked = {
      CommercialListingValue === "offmarketListing"
    } {
      ...listingInputProps
    }
    />   <
    Label > OFF - MARKET < /Label> <
    /Form.Group >   <
    /Segment>   <
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
    } < /Button>  <
    /div >    <
    /Form>   <
    /Container>  <
    /div >
  );
};

export default Commercials;