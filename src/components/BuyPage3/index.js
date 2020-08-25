import React, { Component } from "react";
import RentNav from "../RentNav";
//import AppMap from "../AppMap";
import "./BuyPage3.scss";
import {
  Link
} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
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
import Bank from "../images/Bank.png";
import Shop from "../images/Shop.png";
import School from "../images/School.png";
import Worship from "../images/Worship.png";
import Restaurant from "../images/Restaurant.png";
import Transport from "../images/Transport.png";
import HealthCare from "../images/hospital.png";
import Entertainment from "../images/Entertainment.png";
import ApartPics from "../images/image 3.png";
import FullSize from "../images/Rectangle 11.png";
import AgentPicture from "../images/Avater2.png"
export class BuyPage3 extends Component {
  render() {
    return (
      <div className='Details-page'>
        <RentNav />
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
            </Grid.Column>

            {/*profile row*/}
            <Grid.Column
              width={5}
              style={{
                marginLeft: "60px"
              }}
            >
              <Grid.Row style={{ marginBottom: "16px" }}>
                <div className='AgentProfile'>
                  <Image className="profilePicture" src={AgentPicture} avatar/>
                   
                  <Header>Paul Molive </Header>
                  <p> Owner </p>
                  <p> +544 7 ** * ** *</p>
                  <Button
                    primary
                   >
                     Proceed to Buy
                  </Button>
                </div>
              </Grid.Row>

              <Grid.Row style={{ paddingTop: "30px" }}>
                <div className='Map-sec'>
                  <AppMap />
                </div>
              </Grid.Row>
            </Grid.Column>
            {/*Profile row ends here*/ }

            <div className='Amenities'>
              <Header>Amenities</Header>

              <div className='Facilities'>
                <div className='BoxOne'>
                  <div className='BoxTwo'>
                    <p>Golf Court</p>
                  </div>
                </div>

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
                      margin:"0px 12px"
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
                <Grid.Column width={5} style={{ paddingRight: "0px", textAlign:"center" }}>
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
             <Grid style={{width:"100%", margin:'0px'}}>
                <Grid.Row style={{width:"100%", marginBottom: "16px" }}>
                <div className='AgentProfile'>
                  <Image className="profilePicture" src={AgentPicture} avatar/>
                   
                  <Header>Paul Molive </Header>
                  <p> Owner </p>
                  <p> +544 7 ** * ** *</p>
                  <Button
                    primary
                   >
                     Proceed to Buy
                  </Button>
                </div>
              </Grid.Row>

              <Grid.Row style={{ width:"100%",paddingTop: "30px" }}>
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
                    <p>Golf Court</p>
                  </div>
                </div>

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

          <Header
            style={{
              textAlign: "center",
              fontSize: "28px",
              color: "#1149b6",
              marginTop: "0px",
              paddingTop: "40px"
            }}
          >
            Places Around
          </Header>

          <Divider style={{ marginBottom: "0px" }}></Divider>
          <Menu pointing secondary widths={8} icon='labeled' className="second-navBar">
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

          <div className='biggerMap'>
            <AppMap />
          </div>
        </Container>

        <Divider className="DownLine"></Divider>

        <div className='similarHomes'>
            <div className='topHeader'>
              <Header>Similar Homes</Header>

              <Button primary>View All</Button>
            </div>
              <Responsive  minWidth={768}>
                 <Grid
              style={{
                width: "100%"
              }}
            >
              <Grid.Column width={5}>
                <div className='cardLike'>
                  <Image src={ApartPics} />
                  <div className='propertyDetails'>
                    <div className='leftDetails'>
                      <p className='PropertyName'> The Real(Property Name) </p>
                      <p> By Paul Molive(seller) </p>
                      <Grid
                        style={{
                          margin: "auto"
                        }}
                      >
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bathrooms}
                              size='tiny'
                            />
                            2{" "}
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bedroom}
                              size='tiny'
                            />
                            3
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px",
                                height: "25px"
                              }}
                              src={FullSize}
                              size='tiny'
                            />
                            1520 ft{" "}
                          </p>
                        </Grid.Column>
                      </Grid>
                      <p className='propertyLocation'>
                        {" "}
                        Adekunle Fajuyi, Thomas Street{" "}
                      </p>
                    </div>

                    <div className='rightDetails'>
                      <p> Price At </p>
                      <p className='priceTag'> $2000.50 </p>
                      <p className='propertyStatus'> For Sell </p>
                      <Button
                        content='See Details'
                        onClick={this.handleClick}
                        primary
                        className='detailsbtn'
                        as={Link}
                        to={ROUTES.BUYPAGE3}
                      />
                    </div>
                  </div>
                </div>
              </Grid.Column>

              <Grid.Column width={5}>
                <div className='cardLike'>
                  <Image src={ApartPics} />
                  <div className='propertyDetails'>
                    <div className='leftDetails'>
                      <p className='PropertyName'> The Real(Property Name) </p>
                      <p> By Paul Molive(seller) </p>
                      <Grid
                        style={{
                          margin: "auto"
                        }}
                      >
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bathrooms}
                              size='tiny'
                            />
                            2{" "}
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bedroom}
                              size='tiny'
                            />
                            3
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px",
                                height: "25px"
                              }}
                              src={FullSize}
                              size='tiny'
                            />
                            1520 ft{" "}
                          </p>
                        </Grid.Column>
                      </Grid>
                      <p className='propertyLocation'>
                        {" "}
                        Adekunle Fajuyi, Thomas Street{" "}
                      </p>
                    </div>

                    <div className='rightDetails'>
                      <p> Price At </p>
                      <p className='priceTag'> $2000.50 </p>
                      <p className='propertyStatus'> For Sell </p>
                      <Button
                        content='See Details'
                        onClick={this.handleClick}
                        primary
                        className='detailsbtn'
                         as={Link}
                        to={ROUTES.BUYPAGE3}
                      />
                    </div>
                  </div>
                </div>
              </Grid.Column>

              <Grid.Column width={5}>
                <div className='cardLike'>
                  <Image src={ApartPics} />
                  <div className='propertyDetails'>
                    <div className='leftDetails'>
                      <p className='PropertyName'> The Real(Property Name) </p>
                      <p> By Paul Molive(seller) </p>
                      <Grid
                        style={{
                          margin: "auto"
                        }}
                      >
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bathrooms}
                              size='tiny'
                            />
                            2{" "}
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bedroom}
                              size='tiny'
                            />
                            3
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px",
                                height: "25px"
                              }}
                              src={FullSize}
                              size='tiny'
                            />
                            1520 ft{" "}
                          </p>
                        </Grid.Column>
                      </Grid>
                      <p className='propertyLocation'>
                        {" "}
                        Adekunle Fajuyi, Thomas Street{" "}
                      </p>
                    </div>

                    <div className='rightDetails'>
                      <p> Price At </p>
                      <p className='priceTag'> $2000.50 </p>
                      <p className='propertyStatus'> For Sell </p>
                      <Button
                        content='See Details'
                        onClick={this.handleClick}
                        primary
                        className='detailsbtn'
                         as={Link}
                        to={ROUTES.BUYPAGE3}
                      />
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </Grid>
              </Responsive>

              <Responsive minWidth={320} maxWidth={767}>
                 <Grid>
                   <Grid.Row>
                 <div className='cardLike'>
                  <Image src={ApartPics} />
                  <div className='propertyDetails'>
                    <div className='leftDetails'>
                      <p className='PropertyName'> The Real(Property Name) </p>
                      <p> By Paul Molive(seller) </p>
                      <Grid
                        style={{
                          margin: "auto"
                        }}
                      >
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bathrooms}
                              size='tiny'
                            />
                            2{" "}
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bedroom}
                              size='tiny'
                            />
                            3
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px",
                                height: "25px"
                              }}
                              src={FullSize}
                              size='tiny'
                            />
                            1520 ft{" "}
                          </p>
                        </Grid.Column>
                      </Grid>
                      <p className='propertyLocation'>
                        {" "}
                        Adekunle Fajuyi, Thomas Street{" "}
                      </p>
                    </div>

                    <div className='rightDetails'>
                      <p> Price At </p>
                      <p className='priceTag'> $2000.50 </p>
                      <p className='propertyStatus'> For Sell </p>
                      <Button
                        content='See Details'
                        onClick={this.handleClick}
                        primary
                        className='detailsbtn'
                        as={Link}
                        to={ROUTES.BUYPAGE3}
                      />
                    </div>
                  </div>
                </div>
               </Grid.Row>

               <Grid.Row>
                 <div className='cardLike'>
                  <Image src={ApartPics} />
                  <div className='propertyDetails'>
                    <div className='leftDetails'>
                      <p className='PropertyName'> The Real(Property Name) </p>
                      <p> By Paul Molive(seller) </p>
                      <Grid
                        style={{
                          margin: "auto"
                        }}
                      >
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bathrooms}
                              size='tiny'
                            />
                            2{" "}
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bedroom}
                              size='tiny'
                            />
                            3
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px",
                                height: "25px"
                              }}
                              src={FullSize}
                              size='tiny'
                            />
                            1520 ft{" "}
                          </p>
                        </Grid.Column>
                      </Grid>
                      <p className='propertyLocation'>
                        {" "}
                        Adekunle Fajuyi, Thomas Street{" "}
                      </p>
                    </div>

                    <div className='rightDetails'>
                      <p> Price At </p>
                      <p className='priceTag'> $2000.50 </p>
                      <p className='propertyStatus'> For Sell </p>
                      <Button
                        content='See Details'
                        onClick={this.handleClick}
                        primary
                        className='detailsbtn'
                        as={Link}
                        to={ROUTES.BUYPAGE3}
                      />
                    </div>
                  </div>
                </div>
               </Grid.Row>

               <Grid.Row>
                 <div className='cardLike'>
                  <Image src={ApartPics} />
                  <div className='propertyDetails'>
                    <div className='leftDetails'>
                      <p className='PropertyName'> The Real(Property Name) </p>
                      <p> By Paul Molive(seller) </p>
                      <Grid
                        style={{
                          margin: "auto"
                        }}
                      >
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bathrooms}
                              size='tiny'
                            />
                            2{" "}
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px"
                              }}
                              src={Bedroom}
                              size='tiny'
                            />
                            3
                          </p>
                        </Grid.Column>
                        <Grid.Column width={5} style={{ padding: "0px" }}>
                          <p
                            style={{
                              display: "flex"
                            }}
                          >
                            <Image
                              style={{
                                marginRight: "10px",
                                width: "24px",
                                height: "25px"
                              }}
                              src={FullSize}
                              size='tiny'
                            />
                            1520 ft{" "}
                          </p>
                        </Grid.Column>
                      </Grid>
                      <p className='propertyLocation'>
                        {" "}
                        Adekunle Fajuyi, Thomas Street{" "}
                      </p>
                    </div>

                    <div className='rightDetails'>
                      <p> Price At </p>
                      <p className='priceTag'> $2000.50 </p>
                      <p className='propertyStatus'> For Sell </p>
                      <Button
                        content='See Details'
                        onClick={this.handleClick}
                        primary
                        className='detailsbtn'
                        as={Link}
                        to={ROUTES.BUYPAGE3}
                      />
                    </div>
                  </div>
                </div>
               </Grid.Row>
                 </Grid>
              </Responsive>
        </div>
      </div>
    );
  }
}

export default BuyPage3;
