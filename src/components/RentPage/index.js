import React, { Component } from "react";
import "./RentPage.scss";
import NavTwo from "../NavTwo";
import CarouselOne from '../carousel-one';
import CarouselTwo from '../carousel-two';
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {
  Header,
  Input,
  Button,
  Container,
  Grid,
  Image,
  Divider,
  Responsive, Icon
} from "semantic-ui-react";
import ApartPics from "../images/image 3.png";
import Bedroom from "../images/Rectangle 12.png";
import Bathrooms from "../images/Rectangle 10.png";
import FullSize from "../images/Rectangle 11.png";

class RentPage extends Component {
  render() {
    return (
      <div className='BuyPage'>
        <NavTwo />
        <div className='topSec'>
          <Container>
            <Header>Choose your home that will feel like home </Header>
            <div className='SearchInput'>

              <div className='switchButton'>
                <Button className='leftBtn' attached='left'>
                  Buy
                  </Button>
                <Button className="rightBtn" attached='right' as={Link} to={ROUTES.PROPERTIESONE} > Rent </Button>
              </div>
              <Input icon='search' placeholder='Enter Location' size="big" />

            </div>
          </Container>
        </div>

        <div className='featuredProperties'>
          <Header> Featured Properties </Header>

          <div className='displayedProject'>
            <CarouselTwo />
          </div>
        </div>

        <div className='trendingProject'>
          <Header> Recommended Properties </Header>
          <Responsive minWidth={768}>
            <Grid>
              <Grid.Row
                style={{
                  width: "100%"
                }}
              >
                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <div className="new-fav">
                      <span>NEW</span>

                      <Icon name="heart" className="heart" />
                    </div>
                    <CarouselOne />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span><i class="fas fa-bath"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                      </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <div className="new-fav">
                      <span>NEW</span>

                      <Icon name="heart" className="heart" />
                    </div>
                    <CarouselOne />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                      </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <div className="new-fav">
                      <span>NEW</span>

                      <Icon name="heart" className="heart" />
                    </div>
                    <CarouselOne />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
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
                    <div className="new-fav">
                      <span>NEW</span>

                      <Icon name="heart" className="heart" />
                    </div>
                    <CarouselOne />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                      </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <div className="new-fav">
                      <span>NEW</span>

                      <Icon name="heart" className="heart" />
                    </div>
                    <CarouselOne />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                      </div>
                    </div>
                  </div>
                </Grid.Column>

                <Grid.Column width={5}>
                  <div className='cardLike'>
                    <div className="new-fav">
                      <span>NEW</span>

                      <Icon name="heart" className="heart" />
                    </div>
                    <CarouselOne />
                    <div className='propertyDetails'>
                      <div className='text-Details'>
                        <p className='PropertyName'>$ 200,000 </p>
                        <p>24682 Demevest Avenue </p>
                        <p>Arlington, TX</p>
                      </div>

                      <Divider className="detailed-line"></Divider>

                      <div className="image-Details">
                        <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                        <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                        <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
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
                      //to={ROUTES.BUYPAGE3}
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
                      //to={ROUTES.BUYPAGE3}
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
                      //to={ROUTES.BUYPAGE3}
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
                      //to={ROUTES.BUYPAGE3}
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
                      //to={ROUTES.BUYPAGE3}
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
                      //to={ROUTES.BUYPAGE3}
                      />
                    </div>
                  </div>
                </div>
              </Grid.Row>

            </Grid>
          </Responsive>

          <div className='moreLink'>
            <Button className="linkBtn" as={Link} to={ROUTES.PROPERTIESTWO} >See More </Button>
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
                <Header>Thomas Street (City2)</Header>
                <Divider></Divider>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
              </Grid.Column>

              <Grid.Column width={4} style={{ textAlign: "center" }}>
                <Header>Thomas Street (City3)</Header>
                <Divider></Divider>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
                <p>Adekunle Fajuyi</p>
              </Grid.Column>

              <Grid.Column width={4} style={{ textAlign: "center" }}>
                <Header>Thomas Street (City4)</Header>
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

              <Grid.Row style={{ marginTop: '20px' }}>
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

export default RentPage;
