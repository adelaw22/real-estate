import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.scss';

import * as ROUTES from "../../constants/routes";
import { Link, BrowserRouter, Route } from 'react-router-dom';



const SideBarDrawer = props => {
   
    const isMenuOpen = state => {
        props.openSideBar(state.isOpen);
        return state.isOpen
    }

    return (
        <Menu onStateChange={ isMenuOpen }  customBurgerIcon={ false } pageWrapId={ 'page-wrap' } left width={ 280 } isOpen={props.sideBarOpen}>
            <Link id="home" className="menu-item" to={ROUTES.LANDING}>Home</Link>
            <Link id="homes" className="menu-item" to={ROUTES.HOME}>Homes</Link>
            <Link id="sign-in" className="menu-item" to={ROUTES.SIGN_IN}>Sign In</Link>
            <Link id="sign-up" className="menu-item" to={ROUTES.SIGN_UP}>Sign Up</Link>
        </Menu>
    )
}



export default SideBarDrawer;