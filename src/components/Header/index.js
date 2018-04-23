import React, { Component } from 'react';
import AppHeader from './appHeader';

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectItem, toggleSideMenu } from "../../actions/navigation";


class Header extends Component {
    toggleSelectedIndex = () => {
        this.props.selectItem(0);
    }
    
    openSideMenu = () => {
        this.props.toggleSideMenu();
    }

    render() {
        return (
            <AppHeader
                onLeftIconClick={this.toggleSelectedIndex}
                onRightIconClick={this.openSideMenu}
            />
        )
    }
}

const mapStateToProps = state => ({
    activeItem: state.navigation.activeItem,    
  });
  
  const mapDispatchToProps = dispatch => ({
    selectItem: (i) => dispatch(selectItem(i)),
    toggleSideMenu: () => dispatch(toggleSideMenu())
  });
  
  Header.propTypes = {
    activeItem: PropTypes.number.isRequired,     
    selectItem: PropTypes.func.isRequired,
    toggleSideMenu: PropTypes.func.isRequired
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);