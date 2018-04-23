import React from 'react';
import PropTypes from "prop-types";
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import items from '../SideMenu/menu_items';
import './navBar.css'


const Navigation = (props) => {
  const showItems = () => {
    return items.slice(0, 3).map((item, i) => {
      return (
        <BottomNavigationItem
          key={i}
          label={item.text}
          containerElement={<Link to={item.link} />}
          icon={item.icon}
          onClick={() => props.select(i)}
          className='navItem'
        />
      )
    })
  }

  return (
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={props.selectedIndex}>
        {showItems()}
      </BottomNavigation>
    </Paper>
  );
}

Navigation.propTypes = {
  selectedIndex: PropTypes.number.isRequired
}

export default Navigation;