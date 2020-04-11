import React, { Component } from 'react'
import { Sidebar, Menu } from 'semantic-ui-react';



import * as ROUTES from "../../constants/routes";
import { Link } from 'react-router-dom';



export default class SideBarDrawer extends Component {
    state = { 
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={this.props.click}
                    vertical
                    visible={this.props.visible}
                    width='thin'
                >
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to={ROUTES.HOME}
                      />
                    <Menu.Item
                        name='Start'
                        active={activeItem === 'landing'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to={ROUTES.LANDING}
                      />

                    <Menu.Item
                        name='Sign In'
                        active={activeItem ==='Sign In'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to={ROUTES.SIGN_IN}
                      />

                    <Menu.Item
                        name='Sign Up'
                        active={activeItem ==='Sign Up'}
                        onClick={this.handleItemClick}
                        as={Link}
                        to={ROUTES.SIGN_UP}
                      />
                </Sidebar>                
            </Sidebar.Pushable>
            
        )
    }
}
