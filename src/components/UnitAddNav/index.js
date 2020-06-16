import React from "react";
import {
  Link
} from "react-router-dom";
import {
  createStore
} from "little-state-machine";
// import { DevTool } from "little-state-machine-devtools";

// eslint-disable-next-line
import {
  Icon,
  Menu
} from "semantic-ui-react";
import "./unitAddNav.scss";
// eslint-disable-next-line
import results from "./results";
import NavBar from "../Navbar2";

createStore({
  yourDetails: {
    typeofHomeTags: "",
    homeName: "",
    homeType: "",
    homeDescription: "",
    homeAddress: "",
    lineAddress: "",
    city: "",
    state: "",
    country: "",
    HomeAddress: "",
    homeImage: "",
    floorPlans: "",
    energyCertificate: "",
    homeVideo: "",
    detailsTags: "",
    bedroomsCount: "",
    bathroomsCount: "",
    walkThroughVideoLInk: "",
    youtubeWalkThroughVideoLInk: "",
    furninshes: "",
    garden: "",
    automateGates: "",
    airConditioned: "",
    bathtub: "",
    walkArea: "",
    homeTypeTags: "",
    salePrice: "",
    CommercialListingValue: "",
    priceing: "",
    rentPrice: ""
  }
});

const UnitAddNav = () => {
  return ( <
    div className = "headerPage" >
    <
    NavBar / >
    <
    Menu className = "UnitNav"
    size = "massive"
    stackable widths = {
      5
    } >
    <
    Menu.Item className = 'SingleItem' >
    <
    Link to = "/general"
    style = {
      {
        color: "black"
      }
    } >
    General <
    /Link> <
    Icon name = "arrow alternate circle right outline "
    className = "Menuicon" /
    >
    <
    /Menu.Item> <
    Menu.Item className = 'SingleItem' >
    <
    Link to = "/location"
    style = {
      {
        color: "black"
      }
    } >
    Location <
    /Link> <
    Icon name = "arrow alternate circle right outline "
    className = "Menuicon" /
    >
    <
    /Menu.Item> <
    Menu.Item className = 'SingleItem' >
    <
    Link to = "/details"
    style = {
      {
        color: "black"
      }
    } >
    Details <
    /Link> <
    Icon name = "arrow alternate circle right outline "
    className = "Menuicon" /
    >
    <
    /Menu.Item> <
    Menu.Item className = 'SingleItem' >
    <
    Link to = "/gallery"
    style = {
      {
        color: "black"
      }
    } >
    Gallery <
    /Link> <
    Icon name = "arrow alternate circle right outline "
    className = "Menuicon" /
    >
    <
    /Menu.Item> <
    Menu.Item className = 'SingleItem' >
    <
    Link to = "/commercials"
    style = {
      {
        color: "black"
      }
    } >
    Commercials <
    /Link> <
    Icon name = "arrow alternate circle right outline "
    className = "Menuicon" /
    >
    <
    /Menu.Item> <
    /Menu> <
    /div>
  );
};

/*function unitAddpage() {
  return ( <
    StateMachineProvider >
    <
    div className = 'container' >
    <
    Router >
    <
    Pages / >
    <
    /Router>  < /
    div > <
    /StateMachineProvider>
  );
}*/

export default UnitAddNav;