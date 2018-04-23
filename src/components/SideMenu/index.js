import React, { Component } from 'react';
import AppDrawer from './appDrawer';

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectItem, toggleSideMenu } from "../../actions/navigation";


class SideMenu extends Component {
  menuItemClicked(index) {
    this.props.selectItem(index);
    this.props.toggleSideMenu();
  }

  closeSideMenu = () => {
    this.props.toggleSideMenu()
  }

  render() {
    return (
      <AppDrawer
        itemClicked={(index) => this.menuItemClicked(index)}
        open={this.props.isSideMenuOpen}
        clickOut={this.closeSideMenu}        
      />
    )
  }
}

const mapStateToProps = state => ({
  activeItem: state.navigation.activeItem,
  isSideMenuOpen: state.navigation.isSideMenuOpen
});

const mapDispatchToProps = dispatch => ({
  selectItem: (i) => dispatch(selectItem(i)),
  toggleSideMenu: () => dispatch(toggleSideMenu())
});

SideMenu.propTypes = {
  activeItem: PropTypes.number.isRequired,
  isSideMenuOpen: PropTypes.bool.isRequired,
  selectItem: PropTypes.func.isRequired,
  toggleSideMenu: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
