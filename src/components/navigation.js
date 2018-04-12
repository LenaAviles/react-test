import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router-dom';


class Navigation extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
        
          <BottomNavigationItem
            label="Главная" 
            containerElement={<Link to="/home" />}           
            icon={<HomeIcon />}
            onClick={() => this.select(0)}
            style={{textAlign: 'center'}}
          />                                      
          <BottomNavigationItem
            label="Задать вопрос"
            containerElement={<Link to="/add-question" />}
            icon={<AddIcon />}
            onClick={() => this.select(1)}
            style={{textAlign: 'center'}}
          />
          <BottomNavigationItem
            label="Поиск"
            icon={<SearchIcon />}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default Navigation;