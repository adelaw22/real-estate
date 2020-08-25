import React, { Component } from "react";
import "./BuyPage.scss";
import RentNav from "../RentNav";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {
  Header,
  Dropdown,
  Input,
  Button,
  Container,
  Grid,
  Image,
  Divider,
  Responsive
} from "semantic-ui-react";
import ApartPics from "../images/image 3.png";
import Bedroom from "../images/Rectangle 12.png";
import Bathrooms from "../images/Rectangle 10.png";
import FullSize from "../images/Rectangle 11.png";

class BuyPage extends Component {
  render() {
    return (
      <div className='BuyPage'>
        <RentNav />
        <div className='topSec'>
          <Container>
            <Header> Buy, Sell and Rent </Header>
            <p>
              You can get you all the best deals of units in renting, buying and
              selling all under one roof.{" "}
            </p>
            <div className='SearchInput'>
              <Dropdown text='Rent' className='button' />
              <Input placeholder='Enter Location' size='huge' />
              <Button
                icon='search'
                content='Search'
                onClick={this.handleClick}
                primary
              />
            </div>
          </Container>
        </div>

        <div className='featuredProperties'>
          <Header> Featured Properties </Header>
          <p className='specialText'> Handpicked projects for you </p>

          <div className='displayedProject'> </div>
        </div>

        <div className='trendingProject'>
          <Header> Trending Projects </Header>
          <p className='specialText'> Most desired projects </p>

          <Responsive minWidth={768}>
            <Grid>
            <Grid.Row
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
            </Grid.Row>

            <Grid.Row
              style={{
                width: "100%",
                marginTop: "40px"
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
            </Grid.Row>
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

          <div className='moreLink'>
            <p>See More</p>
            <Divider></Divider>
          </div>
        </div>

        <div className='localities'>
          <Header className='Heading'>
            Popular localities in Thomas Street
          </Header>

          <Responsive minWidth={768}>
            <Grid>
            <Grid.Column width={4} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>

            <Grid.Column width={4} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>

            <Grid.Column width={4} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>

            <Grid.Column width={4} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>
          </Grid>
          </Responsive>

          <Responsive minWidth={320} maxWidth={767}>
             <Grid>
               <Grid.Row>
                 <Grid.Column width={8} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>

            <Grid.Column width={8} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>
               </Grid.Row>

                <Grid.Row style={{marginTop:'20px'}}>
                 <Grid.Column width={8} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>

            <Grid.Column width={8} style={{ textAlign: "center" }}>
              <Header>Thomas Street (City1)</Header>
              <Divider></Divider>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
              <p>Adekunle Fajuyi</p>
            </Grid.Column>
               </Grid.Row>
             </Grid>
          </Responsive>
        </div>
      </div>
    );
  }
}

export default BuyPage;
