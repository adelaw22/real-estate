import React, { Component } from "react";
import NavThree from "../NavThree";
import "./ForSale.scss";
// import {Link} from "react-router-dom";
// import * as ROUTES from "../../constants/routes";
import {
  Grid,
  Container,
  Image,
  Divider,
  Header,
  Button,
  Menu,
  Responsive
} from "semantic-ui-react";
import RoomOne from "../images/blue 1.png";
import RoomTwo from "../images/blue 3.png";
import RoomThree from "../images/blue 2.png";
import RoomFour from "../images/blue 4.png";
import AppMap from "../AppMap";
import Bedroom from "../images/Rectangle 12.png";
import Bathrooms from "../images/Rectangle 10.png";
import AgentPicture from "../images/Avater2.png";
import ApartPics from "../images/image 3.png";


export class ForSale extends Component {
  render() {
    return (
      <div className='Details-page'>
        <NavThree />
        <Container
          style={{
            paddingTop: "40px"
          }}
        >
          <Responsive minWidth={768}>
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

                <div className='propertyFeatures'>
                  <div className='propertyAddress'>
                    <Header>
                      34851 Swayhill Rd
                    </Header>
                    <p>Arlington, TX 92798</p>
                    <div className="image-Details">
                      <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                      <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                      <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                    </div>
                  </div>
                  <div className='priceFeatures'>
                    <Header>$ 405,000</Header>
                    <p>Mortage $ 2,500/mo</p>
                  </div>
                </div>

                <Divider className="v-line"></Divider>

                <Grid
                  style={{
                    width: "100%",
                    fontWeight: "700",
                    fontSize: "17px",
                    marginTop: "30px",
                    marginBottom: "40px"
                  }}
                >
                  <Grid.Column width={8}>
                    <div className='Facilities'>

                      <div className='BoxOne'>
                        <p>Floor Plan</p></div>
                      <div className='BoxOne'>
                        <p>Energy Certificate</p>
                      </div>


                    </div>

                  </Grid.Column>
                  <Grid.Column width={4} style={{ paddingLeft: "40px" }}>
                    <div className="features">
                      <p className="gray-text">Bedrooms</p>
                      <span> <i class="fas fa-bed" ></i> <p>2</p></span>
                    </div>

                    <div className="features">
                      <p className="gray-text">Area space</p>
                      <span><i class="fas fa-home"></i><p>2,581 sqft</p></span>
                    </div>

                    <div className="features">
                      <p className="gray-text">Built</p>
                      <span><p>2018</p></span>
                    </div>

                  </Grid.Column>
                  <Grid.Column width={4} style={{ paddingLeft: "40px" }}>
                    <div className="features">
                      <p className="gray-text">Bathrooms</p>
                      <span><i class="fas fa-bath"></i><p>2</p></span>
                    </div>

                    <div className="features">
                      <p className="gray-text">Packing</p>
                      <span><i class="fas fa-parking"></i><p>2 spaces</p></span>
                    </div>

                    <div className="features">
                      <p className="gray-text">Area safety</p>
                      <div className="safety"><p>Great</p></div>
                    </div>

                  </Grid.Column>
                </Grid>


              </Grid.Column>

              {/*profile row*/}
              <Grid.Column
                width={5}
                style={{
                  marginLeft: "30px"
                }}
              >
                <Grid.Row style={{ marginBottom: "16px" }}>
                  <div className='AgentProfile'>
                    <Image className="profilePicture" src={AgentPicture} avatar />

                    <Header>Paul Molive </Header>

                    <Button
                      primary
                    > Rent This Property</Button>
                  </div>
                </Grid.Row>

                <Grid.Row style={{ paddingTop: "16px" }}>
                  <div className='Map-sec'>
                    <AppMap />
                  </div>
                </Grid.Row>
              </Grid.Column>
              {/*Profile row ends here*/}
            </Grid>
          </Responsive>

          <Responsive minWidth={320} maxWidth={767}>
            <Grid>
              <Grid.Row>
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
                        width: "100px",
                        height: "80px"
                      }}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Image
                      src={RoomFour}
                      style={{
                        width: "100px",
                        height: "80px",
                        margin: "0px 12px"
                      }}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Image
                      src={RoomThree}
                      style={{
                        width: "100px",
                        height: "80px"
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
                  <div className='priceFeatures'>
                    <p>Price At</p>
                    <Header className='priceHeader'>$72000</Header>
                    <p className='redText'>For Sale</p>
                  </div>
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
                  <Grid.Column width={5} style={{ paddingLeft: "0px" }}>
                    <p style={{ color: "#84848" }}>Bedrooms</p>
                    <p style={{ display: "flex" }}>
                      4 <Image src={Bedroom} style={{ marginLeft: "10px" }} />
                    </p>
                    <p style={{ color: "#84848", marginTop: "20px" }}>Built</p>
                    <p>2008</p>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <p style={{ color: "#84848" }}>Bathrooms</p>
                    <p style={{ display: "flex" }}>
                      2 <Image src={Bathrooms} style={{ marginLeft: "10px" }} />
                    </p>
                    <p style={{ color: "#84848", marginTop: "20px" }}>Packing</p>
                    <p>1 indoor</p>
                  </Grid.Column>
                  <Grid.Column width={5} style={{ paddingRight: "0px", textAlign: "center" }}>
                    <p style={{ color: "#84848" }}>Area space</p>
                    <p>1024 ft</p>
                    <p style={{ color: "#84848", marginTop: "20px" }}>
                      Area safety
                  </p>
                    <p style={{ color: "#08f508de" }}>Good</p>
                  </Grid.Column>
                </Grid>

                <div className='Facilities'>
                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Energy Certificate</p>
                    </div>
                  </div>

                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Floor Plan</p>
                    </div>
                  </div>
                </div>
              </Grid.Row>

              <Grid.Row>
                <Grid style={{ width: "100%", margin: '0px' }}>
                  <Grid.Row style={{ width: "100%", marginBottom: "16px" }}>
                    <div className='AgentProfile'>
                      <Image className="profilePicture" src={AgentPicture} avatar />

                      <Header>Poul Molive </Header>

                      <Button
                        primary
                      >
                        Proceed to Buy
                  </Button>
                    </div>
                  </Grid.Row>

                  <Grid.Row style={{ width: "100%", paddingTop: "20px" }}>
                    <div className='Map-sec'>
                      <AppMap />
                    </div>
                  </Grid.Row>
                </Grid>
              </Grid.Row>

              <div className='Amenities'>
                <Header>Amenities</Header>

                <div className='Facilities'>


                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Helipad</p>
                    </div>
                  </div>

                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Mini-cinema</p>
                    </div>
                  </div>

                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Packing Space</p>
                    </div>
                  </div>

                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Garage</p>
                    </div>
                  </div>

                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Swimming Pool</p>
                    </div>
                  </div>

                  <div className='BoxOne'>
                    <div className='BoxTwo'>
                      <p>Gym</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>


          </Responsive>

          <Header className="local-info">
            Local Information
          </Header>
          <Menu secondary widths={8} icon='labeled' className="local-navBar">
            <Menu.Item>
              <i class="fas fa-university"></i>
              Banks
            </Menu.Item>
            <Menu.Item>
              <i class="fas fa-shopping-cart"></i>
              Shops
            </Menu.Item>
            <Menu.Item>
              <i class="fas fa-school"></i>
              Schools
            </Menu.Item>
            <Menu.Item>
              <i class="fas fa-place-of-worship"></i>
              Worships
            </Menu.Item>
            <Menu.Item>
              <i class="fas fa-utensils"></i>
              Restaurants
            </Menu.Item>
            <Menu.Item>
              <i class="fas fa-bus-alt"></i>
              Transport
            </Menu.Item>
            <Menu.Item>
              <i class="fas fa-hospital"></i>
              Hospitals
            </Menu.Item>
            <Menu.Item>
              <i class="fas fa-film"></i>
              Entertainment
            </Menu.Item>
          </Menu>

          <div className='biggerMap'>
            <AppMap />
          </div>

          <div className="Amenities">
            <Header>Amenities</Header>

            <div className="amenities-item">
              <div className="item-col">

                <span>
                  <i class="fas fa-circle"></i>
                  <p>Single Family Home</p>
                </span>

                <span>
                  <i class="fas fa-circle"></i>
                  <p>Dining Room, Family Room, Pantry</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Cooling System: Central</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Microwave</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Fridgerator</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Porch</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Garden</p>
                </span>

                <span>
                  <i class="fas fa-circle"></i>
                  <p>Pool</p>
                </span>

              </div>

              <div className="item-col">

                <span>
                  <i class="fas fa-circle"></i>
                  <p>Heating: Forced Air</p>
                </span>

                <span>
                  <i class="fas fa-circle"></i>
                  <p>Fitness Center</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Vaulted Ceiling</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Attached Garage</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Fireplace</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Double Paned Windows</p>
                </span>
                <span>
                  <i class="fas fa-circle"></i>
                  <p>Lawn</p>
                </span>

                <span>
                  <i class="fas fa-circle"></i>
                  <p>Deck</p>
                </span>

              </div>
            </div>
          </div>

          <div className="property-description">
            <Header>Description</Header>

            <p>Spectacular Pool Home offers unmatched Indoor and Outdoor Living and Luxurious Accommodations to create a Stunning One-Of-A-Kind Property! Situated on a private lot, this 4 Bedroom,
               4.5 Bathroom home is True Masterpiece of Design and an Entertainers Dream! The open floor plan and high end upgrades impress immediately upon entry with Gorgeous oversized High Gloss Tile Flooring that runs throughout the first floor living area.
               The Spacious Great Room features a Designer Wall with Custom Inset Linear Heat-Glo Fireplace, Plantation Shutters and two sets of retractable sliding doors open to the Courtyard, California Room and Backyard Oasis.
                Continue to the Chef's Kitchen featuring upgrades in every direction including a massive Built-In Refrigerator, Upgraded Cabinets and Countertops, Double Ovens, Pantry and Convenient Prep Kitchen to keep all dishes out of sight.</p>
          </div>

          <div className='similarHomes'>
            <div className='topHeader'>
              <Header>Similar Homes You Like</Header>

              <Grid>

                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <Image src={ApartPics} />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-sink"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                      </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <Image src={ApartPics} />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-sink"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                      </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <Image src={ApartPics} />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-sink"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                      </div>
                    </div>
                  </div>
                </Grid.Column>
              </Grid>

              <div className='moreLink'>
                <Button className="linkBtn">See All </Button>
              </div>
            </div>



          </div>
        </Container>




      </div>
    );
  }
}

export default ForSale;
