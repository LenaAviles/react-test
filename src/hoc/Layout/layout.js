import React from 'react'
import PropTypes from "prop-types";

import AppHeader from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import NavBar from '../../components/NavBar';
import './layout.css';

const Layout = (props) => {
    return (
        <div>
            <AppHeader />
            <NavBar />
            <SideMenu />
            {props.children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Layout;
