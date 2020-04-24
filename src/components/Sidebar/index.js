import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss';

import * as ROUTES from "../../constants/routes";
import { Link } from 'react-router-dom';
import { Icon } from "semantic-ui-react";



const SideBarDrawer = props => {
   
    const isMenuOpen = state => {
        props.openSideBar(state.isOpen);
        return state.isOpen
    }

    return (
        <Menu onStateChange={ isMenuOpen }  customBurgerIcon={ false } pageWrapId={ 'page-wrap' } left width={ 280 } isOpen={props.sideBarOpen}>
            <Link id="home" className="menu-item" to={ROUTES.LANDING}>
                <div className="item">
                    <p>Home</p>
                    <Icon name="angle right"/>
                </div>
            </Link>
            <Link id="homes" className="menu-item" to={ROUTES.HOME}>
                <div className="item">
                    <p>Buy Sell Rent</p>
                    <Icon  name="angle right"/>
                </div>
            </Link>
            <Link id="sign-in" className="menu-item" to={ROUTES.SIGN_IN}>
                <div className="item">
                    <p>Sign In</p>
                    <Icon  name="angle right"/>
                </div>
            </Link>
            <Link id="sign-up" className="menu-item" to={ROUTES.SIGN_UP}>
                <div className="item">
                    <p>Sign Up</p>
                    <Icon  name="angle right"/>
                </div>
            </Link>
            <Link id="pricing" className="menu-item" to={ROUTES.PRICING}>
                <div className="item">
                    <p>Pricing</p>
                    <Icon  name="angle right"/>
                </div>
            </Link>
        </Menu>
    )
}



export default SideBarDrawer;