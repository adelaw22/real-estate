import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon, Responsive, Button } from 'semantic-ui-react';
import { AuthUserContext } from '../Session';
import './Navigation.scss';
import SignOutButton from '../SignOut';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

const NoAuthNavigation = ({ activeItem, handleItemClick, clickHandler }) => {
  const handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  const { activeItem } = this.state;
  const [setactiveItem] = useState('home');

  console.log('auth user', this.$forprops.authUser);
  const showSidebar = () => {
    console.log('yes');
    clickHandler(true);
  };

  return (
    <Menu>
      <AuthUserContext.Consumer>
        {' '}
        {authUser =>
          authUser ? (
            <NoAuthNavigation
              activeItem={activeItem}
              clickHandler={this.$forprops.click}
              handleItemClick={handleItemClick}
              authUser={authUser}
            />
          ) : (
            <NoAuthNavigation
              activeItem={activeItem}
              clickHandler={this.$forprops.click}
              handleItemClick={handleItemClick}
            />
          )
        }
      </AuthUserContext.Consumer>
      <Responsive maxWidth={768}>
        <Menu.Menu position='left' className='centered-icon'>
          <Button color='blue' circular onClick={showSidebar} icon>
            <Icon name='bars' />
          </Button>
        </Menu.Menu>
      </Responsive>

      <Container>
        <Menu.Menu position='left'>
          <Menu.Item
            name='DEMEVEST'
            active={activeItem === '/'}
            onClick={this.handleItemClick}
            as={Link}
            to={ROUTES.HOME}
          />
        </Menu.Menu>
        <Responsive minWidth={768}>
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
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={handleItemClick}
              as={Link}
              to={ROUTES.SIGN_UP}
            >
              <Button primary>Sign up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Responsive>
      </Container>
    </Menu>
  );
};
export default Navigation;
