import React, {
  useState,
  useEffect
} from "react";
import {
  useForm
} from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  useHistory
} from "react-router-dom";
import {
  useStateMachine
} from "little-state-machine";
import updateAction from "../UnitAddNav/updateAction";

import {
  Button,
  Header,
  Form,
  Segment,
  Label,
  Container
} from "semantic-ui-react";
import "./unitAddone.scss";
import UnitAddNav from "../UnitAddNav"

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

const options = [{
    key: "villa",
    label: "Villa",
    value: "villa"
  },
  {
    key: "apartment",
    label: "Apartment",
    value: "apartment"
  },
  {
    key: "bungalow",
    label: "Bungalow",
    value: "bungalow"
  },
  {
    key: "caravan",
    label: "Caravan",
    value: "caravan"
  },
  {
    key: "castle",
    label: "Castle",
    value: "castle"
  },
  {
    key: "condominium",
    label: "Condominium ",
    value: "condominium"
  },
  {
    key: "cottage",
    label: "Cottage",
    value: "cottage"
  },
  {
    key: "dormitory",
    label: "Dormitory",
    value: "dormitory"
  },
  {
    key: "duplex",
    label: "Duplex",
    value: "duplex"
  },
  {
    key: "turf",
    label: "Turf houses",
    value: "turf"
  },
  {
    key: "townHouse",
    label: "Town House",
    value: "townhouse"
  },
  {
    key: "singleDetatched",
    text: "Single Family Detached House",
    value: "SingleDetachedHouse"
  }
];

const General = props => {
  const {
    state,
    action
  } = useStateMachine(updateAction);

  const {
    push
  } = useHistory();
  const onSubmit = data => {
    action(data);
    push("/location");
  };

  const [values, setReactSelect] = useState({
    selectedOption: []
  });

  const handleMultiChange = selectedOption => {
    setValue("typeofHomeTags", selectedOption);
    setReactSelect({
      selectedOption
    });
  };
  const {
    handleSubmit,
    // eslint-disable-next-line
    errors,
    setValue,
    register
  } = useForm({
    defaultValues: state.yourDetails
  });

  useEffect(() => {
    register({
      name: "typeofHomeTags"
    });
  }, [register]);

  const animatedComponents = makeAnimated();

  const [ListingValue, listingInputProps] = useRadioButtons("Listing");
  return ( <
    div className = 'generalPage' >
    <
    UnitAddNav / >
    <
    Container >
    <
    Header > It will just take few minutes....... < /Header>{" "} <
    Form unstackable onSubmit = {
      handleSubmit(onSubmit)
    } >
    <
    Segment basic >
    <
    Label className = 'topLabel' > I am listing: < /Label>{" "}  <
    div className = 'radioContainer' >
    <
    Form.Group inline widths = 'equal' >
    <
    Segment className = 'RadioSegment' >
    <
    Label > SALE < /Label>{" "}  <
    input className = 'radioButtons'
    ref = {
      register
    }
    value = 'saleAppliaction'
    checked = {
      ListingValue === "saleAppliaction"
    } {
      ...listingInputProps
    }
    />  < /
    Segment > {
      " "
    } <
    Segment className = 'RadioSegment' >
    <
    Label > RENT < /Label>{" "}  <
    input className = 'radioButtons'
    ref = {
      register
    }
    value = 'rentAppliaction'
    checked = {
      ListingValue === "rentAppliaction"
    } {
      ...listingInputProps
    }
    />{" "}  < /
    Segment > {
      " "
    } <
    Segment className = 'RadioSegment' >
    <
    Label > LISTING < /Label>{" "}  <
    input className = 'radioButtons'
    ref = {
      register
    }
    value = 'listAppliaction'
    checked = {
      ListingValue === "listAppliaction"
    } {
      ...listingInputProps
    }
    />  < /
    Segment > {
      " "
    } <
    /Form.Group>{" "}  < /
    div > {
      " "
    } <
    Form.Group widths = {
      2
    }
    size = 'massive' >
    <
    Segment basic >
    <
    Label className = 'topLabel' > Name your Home: < /Label>{" "}  <
    input ref = {
      register
    }
    className = 'inputinfo'
    name = 'homeName'
    icon = 'money'
    iconPosition = 'left'
    type = 'text'
    placeholder = 'Home Name........' / >
    <
    /Segment>{" "}  <
    Segment basic style = {
      {
        marginTop: "0px"
      }
    } >

    <
    Label className = 'topLabel' > Type of Home: < /Label>{" "}  <
    Select name = 'homeType'
    placeholder = 'Select from tags..'
    fluid isMulti closeMenuOnSelect = {
      false
    }
    components = {
      animatedComponents
    }
    value = {
      values.selectedOption
    }
    options = {
      options
    }
    onChange = {
      handleMultiChange
    }
    className = 'selctOption' / >
    <
    /Segment>{" "}  < /
    Form.Group > {
      " "
    } <
    Label className = 'topLabel' > Home description: < /Label>{" "}  <
    textArea ref = {
      register
    }
    name = 'homeDescription'
    className = 'TextArea'
    placeholder = 'Give the best description about your home........ '
    style = {
      ({
        minHeight: 100
      }, {
        maxHeight: 50
      })
    }
    />{" "}  <
    div className = 'ButtonContainer' >
    <
    Button floated = 'right'
    className = 'nextButton' >
    Next {
      " "
    } < /Button>{" "}  < /
    div > {
      " "
    } <
    /Segment>{" "}  < /
    Form > {
      " "
    } < /Container>  < /
    div >
  );
};

export default General;