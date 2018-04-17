import React, { Component } from 'react'
import './layout.css';

import AppHeader from '../../components/Header/header';
import SideMenu from '../../components/SideMenu/side-menu';
import Navigation from '../../components/navigation';

class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isMenuOpen: false,
            selectedIndex: 0,
        }
    }

    toggleSideMenu(isMenuOpen) {
        this.setState({ isMenuOpen })
    }

    menuItemClicked = (index) => {
        this.toggleSideMenu(false)
        this.toggleSelectedIndex(index)
    }

    toggleSelectedIndex = (index) => this.setState({ selectedIndex: index });

    render() {
        return (
            <div>
                <AppHeader
                    onRightIconClick={() => this.setState({ isMenuOpen: true })}
                />
                <Navigation
                    selectedIndex={this.state.selectedIndex}
                    select={index => this.toggleSelectedIndex(index)}
                />
                <SideMenu
                    open={this.state.isMenuOpen}
                    clickOut={(open) => this.toggleSideMenu(open)}
                    itemClicked={(index) => this.menuItemClicked(index)}
                />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
