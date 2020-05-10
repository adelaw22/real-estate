import React, { Component } from "react";
import NavBar2 from "../Navbar2";
import {
  Container,
  Grid,
  Image,
  Header,
  Button,
  Divider,
  Menu
} from "semantic-ui-react";
import RoomOne from "../images/blue 1.png";
import RoomTwo from "../images/blue 3.png";
import RoomThree from "../images/blue 2.png";
import RoomFour from "../images/blue 4.png";
import EmailContact from "../images/Email Contact.png";
import Bedroom from "../images/Rectangle 12.png";
import Bathrooms from "../images/Rectangle 10.png";
import "./SingleUnit.scss";
import Bank from "../images/Bank.png";
import Shop from "../images/Shop.png";
import School from "../images/School.png";
import Worship from "../images/Worship.png";
import Restaurant from "../images/Restaurant.png";
import Transport from "../images/Transport.png";
import HealthCare from "../images/hospital.png";
import Entertainment from "../images/Entertainment.png";
import FullSize from "../images/Rectangle 11.png";

export class SingleUnit extends Component {
  render() {
    return (
      <div className='Singleunit-page'>
        <NavBar2 />
        <Container
          style={{
            paddingTop: "40px"
          }}
        >
          <Grid>
            <Grid.Column width={10}>
              <Grid.Row>
                <Image src={RoomOne} />
              </Grid.Row>
              <Grid.Row
                style={{
                  display: "flex",
                  marginTop: "36px"
                }}
              >
                <Grid.Column>
                  <Image
                    src={RoomTwo}
                    style={{
                      width: "200px",
                      height: "110px"
                    }}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    src={RoomFour}
                    style={{
                      width: "200px",
                      height: "110px",
                      marginLeft: "39px",
                      marginRight: "39px"
                    }}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    src={RoomThree}
                    style={{
                      width: "200px",
                      height: "110px"
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
              <Divider className='Main'></Divider>

              <div className='propertyFeatures'>
                <div className='propertyAddress'>
                  <Header
                    style={{
                      color: "#1149b6",
                      fontSize: "24px",
                      marginBottom: "10px"
                    }}
                  >
                    Lavington
                  </Header>
                  <p>James Gichuru Road</p>
                </div>

                <Header className='priceHeader'>$72000</Header>
              </div>

              <Divider></Divider>

              <Grid
                style={{
                  width: "100%",
                  fontWeight: "700",
                  fontSize: "17px",
                  marginTop: "30px",
                  marginBottom: "40px"
                }}
              >
                <Grid.Column width={5}>
                  <p style={{ color: "#84848" }}>Bedrooms</p>
                  <p style={{ display: "flex" }}>
                    4 <Image src={Bedroom} style={{ marginLeft: "10px" }} />
                  </p>
                  <p style={{ color: "#84848", marginTop: "20px" }}>Built</p>
                  <p>2008</p>
                </Grid.Column>
                <Grid.Column width={6} style={{ paddingLeft: "80px" }}>
                  <p style={{ color: "#84848" }}>Bathrooms</p>
                  <p style={{ display: "flex" }}>
                    2 <Image src={Bathrooms} style={{ marginLeft: "10px" }} />
                  </p>
                  <p style={{ color: "#84848", marginTop: "20px" }}>Packing</p>
                  <p>1 indoor</p>
                </Grid.Column>
                <Grid.Column width={5} style={{ paddingLeft: "80px" }}>
                  <p style={{ color: "#84848" }}>Area space</p>
                  <p>1024 ft</p>
                  <p style={{ color: "#84848", marginTop: "20px" }}>
                    Area safety
                  </p>
                  <p style={{ color: "#08f508de" }}>Good</p>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column
              width={5}
              style={{
                marginLeft: "60px"
              }}
            >
              <div className='AgentProfile'>
                <div className='profilePicture'></div> <p> Agent </p>
                <Header> Jane Doe </Header>
                <Button
                  secondary
                  style={{
                    display: "flex",
                    marginTop: "40px"
                  }}
                >
                  <p
                    style={{
                      marginTop: "3px",
                      marginBottom: "5px"
                    }}
                  >
                    {" "}
                    +544 7 ** * ** *
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      textDecoration: "underline",
                      marginTop: "3px",
                      marginLeft: "10px",
                      marginBottom: "5px"
                    }}
                  >
                    Show Number
                  </p>
                </Button>
                <Button
                  primary
                  style={{
                    display: "flex",
                    marginTop: "18px"
                  }}
                >
                  Contact Agent{" "}
                  <Image
                    src={EmailContact}
                    style={{
                      marginLeft: "72px"
                    }}
                  />
                </Button>
              </div>
              <div className='Map-sec'> </div>
            </Grid.Column>
          </Grid>

          <Header
            style={{ textAlign: "center", fontSize: "28px", color: "#1149b6" }}
          >
            Places Around
          </Header>

          <Divider style={{ marginBottom: "0px" }}></Divider>
          <Menu pointing secondary widths={8} icon='labeled'>
            <Menu.Item>
              <Image src={Bank} />
              BANKS
            </Menu.Item>
            <Menu.Item>
              <Image src={Shop} />
              SHOPS
            </Menu.Item>
            <Menu.Item>
              <Image src={School} />
              SCHOOLS
            </Menu.Item>
            <Menu.Item>
              <Image src={Worship} />
              WORSHIP
            </Menu.Item>
            <Menu.Item>
              <Image src={Restaurant} />
              RESTAURANT
            </Menu.Item>
            <Menu.Item>
              <Image src={Transport} />
              TRANSPORT
            </Menu.Item>
            <Menu.Item>
              <Image src={HealthCare} />
              HEALTH CARE
            </Menu.Item>
            <Menu.Item>
              <Image src={Entertainment} />
              ENTERTAINMENT
            </Menu.Item>
          </Menu>

          <div className='biggerMap'></div>

          <div className='similarHomes'>
            <div className='topHeader'>
              <Header>Similar Homes</Header>

              <Button primary>View All</Button>
            </div>

            <Grid>
              <Grid.Column width={5}>
                <Image className='Rooms' src={RoomFour} />
                <div className='Home-details'>
                  <div class='Home-address'>
                    <p style={{ marginBottom: "5px" }}>James Gichuru Road</p>
                    <Header style={{ marginTop: "5px" }}>Lavington</Header>
                  </div>
                  <Header className='Payment'>Ksh 450000</Header>
                </div>
                <Divider></Divider>
                <Grid style={{ margin: "auto" }}>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={Bathrooms} />2
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={Bedroom} />3
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={FullSize} />
                      1520 ft
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column width={5}>
                <Image className='Rooms' src={RoomFour} />
                <div className='Home-details'>
                  <div class='Home-address'>
                    <p style={{ marginBottom: "5px" }}>James Gichuru Road</p>
                    <Header style={{ marginTop: "5px" }}>Lavington</Header>
                  </div>
                  <Header className='Payment'>Ksh 450000</Header>
                </div>
                <Divider></Divider>
                <Grid style={{ margin: "auto" }}>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={Bathrooms} />2
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={Bedroom} />3
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={FullSize} />
                      1520 ft
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>

              <Grid.Column width={5}>
                <Image className='Rooms' src={RoomFour} />
                <div className='Home-details'>
                  <div class='Home-address'>
                    <p style={{ marginBottom: "5px" }}>James Gichuru Road</p>
                    <Header style={{ marginTop: "5px" }}>Lavington</Header>
                  </div>
                  <Header className='Payment'>Ksh 450000</Header>
                </div>
                <Divider></Divider>
                <Grid style={{ margin: "auto" }}>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={Bathrooms} />2
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={Bedroom} />3
                    </p>
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <p style={{ display: "flex" }}>
                      <Image style={{ marginRight: "10px" }} src={FullSize} />
                      1520 ft
                    </p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

export default SingleUnit;
