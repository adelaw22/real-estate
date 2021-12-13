import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavFour.scss';

import {
    Container,
    Menu,
    Icon,
    Responsive,
    Button,
    Image,
} from 'semantic-ui-react';
import {
    AuthUserContext
} from "../Session";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import homelogo from '../images/home-run (1).png';
import SignOutButton from "../SignOut";


const NavFour = props => {

    const [activeItem, setactiveItem] = useState('home')

    const handleItemClick = (e, { name }) => setactiveItem(name);


    console.log("auth user", props.authUser)

    return (
        <AuthUserContext.Consumer>
            {authUser =>
                authUser ? (
                    <AuthNavigation
                        activeItem={activeItem}
                        clickHandler={props.click}
                        handleItemClick={handleItemClick}
                        authUser={authUser}
                    />)
                    : (
                        <NoAuthNavigation
                            activeItem={activeItem}
                            clickHandler={props.click}
                            handleItemClick={handleItemClick}
                        />)
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
                    <Icon name="bars" />
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
                // to={ROUTES.HOME}
                />
            </Menu.Menu>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={handleItemClick}
                    as={Link}
                // to={ROUTES.HOME}
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

                <SignOutButton user={authUser} />
            </Menu.Menu>
        </Container>
    </Menu>
)

const NoAuthNavigation = ({ activeItem, handleItemClick, clickHandler }) => {

    const showSidebar = () => {
        console.log("yes");
        clickHandler(true)
    };

    return (
        <Menu pointing secondary style={{border:'none'}}>
            <Responsive maxWidth={767} >
                <Menu.Menu position='left' className="centered-icon">
                    <Button color="blue" circular onClick={showSidebar} icon>
                        <Icon name="bars" />
                    </Button>
                </Menu.Menu>
            </Responsive>

            <Container>
                <Menu.Menu position='left' >
                    <Image src={homelogo} size='mini' style={{ width: '34px', height: '33px', margin: 'auto' }} />
                    <Menu.Item
                            name='DEMEVEST'
                            active={activeItem === '/'}
                            onClick={handleItemClick}
                            as={Link}
                            to={ROUTES.LANDING}
                            style = {
                                {
                                    color: ' #1149b6',fontWeight:'700',
                                    fontSize:'18px',margin:'10px', border:'none'
                                }
                            }
                        />
                </Menu.Menu>
                <Responsive minWidth={768} >
                    <Menu.Menu position='right'>
                    <Menu.Item
                             
                              name='Buy/Rent'
                              active={activeItem === 'Buy/Rent'}
                              onClick={handleItemClick}
                          >Buy/Rent</Menu.Item>
                          <Menu.Item
                             
                             name='Sell/Let'
                              active={activeItem === 'Sell/Let'}
                              onClick={handleItemClick}
                             >Sell/Let</Menu.Item>
                         <Menu.Item
                          
                             name='Pricing'
                              active={activeItem === 'Pricing'}
                              onClick={handleItemClick}
                              as={Link}
                              to={ROUTES.PRICING}
                          />
                          <Menu.Item
                           
                             name='Become an Agent'
                              active={activeItem === 'Become an Agent'}
                             onClick={handleItemClick}
                           />

                       <Menu.Item name='Sign Up'
                            
                             active={activeItem === 'Sign Up'}
                             onClick={handleItemClick}
                             as={Link}
                             to={ROUTES.SIGN_UP}>
            
                             <Button className='Sign-btn' >Sign up</Button>
                          </Menu.Item>
                    </Menu.Menu>

                </Responsive>

            </Container>
        </Menu>
    )
}

export default NavFour;