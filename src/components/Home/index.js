import React from "react";
import NavBar2 from "../Navbar2";
import {Link} from 'react-router-dom';
import "./home.scss";
import {
  Grid,
  Header,
  Form,
  Checkbox,
  Image,
  Divider,
  Responsive
} from "semantic-ui-react";
import RoomFour from "../images/blue 4.png";
import Bedroom from "../images/Rectangle 12.png";
import Bathrooms from "../images/Rectangle 10.png";
import FullSize from "../images/Rectangle 11.png";
import rightArrow from "../images/icon-right.png";
import leftArrow from "../images/icon.png";
import * as ROUTES from "../../constants/routes"

const priceValue= [
  {key: 'any', value:'any',text:'Any'}, 
  {key: 'least', value:'least',text:'$10,000'},
  {key: 'first', value:'first',text:'$100,000'},
  {key: 'second', value:'second',text:'$120,000'},
  {key: 'third', value:'third',text:'$150.000'},
  {key: 'fourth', value:'fourth',text:'$200,000'},
  {key: 'fifth', value:'fifth',text:'$500,000'},

]

const roomNumbers=[
  {key: 'any', value:'any',text:'Any'},
  {key: 'one', value:'one',text:'1'},
  {key: 'two', value:'two',text:'2'},
  {key: 'three', value:'three',text:'3'},
  {key: 'four', value:'four',text:'4'},
  {key: 'five', value:'five',text:'5'},
]

const roomSize=[
  {key: 'any', value:'any',text:'Any'},
  {key: 'one', value:'one',text:'1000ft'},
  {key: 'two', value:'two',text:'1500ft'},
  {key: 'three', value:'three',text:'2000ft'},
  {key: 'four', value:'four',text:'2500ft'},
  {key: 'five', value:'five',text:'3000ft'},
]

const Category=[
  {key:'new', value:'new', text:'Newest'}
]

