import React, {
  useState
} from "react";
import {
  withFireBase
} from "../Firebase";

import {
  Container,
  Form,
  Grid,
  Button,
  Header,
  Divider,
  Message
} from "semantic-ui-react";
import {
  withRouter
} from "react-router-dom";
import {
  compose
} from "recompose";

import "./SignIn.scss";
import {
  SignUpLink
} from "../SignUp";
import {
  useForm
} from "react-hook-form";
import SignInGoogleBase from "../SignInGoogle";
import {
  Link
} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Navigation from "../Navigation";
import SideBarDrawer from "../Sidebar";

const SignInPage = () => {
  const [sideBarOpen, setsideBarOpen] = useState(false);

  // useEffect(() => {

  //     return () => {
  //         cleanup
  //     }
  // }, [input])

  console.log("sidebar", sideBarOpen);
  return ( <
    div >
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
    />

    <
    Container >
    <
    Grid columns = {
      1
    }
    centered >
    <
    Grid.Column mobile = {
      16
    }
    tablet = {
      8
    }
    largeScreen = {
      6
    }
    computer = {
      6
    }
    style = {
      {
        marginTop: "28px"
      }
    } >
    <
    Header as = 'h3'
    textAlign = 'center' >
    Sign In <
    /Header> <
    Divider / >
    <
    SignInForm / >
    <
    SignUpLink login = {
      true
    }
    to = {
      ROUTES.SIGN_UP
    }
    name = {
      "Sign Up"
    }
    /> < /
    Grid.Column > <
    /Grid> < /
    Container > <
    /div>
  );
};

// const INITIAL_STATE = {
//     email: '',
//     password: '',
//     error: null,
// };

const SignInFormBase = props => {
  const {
    handleSubmit,
    register,
    errors
  } = useForm();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = values => {
    setLoading(true);
    console.log("values", values);
    const {
      email,
      password
    } = values;
    props.firebase
      .doSignInUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("response si", response);
        setLoading(false);
        setLoginDetail({
          email: "",
          password: ""
        });
        props.history.push(ROUTES.ACCOUNT);
      })
      .catch(error => {
        setLoading(false);
        setError(error["message"]);
        setLoginDetail({
          email: "",
          password: ""
        });
      });

    // e.preventDefault();
  };

  const onChange = e => {
    setLoginDetail({
      ...loginDetail,
      [e.target.name]: e.target.value
    });
  };

  return ( <
      div > {
        error.length > 0 ? ( <
          Message error header = 'Sorry Login failed'
          content = {
            error
          }
          />
        ) : (
          ""
        )
      } <
      Form onSubmit = {
        handleSubmit(onSubmit)
      } >
      <
      Form.Field required >
      <
      label > Email < /label> <
      input name = 'email'
      onChange = {
        onChange
      }
      value = {
        loginDetail.email
      }
      width = {
        8
      }
      ref = {
        register({
          required: "Please enter an email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "A valid email is required"
          }
        })
      }
      type = 'email'
      placeholder = 'Email' /
      >
      {
        errors.email && ( <
          small className = 'text-danger' > {
            errors.email.message
          } < /small>
        )
      } <
      /Form.Field> <
      Form.Field required >
      <
      label > Password < /label> <
      input name = 'password'
      onChange = {
        onChange
      }
      value = {
        loginDetail.password
      }
      type = 'password'
      width = {
        8
      }
      placeholder = 'Password'
      ref = {
        register({
          required: "Please enter your password",
          minLength: 3
        })
      }
      />{" "} {
      errors.password && ( <
        small className = 'text-danger' > {
          errors.password.message
        } < /small>
      )
    } <
    /Form.Field> <
  Button loading = {
    loading
  }
  type = 'submit'
  fluid primary as = {
    Link
  }
  to = {
      ROUTES.BUYPAGE
    } >
    Sign In <
    /Button> <
  SignInGoogleBase / >
    <
    /Form> < /
  div >
);
};

const SignInForm = compose(withRouter, withFireBase)(SignInFormBase);

export default SignInPage;
export {
  SignInForm
};