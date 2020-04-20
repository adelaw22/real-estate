import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon, Responsive, Button } from 'semantic-ui-react';

import './Navigation.scss';

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
}

export default Navigation;