const HomePage = () => {
  return (
    <div className='HomePage'>
      <NavBar2 />


      <Responsive minWidth={768}>
       <div className="homeBody">
        <div className="filterSec"
          style={{
            background: "#f2f2f2"
          }}
          
        >
          <div className='filter-tab'>
            <div className='filterHeader'>
              <Header>Filter</Header>
              <p className='reset'>Reset Filter</p>
            </div>
            <br />
            <p style={{fontWeight:'bold'}}>Property type</p>

            <Form>
              <Form.Field control={Checkbox} label='House' value='house' />

              <Form.Field
                control={Checkbox}
                label='Apartment'
                value='apartment'
              />

              <Form.Field control={Checkbox} label='Room' value='room' />

              <Form.Field
                control={Checkbox}
                label='Townhall'
                value='townhall'
              />

              <Form.Field control={Checkbox} label='Parking' value='parking' />
              
            </Form>
            <Form>
               <Form.Group style={{marginTop:'30px'}} widths={2}>
                <Form.Select label='Min Price' options={priceValue} defaultValue='Any' style={{minWidth:'100%',background:'#e5e5e5',marginRight:'10px'}}/>
                 <Form.Select label='Max Price' options={priceValue} defaultValue='Any' style={{minWidth:'100%',background:'#e5e5e5'}} />
              </Form.Group>

              <Form.Group  style={{marginTop:'30px'}} widths={2}>
                 <Form.Select label='Bedroom' options={roomNumbers} defaultValue='Any' style={{minWidth:'100%',background:'#e5e5e5',marginRight:'10px'}}/>
                 <Form.Select label='Bathroom' options={roomNumbers} defaultValue='Any' style={{minWidth:'100%',background:'#e5e5e5'}} />
              </Form.Group>

              <Form.Group style={{marginTop:'30px'}} widths={2}>
                 <Form.Select label='Size (Min)' options={roomSize} defaultValue='Any' style={{minWidth:'100%',background:'#e5e5e5',marginRight:'10px'}}/>
                 < Form.Select label = 'Size (Max)'
                 options = {
                   roomSize
                 }
                 defaultValue = 'Any'
                 style = {
                   {
                     minWidth: "100%",
                     
                       
                         background: '#e5e5e5'
                      
                     
                   }
                 }
                 />
              </Form.Group>
            </Form>

          </div>
        </div>



        <div className="roomSamples" style={{padding:'0px'}}>

          <div className='showResults'>
            <Header>Showing 577 search results</Header>
            <Form>
              <Form.Field style={{display:'flex'}}>
                  <label style={{margin:'auto'}}>Sort By:</label>
                 <Form.Select  options={Category} defaultValue='Newest' style={{minWidth:'9em',background:'#e5e5e5'}} />
              </Form.Field>
            </Form>
          </div>


          <Grid>
            <Grid.Row>
              <Grid.Column width={5} >
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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

              <Grid.Column width={5} >
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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

              <Grid.Column width={5} >
                <Image className='Rooms' src={RoomFour}as={Link} to={ROUTES.SINGLEUNIT} />
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
            </Grid.Row>


            <Grid.Row style={{marginTop:'25px',marginBottom:'25px'}}>
              <Grid.Column width={5}>
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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

              <Grid.Column width={5} >
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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
                <Image className='Rooms' src={RoomFour}as={Link} to={ROUTES.SINGLEUNIT} />
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
            </Grid.Row>
          </Grid>

         <div className="mainNavigation">
            <div className='navigationNumbers'>
            <Image src={leftArrow}/>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <Image src={rightArrow}/>
          </div>
         </div>
        </div>
      </div>
      </Responsive>



       <Responsive minWidth={320} maxWidth={767}>
       <div className="homeBody">
        <div className="filterSec"
          style={{
            background: "#f2f2f2",width:"100%"
          }}
          
        >
          <div className='filter-tab'>
            <div className='filterHeader'>
              <Header>Filter</Header>
              <p className='reset'>Reset Filter</p>
            </div>
            <br />
            <p style={{fontWeight:'bold'}}>Property type</p>

            <Form>
              <Form.Field control={Checkbox} label='House' value='house' />

              <Form.Field
                control={Checkbox}
                label='Apartment'
                value='apartment'
              />

              <Form.Field control={Checkbox} label='Room' value='room' />

              <Form.Field
                control={Checkbox}
                label='Townhall'
                value='townhall'
              />

              <Form.Field control={Checkbox} label='Parking' value='parking' />
              
            </Form>
            <Form>
               <Form.Group style={{marginTop:'30px'}} widths={2}>
                <Form.Select label='Min Price' options={priceValue} defaultValue='Any' style={{minWidth:'50%',background:'#e5e5e5',marginRight:'10px'}}/>
                 <Form.Select label='Max Price' options={priceValue} defaultValue='Any' style={{minWidth:'50%',background:'#e5e5e5'}} />
              </Form.Group>

              <Form.Group  style={{marginTop:'30px'}} widths={2}>
                 <Form.Select label='Bedroom' options={roomNumbers} defaultValue='Any' style={{minWidth:'50%',background:'#e5e5e5',marginRight:'10px'}}/>
                 <Form.Select label='Bathroom' options={roomNumbers} defaultValue='Any' style={{minWidth:'50%',background:'#e5e5e5'}} />
              </Form.Group>

              <Form.Group style={{marginTop:'30px'}} widths={2}>
                 <Form.Select label='Size (Min)' options={roomSize} defaultValue='Any' style={{minWidth:'50%',background:'#e5e5e5',marginRight:'10px'}}/>
                 < Form.Select label = 'Size (Max)'
                 options = {
                   roomSize
                 }
                 defaultValue = 'Any'
                 style = {
                   {
                     minWidth: "50%",
                     
                       
                         background: '#e5e5e5'
                      
                     
                   }
                 }
                 />
              </Form.Group>
            </Form>

          </div>
        </div>



        <div className="roomSamples" style={{padding:'0px',width:"100%"}}>

          <div className='showResults'>
            <Header>Showing 577 search results</Header>
            <Form>
              <Form.Field style={{display:'flex'}}>
                  <label style={{margin:'auto'}}>Sort By:</label>
                 <Form.Select  options={Category} defaultValue='Newest' style={{minWidth:'6.5em',background:'#e5e5e5'}} />
              </Form.Field>
            </Form>
          </div>


          <Grid>
            <Grid.Row>
              <Grid.Row>
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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
              </Grid.Row>

              <Grid.Row>
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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
              </Grid.Row>

              <Grid.Row>
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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
              </Grid.Row>
            </Grid.Row>


            <Grid.Row style={{marginTop:'25px',marginBottom:'25px'}}>

              <Grid.Row>
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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
              </Grid.Row>

                <Grid.Row>
                <Image className='Rooms' src={RoomFour} as={Link} to={ROUTES.SINGLEUNIT} />
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
                </Grid.Row>

                <Grid.Row>
                <Image className='Rooms' src={RoomFour}as={Link} to={ROUTES.SINGLEUNIT} />
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
              </Grid.Row>
            </Grid.Row>
          </Grid>

         <div className="mainNavigation">
            <div className='navigationNumbers'>
            <Image src={leftArrow}/>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <Image src={rightArrow}/>
          </div>
         </div>
        </div>
      </div>
      </Responsive>
     
    </div>
  );
};
export default HomePage;
