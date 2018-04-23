import React, { Component } from 'react';
import Navigation from './navigation';

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectItem, toggleSideMenu } from "../../actions/navigation";

class NavBar extends Component {

  handleSelect(i) {    
    this.props.selectItem(i);    
  }

  render() {        
    return (
      <Navigation
        selectedIndex={this.props.activeItem}
        select={(i) => this.handleSelect(i)}
      />
    );
  }
}

const mapStateToProps = state => ({
  activeItem: state.navigation.activeItem,    
});

const mapDispatchToProps = dispatch => ({
  selectItem: (i) => dispatch(selectItem(i)),
  toggleSideMenu: () => dispatch(toggleSideMenu())
});

NavBar.propTypes = {
  activeItem: PropTypes.number.isRequired,     
  selectItem: PropTypes.func.isRequired,
  toggleSideMenu: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);