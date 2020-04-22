import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Menu,
    Icon,
    Responsive,
    Button
} from 'semantic-ui-react';
import {AuthUserContext} from "../Session";

import "./Navigation.scss";
import queryString from "query-string";

import SignOutButton from "../SignOut";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";

const Navigation = props => {

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
        <Menu className="menu-container">
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
        
        return (    <Menu className="menu-container">
                <Responsive 
                    maxWidth={768}
                >    
                   <Menu.Menu position='left' className="centered-icon">
                        <Button color="blue" circular onClick={showSidebar} icon>
                            <Icon  name="bars"/>
                        </Button>
                    </Menu.Menu>
                </Responsive>
                
                <Container>
                    <Menu.Menu position='left'>
                        <Menu.Item
                        
                            name='DEMEVEST'
                            active={activeItem === '/'}
                            onClick={handleItemClick}
                            as={Link}
                            to={ROUTES.LANDING}
                        />
                    </Menu.Menu>
                    <Responsive minWidth={768}>

                    <Menu.Menu position="left" className="menu-items">
                            <Menu.Item
                                name="Pricing"
                                as={Link}
                                to={ROUTES.PRICING}
                            />

                            <Menu.Item
                                name="Buy"
                                as={Link}
                                to={ROUTES.BUY}
                            />

                            <Menu.Item
                                name="Rent"
                                as={Link}
                                to={ROUTES.RENT}
                            />

                            <Menu.Item
                                name="Sell"
                                as={Link}
                                to={ROUTES.PRICING}
                            />
                    </Menu.Menu>
                    </Responsive>

                    <Responsive
                        minWidth={768}
                    >

                        <Menu.Menu className="menu-items" position='right'>
                         <Menu.Item
                              name='Log In'
                              active={activeItem === 'Log In'}
                            onClick={handleItemClick}
                             as={Link}
                             to={ROUTES.SIGN_IN}
                        />
                        <Menu.Item
                           name='Sign Up'
                           active={activeItem === 'Sign Up'}
                            onClick={handleItemClick}
                             as={Link}
                             to={ROUTES.SIGN_UP}
                        />
      
                        </Menu.Menu>
                    </Responsive>
                    
                 </Container>
            </Menu>
        )
}

export default Navigation