//The main pricing page

import React from "react";
import NavBar2 from "../Navbar2";
import "./pricing.scss";
import {
  Header,
  Container,
  Grid,
  Image,
  Button,
  Responsive
} from "semantic-ui-react";
import priceTag3 from "../images/price-tag.png";
import priceTag2 from "../images/price-tag1.png";
import priceTag1 from "../images/price-tag2.png";

const Pricing = () => {
  return (
    <div className='pricePage'>
      <NavBar2 />
      <div className='priceSec'>
        <Container>
          <Header className='top-header'>Pricing</Header>
          <p className='top-P'>
            "If you don't try this app, you won't become the hero you are meant
            to be"
          </p>

          <Responsive minWidth={768}>
            <Grid>
              <Grid.Column width={5}>
                <div className='cardColumn'>
                  <Image src={priceTag3} />
                  <Header>Basic</Header>
                  <p className='main-price'>$100 per month</p>
                  <p>Feature 1</p>
                  <p>Feature 2</p>
                  <p>Feature 3</p>
                  <Button primary content='Start now' />
                </div>
              </Grid.Column>

              <Grid.Column width={5}>
                <div className='cardColumn'>
                  <Image src={priceTag2} />
                  <Header>Silver</Header>
                  <p className='main-price'>$400 per 250</p>
                  <p>Feature 1</p>
                  <p>Feature 2</p>
                  <p>Feature 3</p>
                  <Button primary content='Start now' />
                </div>
              </Grid.Column>

              <Grid.Column width={5}>
                <div className='cardColumn'>
                  <Image src={priceTag1} />
                  <Header>Platinum</Header>
                  <p className='main-price'>$600 Unlimited</p>
                  <p>Feature 1</p>
                  <p>Feature 2</p>
                  <p>Feature 3</p>
                  <Button primary content='Start now' />
                </div>
              </Grid.Column>
            </Grid>
          </Responsive>

          <Responsive minWidth={320} maxWidth={767}>
            <Grid>
              <Grid.Row width={5}>
                <div className='cardColumn'>
                  <Image src={priceTag3} />
                  <Header>Basic</Header>
                  <p className='main-price'>$100 per month</p>
                  <p>Feature 1</p>
                  <p>Feature 2</p>
                  <p>Feature 3</p>
                  <Button primary content='Start now' />
                </div>
              </Grid.Row>

              <Grid.Row width={5}>
                <div className='cardColumn'>
                  <Image src={priceTag2} />
                  <Header>Silver</Header>
                  <p className='main-price'>$400 per 250</p>
                  <p>Feature 1</p>
                  <p>Feature 2</p>
                  <p>Feature 3</p>
                  <Button primary content='Start now' />
                </div>
              </Grid.Row>

              <Grid.Row width={5}>
                <div className='cardColumn'>
                  <Image src={priceTag1} />
                  <Header>Platinum</Header>
                  <p className='main-price'>$600 Unlimited</p>
                  <p>Feature 1</p>
                  <p>Feature 2</p>
                  <p>Feature 3</p>
                  <Button primary content='Start now' />
                </div>
              </Grid.Row>
            </Grid>
          </Responsive>
        </Container>
      </div>
    </div>
  );
};

export default Pricing;