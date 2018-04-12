import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import CategoriesIcon from 'material-ui/svg-icons/action/view-list';
import LoginIcon from 'material-ui/svg-icons/action/lock';
import HomeIcon from 'material-ui/svg-icons/action/home';
import { Link } from 'react-router-dom';



class AppMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  onClick = () =>  {
    this.props.itemClicked();   
  }

  render() {
    return (
        <Drawer
        docked={false}
        width={200}
        open={this.props.open}
        onRequestChange={open => this.props.clickOut(open)}        
      >
        <MenuItem primaryText="Главная" containerElement={<Link to="/home" />} onClick={this.onClick} leftIcon={<HomeIcon />} />
        <MenuItem primaryText="Задать вопрос" containerElement={<Link to="/add-question" />} onClick={this.onClick} leftIcon={<AddIcon />} />        
        <MenuItem primaryText="Категории" containerElement={<Link to="/categories" />} onClick={this.onClick} leftIcon={<CategoriesIcon />} />
        <Divider />
        <MenuItem primaryText="Войти" containerElement={<Link to="/login" />} onClick={this.onClick} rightIcon={<LoginIcon />} />
        <MenuItem primaryText="Регистрация" containerElement={<Link to="/registration" />} onClick={this.onClick} />
      </Drawer>
    )
  }
}

export default AppMenu;
