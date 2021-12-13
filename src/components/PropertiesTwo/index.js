import React, { Component } from "react";
import "./propertiesTwo.scss";
import NavThree from "../NavThree";
import AppMap from "../AppMap";
import ApartPics from "../images/image 3.png";
import { Container, Button, Header, Grid, Image, Select,Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

class propertiesTwo extends Component {
    render() {
        return (
            <div className="propertyFilter">
                <NavThree />
                <div className="filterBtns">
                    <Container>
                        <Button>For Rent</Button>
                        <Button> Any Price</Button>
                        <Button>Any Beds</Button>
                        <Button>Any Baths</Button>
                        <Button>Property types</Button>
                        <Button>More</Button>
                    </Container>
                </div>

                <Container>
                    <div className="topSection">
                        <Header>2000 properties in this area</Header>

                        <div className="rec-btn">
                        <Select className='leftBtn' placeholder='Recommend'/>

                            <Button className="hide-btn" as={Link} to={ROUTES.PROPERTIESONE}>Hide Map  <Icon fitted name='map marker alternate' /></Button>
                        </div>
                    </div>

                    <div className="prop-location">
                        <Grid>
                            <Grid.Column width={8}>
                                    <div className='cardLike'>
                                        <Image src={ApartPics} />
                                        <div className='propertyDetails'>
                                            <div className='text-Details'>
                                                <p className='PropertyName'>$ 200,000 </p>
                                                <p>24682 Demevest Avenue </p>
                                                <p>Arlington, TX</p>
                                            </div>
                                            <div className="image-Details">
                                                <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                                                <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                                                <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                                            </div>
                                        </div>
                                    </div>
                             
                                    <div className='cardLike'>
                                        <Image src={ApartPics} />
                                        <div className='propertyDetails'>
                                            <div className='text-Details'>
                                                <p className='PropertyName'>$ 200,000 </p>
                                                <p>24682 Demevest Avenue </p>
                                                <p>Arlington, TX</p>
                                            </div>
                                            <div className="image-Details">
                                                <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                                                <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                                                <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className='cardLike'>
                                        <Image src={ApartPics} />
                                        <div className='propertyDetails'>
                                            <div className='text-Details'>
                                                <p className='PropertyName'>$ 200,000 </p>
                                                <p>24682 Demevest Avenue </p>
                                                <p>Arlington, TX</p>
                                            </div>
                                            <div className="image-Details">
                                                <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                                                <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                                                <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                                            </div>
                                        </div>
                                    </div>
                               
                            </Grid.Column>

                             <Grid.Column width={8}>
                                    <div className='cardLike'>
                                        <Image src={ApartPics} />
                                        <div className='propertyDetails'>
                                            <div className='text-Details'>
                                                <p className='PropertyName'>$ 200,000 </p>
                                                <p>24682 Demevest Avenue </p>
                                                <p>Arlington, TX</p>
                                            </div>
                                            <div className="image-Details">
                                                <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                                                <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                                                <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                                            </div>
                                        </div>
                                    </div>
                             
                                    <div className='cardLike'>
                                        <Image src={ApartPics} />
                                        <div className='propertyDetails'>
                                            <div className='text-Details'>
                                                <p className='PropertyName'>$ 200,000 </p>
                                                <p>24682 Demevest Avenue </p>
                                                <p>Arlington, TX</p>
                                            </div>
                                            <div className="image-Details">
                                                <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                                                <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                                                <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div className='cardLike'>
                                        <Image src={ApartPics} />
                                        <div className='propertyDetails'>
                                            <div className='text-Details'>
                                                <p className='PropertyName'>$ 200,000 </p>
                                                <p>24682 Demevest Avenue </p>
                                                <p>Arlington, TX</p>
                                            </div>
                                            <div className="image-Details">
                                                <span> <i class="fas fa-bed" ></i> <p>2bd</p></span>
                                                <span> <i class="fas fa-bath"></i><p>2ba</p></span>
                                                <span><i class="fas fa-home"></i> <p>2,581 sqft</p></span>
                                            </div>
                                        </div>
                                    </div>
                               
                            </Grid.Column>
                        </Grid>
                        <div className="displayedMap">
                            <AppMap />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

}

export default propertiesTwo;