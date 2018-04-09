import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';


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
            icon={<HomeIcon />}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Задать вопрос"
            icon={<AddIcon />}
            onClick={() => this.select(1)}
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