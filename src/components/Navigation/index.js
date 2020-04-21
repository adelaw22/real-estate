import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Container, Menu, Icon, Responsive, Button } from 'semantic-ui-react';
=======
import {
    Container,
    Menu,
    Icon,
    Responsive,
    Button
} from 'semantic-ui-react';
import {AuthUserContext} from "../Session";
>>>>>>> 05cc7a5c886950f8cd023c43794cae89ecafea88

import './Navigation.scss';

<<<<<<< HEAD
import * as ROUTES from '../../constants/routes';

class Navigation extends Component {
  state = {
    activeItem: 'home'
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Responsive {...Responsive.onlyMobile}>
          <Menu.Menu position='left' className='centered-icon'>
            <Icon onClick={this.props.drawerClickHandler} name='bars' />
          </Menu.Menu>
        </Responsive>
        <Container>
          <Menu.Menu position='left'>
            <Menu.Item
              name='DEMEVEST'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link}
              to={ROUTES.HOME}
            />
          </Menu.Menu>

          <Menu.Menu position='right'>
            <Menu.Item
              name='Pricing'
              active={activeItem === 'Pricing'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Agent'
              active={activeItem === 'Agent'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Contact Us'
              active={activeItem === 'Contact Us'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Help'
              active={activeItem === 'Help'}
              onClick={this.handleItemClick}
            />
            <Menu.Item>
              {' '}
              <Button primary>Sign up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
=======
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
        
        return (    <Menu >
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
                    <Responsive
                        minWidth={768}
                    >
                        <Menu.Menu position='right'>
                         <Menu.Item
                              name='Home'
                              active={activeItem === 'Home'}
                                 onClick={handleItemClick}
                             as={Link}
                             to={ROUTES.HOME}
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
>>>>>>> 05cc7a5c886950f8cd023c43794cae89ecafea88
}

export default Navigation;
