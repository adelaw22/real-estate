import React, {
  useState
} from "react";
import {
  Header,
  Container,
  Form,
  TextArea,
  Button,
  Responsive
} from "semantic-ui-react";
import "./Contact.scss";
import Navigation from "../Navigation";
import SideBarDrawer from "../Sidebar";

const Contact = () => {

  const [sideBarOpen, setsideBarOpen] = useState(false);

  // useEffect(() => {

  //     return () => {
  //         cleanup
  //     }
  // }, [input])

  console.log("sidebar", sideBarOpen);
  return ( <
    div className = 'ContactSec' >

    <
    SideBarDrawer openSideBar = {
      setsideBarOpen
    }
    sideBarOpen = {
      sideBarOpen
    }
    /> <
    Navigation click = {
      setsideBarOpen
    }
    /> <
    div className = 'top-section' >

    <
    Header > Get in touch with us < /Header>  <
    p >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas sed urna eu mi viverra aliquam. < /p> < /
    div >

    <
    div className = "FormSec" >
    <
    Container >
    <
    Header > Contact Us < /Header>  <
    div className = 'formAddress' >


    <
    Form >
    <
    Responsive minWidth = {
      768
    } >
    <
    Form.Group unstackable widths = {
      2
    }
    style = {
      {
        marginBottom: '28px'
      }
    } >
    <
    Form.Input label = 'Name'
    placeholder = 'Jane Doe'
    required / >
    <
    Form.Input label = 'Address'
    placeholder = 'Resident Address' / >
    <
    /Form.Group>

    <
    Form.Group unstackable widths = {
      2
    }
    style = {
      {
        marginBottom: '28px'
      }
    } >
    <
    Form.Input label = 'E-mail'
    placeholder = 'Example@.com'
    required / >
    <
    Form.Input label = 'Phone Number'
    placeholder = 'XXXX XXX XXXX'
    required / >
    <
    /Form.Group>

    <
    Form.Field control = {
      TextArea
    }
    label = 'Message'
    required style = {
      {
        marginBottom: '28px',
        height: '120px'
      }
    }
    /> <
    Button content = 'Sumbit'
    primary style = {
      {
        marginBottom: '28px'
      }
    }
    />   < /
    Responsive > <
    /Form>


    <
    Responsive minWidth = {
      320
    }
    maxWidth = {
      767
    } >
    <
    Form >
    <
    Form.Group widths = {
      2
    } >
    <
    Form.Input label = 'Name'
    placeholder = 'Jane Doe'
    required style = {
      {
        marginBottom: '20px'
      }
    }
    /> <
    Form.Input label = 'Address'
    placeholder = 'Resident Address'
    style = {
      {
        marginBottom: '20px'
      }
    }
    /> < /
    Form.Group >

    <
    Form.Group widths = {
      2
    } >
    <
    Form.Input label = 'E-mail'
    placeholder = 'Example@.com'
    required style = {
      {
        marginBottom: '20px'
      }
    }
    /> <
    Form.Input label = 'Phone Number'
    placeholder = 'XXXX XXX XXXX'
    required style = {
      {
        marginBottom: '20px'
      }
    }
    /> < /
    Form.Group >

    <
    Form.Field control = {
      TextArea
    }
    label = 'Message'
    required style = {
      {
        marginBottom: '20px',
        height: '120px'
      }
    }
    /> <
    Button content = 'Sumbit'
    primary style = {
      {
        marginBottom: '20px'
      }
    }
    />  < /
    Form > <
    /Responsive>

    <
    div className = 'AddressInText' >
    <
    p className = 'phead' > Location & Detail < /p>  <
    p > Lorem ipsum dolor sit amet, consectetur adipiscing elit.In lacinia ullamcorper rhoncus.pellentesque rhoncus libero nec ipsum egestas aliquam. < /p> <p className = 'phead' > Address </p >
    <
    p > 356 - 676 - 876 Scheuvront Drive, Broomfield, Colorad(CO) < /p>  <
    p className = 'phead' > E - mail < /p>  <
    p > info @demevest.com < /p>  < /
    div > <
    /div>  < /
    Container > <
    /div>  < /
    div >
  );

};

export default Contact;