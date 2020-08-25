import React, { Component } from "react";
import "./BuyPage2.scss";
import RentNav from "../RentNav";
import Filter from "../images/Group 478.png";
import Apartment from "../images/212.png";
import Bedroom from "../images/Rectangle 12.png";
import Bathrooms from "../images/Rectangle 10.png";
import FullSize from "../images/Rectangle 11.png";
import Favorite from "../images/Favorite.png";
import profiler from "../images/Avater2.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import {
  Image,
  Grid,
  Container,
  Button,
  Divider,
  Responsive
} from "semantic-ui-react";

class BuyPage2 extends Component {
  render() {
    return (
      <div className='BuyPage2'>
        <RentNav />

        <div className='topImage'></div>
        <Container>
          <div className='salesProperty'>
            <div className='topHeader'>
              <div className='filterBtn'>
                <div className='switchButton'>
                  <Button className='leftBtn' attached='left' primary>
                    {" "}
                    Buy{" "}
                  </Button>
                  <Button attached='right'> Rent </Button>
                </div>

                <div className='FilterSpot'>
                  <Image src={Filter} />
                  <p className='filterText'> Filter </p>
                </div>
              </div>

              <p className='leftHeader'>
                {" "}
                2000 Properties for Sale in Thomas Street{" "}
              </p>
            </div>

            <Responsive minWidth={768} >
              <Grid>
                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>

                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>

                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>

                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>
              </Grid>
            </Responsive>

            <Responsive minWidth={320} maxWidth={767}>
              <Grid>
                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>

                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>

                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>
                
                <Grid.Row>
                  <div className='sampleHome'>
                    <Image className='ApartmentImage' src={Apartment} />

                    <div className='details'>
                      <div className='firstDetails'>
                        <div className='leftDetails'>
                          <p className='PropertyName'>
                            {" "}
                            The Real(Property Name){" "}
                          </p>
                          <p style={{ marginBottom: "24px" }}>
                            {" "}
                            By Paul Molive(seller){" "}
                          </p>
                          <p className='grayText'>Configuration</p>
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
                        </div>
                        <div className='favImage'>
                          <Image src={Favorite} />
                        </div>
                        <div className='rightDetails'>
                          <p> Price At </p>
                          <p className='priceTag'> $2000.50 </p>
                          <p className='propertyStatus'> For Sell </p>
                        </div>
                      </div>

                      <div className='secondDetails'>
                        <div className='location'>
                          <p className='grayText'>Location</p>
                          <p>Adekunle Fajuyi, Thomas Street</p>
                        </div>

                        <div className='Status'>
                          <p className='grayText'>Possession Status</p>
                          <p>Ready to Move</p>
                        </div>

                        <div className='Parking'>
                          <p className='grayText'>Parking</p>
                          <p>1 Indoor</p>
                        </div>
                      </div>
                      <Divider></Divider>
                      <div className='thirdDetails'>
                        <div className='profileLink'>
                          <Image src={profiler} avatar size='tiny' />
                          <div className='textProfile'>
                            <p>Paul Molive</p>
                            <p className='grayText'>Owner</p>
                          </div>
                        </div>
                        <div className='postedDate'>
                          <p>Posted: 1 week ago</p>
                        </div>

                        <div className='detailsBtn'>
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
                  </div>
                </Grid.Row>
              </Grid>
            </Responsive>
          </div>
        </Container>
      </div>
    );
  }
}

export default BuyPage2;
