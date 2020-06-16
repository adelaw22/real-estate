import React, { useState } from "react";

import {
  Container,
  Header,
  Button,
  Grid,
  Image,
  Divider,
  Responsive
} from "semantic-ui-react";
import "./landing.scss";
import Navigation from "../Navigation";
import SideBarDrawer from "../Sidebar";
import Media from "../images/Media.png";
import Media2 from "../images/Media (1).png";
import logo from "../images/Logo 01.png";
import vector1 from "../images/Group 308.png";
import vector2 from "../images/Group 307.png";
import vector3 from "../images/Group 306.png";
import Avatar from "../images/Media Person.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const LandingPage = () => {
  const [sideBarOpen, setsideBarOpen] = useState(false);

  // useEffect(() => {

  //     return () => {
  //         cleanup
  //     }
  // }, [input])

  console.log("sidebar", sideBarOpen);

  return (
    <div className='landingPage'>
      <SideBarDrawer openSideBar={setsideBarOpen} sideBarOpen={sideBarOpen} />
      <Navigation click={setsideBarOpen} />

      <div className='firstSec'>
        <Container>
          <div className='Section-content'>
            <Header style={{ color: "white" }}>BUY, SELL AND RENT</Header>
            <p>
              You can get all the best deals for units for renting, buying and
              sell all under one roof
            </p>
            <Button content='Secondary' as={Link} to={ROUTES.SIGN_IN}>Get Started</Button>
          </div>
        </Container>
      </div>

      <div className='secondSec'>
        <Responsive minWidth={768}>
          <Grid container columns={2}>
            <Grid.Column style={{ marginTop: "1.875em" }}>
              <div
                className='inner-column'
                style={{ width: "70%", paddingTop: "40px" }}
              >
                <Header style={{ color: "#1149b6" }}>
                  Homes with a difference
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Grid.Column>

            <Grid.Column style={{ marginTop: "1.875em" }}>
              <Image
                style={{ margin: "1.25em auto", width: "70%" }}
                src={Media}
              />
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive minWidth={320} maxWidth={767}>
          <Grid container rows={2}>
            <Grid.Row style={{ marginTop: "1.875em" }}>
              <Image
                style={{ margin: "1.25em auto", width: "50%" }}
                src={Media}
              />
            </Grid.Row>
            <Grid.Row style={{ marginTop: "1.875em" }}>
              <div className='inner-column'>
                <Header style={{ color: "#1149b6" }}>
                  Homes with a difference
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Grid.Row>
          </Grid>
        </Responsive>

        <Responsive minWidth={768}>
          <Grid container columns={2}>
            <Grid.Column style={{ marginTop: "1.875em" }}>
              <Image
                style={{ margin: "1.25em auto", width: "70%" }}
                src={Media2}
              />
            </Grid.Column>
            <Grid.Column style={{ marginTop: "1.875em" }}>
              <div
                className='inner-column'
                style={{ width: "70%", paddingTop: "40px" }}
              >
                <Header style={{ color: "#1149b6" }}>
                  Homes with a difference
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Grid.Column>
          </Grid>
        </Responsive>
        <Responsive minWidth={320} maxWidth={767}>
          <Grid container rows={2}>
            <Grid.Row style={{ marginTop: "1.875em" }}>
              <Image
                style={{ margin: "1.25em auto", width: "50%" }}
                src={Media2}
              />
            </Grid.Row>
            <Grid.Row style={{ marginTop: "1.875em" }}>
              <div className='inner-column'>
                <Header style={{ color: "#1149b6" }}>
                  Homes with a difference
                </Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Grid.Row>
          </Grid>
        </Responsive>
      </div>

      <div className='thirdSec'>
        <Container>
          <Header className='topHeader'>
            Buying a home doesn’t have to be a mystery..
          </Header>

          <Divider section style={{ color: "color: #1149b6" }} />

          <Responsive minWidth={768}>
            <Grid container columns={3}>
              <Grid.Column
                className='gridContent'
                style={{ margin: "auto", width: "30%" }}
              >
                <Image src={vector1} />
                <Header>Easier</Header>
                <p>
                  Its now more convinient to buy, sell and view potential home
                </p>
              </Grid.Column>

              <Grid.Column
                className='gridContent'
                style={{ margin: "auto", width: "30%" }}
              >
                <Image src={vector2} />
                <Header>Secure</Header>
                <p>
                  Its now more convinient to buy, sell and view potential home
                </p>
              </Grid.Column>

              <Grid.Column
                className='gridContent'
                style={{ margin: "auto", width: "30%" }}
              >
                <Image src={vector3} />
                <Header>Details</Header>
                <p>
                  Its now more convinient to buy, sell and view potential home
                </p>
              </Grid.Column>
            </Grid>
          </Responsive>

          <Responsive minWidth={320} maxWidth={767}>
            <Grid container rows={3}>
              <Grid.Row className='gridContent' style={{ margin: "auto" }}>
                
                <Image src={vector1} />
                <Header>Easier</Header>
                <p>
                  Its now more convinient to buy, sell and view potential home
                </p>
              </Grid.Row>

              <Grid.Row className='gridContent' style={{ margin: "auto" }}>
                <Image src={vector2} />
                <Header>Secure</Header>
                <p>
                  Its now more convinient to buy, sell and view potential home
                </p>
              </Grid.Row>

              <Grid.Row className='gridContent' style={{ margin: "auto" }}>
                <Image src={vector3} />
                <Header>Details</Header>
                <p>
                  Its now more convinient to buy, sell and view potential home
                </p>
              </Grid.Row>
            </Grid>
          </Responsive>
        </Container>

        <div className='second-layer'>
          <div className='card-layer'>
            <div className='text-layer'>
              <p style={{ marginBottom: "5px" }}>Why Us</p>
              <Header>Custom Homes</Header>
              <p style={{ fontSize: "16px" }}>
                The homes have personalized to suit your taste in interior
                design. You get what you see and get what you want.
              </p>
            </div>
          </div>
        </div>

        <div className='companies'>
          <Header>Trusted by the World’s Best Companies</Header>

          <Responsive minWidth={768}>
            <Image.Group
              size='tiny'
              style={{ textAlign: "center", width: "100%" }}
            >
              <Image src={logo} />
              <Image src={logo} />
              <Image src={logo} />
              <Image src={logo} />
              <Image src={logo} />
              <Image src={logo} />
            </Image.Group>
          </Responsive>

          <Responsive minWidth={320} maxWidth={767}>
            <Image.Group
              size='tiny'
              style={{ textAlign: "center", width: "100%" }}
            >
              <Image src={logo} style={{ width: "60px" }} />
              <Image src={logo} style={{ width: "60px" }} />
              <Image src={logo} style={{ width: "60px" }} />
              <Image src={logo} style={{ width: "60px" }} />
              <Image src={logo} style={{ width: "60px" }} />
              <Image src={logo} style={{ width: "60px" }} />
            </Image.Group>
          </Responsive>
        </div>
      </div>

      <div className='Section4  '>
        <Header>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.”
        </Header>
        <Image src={Avatar} style={{ margin: "auto" }} />
        <p style={{ marginTop: "16px" }}>
          Maria Lopez, VP of Design at Meshery
        </p>
      </div>

      <div className='free-trial'>
        <Header>Are you an agent find clients fast</Header>
        <p>
          Find your next client fast and easy by posting your new home and
          allowing clients find you
        </p>
        <Button content='Secondary' as={Link} to={ROUTES.SIGN_UP}>Start free trial</Button>
      </div>
    </div>
  );
};

export default LandingPage;
