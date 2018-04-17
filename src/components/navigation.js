import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router-dom';


const Navigation = (props) => {
  return (
    <Paper zDepth={1}>
      <BottomNavigation selectedIndex={props.selectedIndex}>

        <BottomNavigationItem
          label="Главная"
          containerElement={<Link to="/home" />}
          icon={<HomeIcon />}
          onClick={() => props.select(0)}
          style={{ textAlign: 'center' }}
        />
        <BottomNavigationItem
          label="Задать вопрос"
          containerElement={<Link to="/add-question" />}
          icon={<AddIcon />}
          onClick={() => props.select(1)}
          style={{ textAlign: 'center' }}
        />
        <BottomNavigationItem
          label="Поиск"
          icon={<SearchIcon />}
          onClick={() => props.select(2)}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Navigation;