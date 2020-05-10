//Navbar for the home page and contact page.


import React, {useState} from 'react';
import './NavBar.scss'
import {
      Container,
      Menu,
      Icon,
      Responsive,
      Button,
      Image,
      Input
} from 'semantic-ui-react';
import {
    AuthUserContext
} from "../Session";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import homelogo from '../images/home-run (1).png';
import {
    Link
} from 'react-router-dom';
import SignOutButton from "../SignOut";


const NavBar = props => {

    const [activeItem, setactiveItem] = useState('home')

    const handleItemClick = (e, { name }) => setactiveItem(name);


    console.log("auth user", props.authUser)
    
    return (
        <AuthUserContext.Consumer>
            {   authUser => 
                authUser ? (
                <AuthNavigation 
                activeItem={activeItem} 
                clickHandler={props.click} 
                handleItemClick={handleItemClick} 
                authUser={authUser}
                /> )
                : (
                <NoAuthNavigation 
                    activeItem={activeItem} 
                    clickHandler={props.click} 
                    handleItemClick={handleItemClick}
                /> )
            }
        </AuthUserContext.Consumer>
            
    )
}

const AuthNavigation = ({ authUser, activeItem, handleItemClick, clickHandler }) => (
        <Menu>
                <Responsive 
                    {...Responsive.onlyMobile}
                >    
                    <Menu.Menu position='left' className="centered-icon">
                        <Button color="blue" circular onClick={() => console.log("yes")} icon>
                            <Icon  name="bars"/>
                        </Button>
                    </Menu.Menu>
                </Responsive>
                <Container>
                    <Menu.Menu position='left'>
                        <Menu.Item
                            name='DEMEVEST'
                            active={activeItem === 'home'}
                            onClick={handleItemClick}
                            as={Link}
                            to={ROUTES.HOME}
                        />
                    </Menu.Menu>
                    <Menu.Menu position='right'>
                        <Menu.Item
                             name='Home'
                             active={activeItem === 'Home'}
                            onClick={handleItemClick}
                            as={Link}
                            to={ROUTES.HOME}
                        />
                        <Menu.Item
                             name='Account'
                             active={activeItem === 'Account'}
                                onClick={handleItemClick}
                             as={Link}
                            to={ROUTES.ACCOUNT}
                        />
                        {/* Ensure that the admin only can enter this page. */}
                        {
                            !!authUser.roles[ROLES.ADMIN]
                            && (
                                <Menu.Item
                                    name='Account'
                                    active={activeItem === 'Account'}
                                    onClick={handleItemClick}
                                    as={Link}
                                    to={ROUTES.ADMIN}
                                />
                            )
                        }

                         <SignOutButton  user={authUser}/>
                    </Menu.Menu>
             </Container>
        </Menu>
)

const NoAuthNavigation = ({ activeItem, handleItemClick, clickHandler }) => {
        
        const showSidebar = () => { console.log("yes");
         clickHandler(true)};
        
        return (  
            <Menu >
                <Responsive  maxWidth={767} >    
                   <Menu.Menu position='left' className="centered-icon">
                        <Button color="blue" circular onClick={showSidebar} icon>
                            <Icon  name="bars"/>
                        </Button>
                    </Menu.Menu>
                </Responsive>
                
                <Container>
                    <Menu.Menu position='left'>
                        <Image src={homelogo} size='mini' style={{width:'34px', height:'39px', paddingTop:'9px'}} />
                        <Menu.Item
                        
                            name='DEMEVEST'
                            active={activeItem === '/'}
                            onClick={handleItemClick}
                            as={Link}
                            to={ROUTES.LANDING}
                            style = {
                                {
                                    color: ' #1149b6',fontWeight:'700',
                                    fontSize:'16px',paddingLeft:'6px'
                                }
                            }
                        />
                    </Menu.Menu>
                    <Responsive  minWidth={768} >
                        <Menu.Menu position='right'>
                         <Menu.Item
                              name='Buy'
                              active={activeItem === 'Buy'}
                              onClick={handleItemClick}
                          />
                          <Menu.Item
                             name='Sell'
                              active={activeItem === 'Sell'}
                              onClick={handleItemClick}
                             />
                         <Menu.Item
                             name='Rent'
                              active={activeItem === 'Rent'}
                              onClick={handleItemClick}
                              as={Link}
                              
                          />
                          <Menu.Item>
                              <Input Icon='search' placeholder='Search'/>
                          </Menu.Item>
                         
                          <Menu.Item name='Add Listing'
                             active={activeItem === ''}
                             onClick={handleItemClick}
                             as={Link}
                             >
            
                             <Button primary>Add Listing</Button>
                          </Menu.Item>
                          </Menu.Menu>
                       
             </Responsive>
                    
            </Container>
          </Menu>
        )
}

export default NavBar;