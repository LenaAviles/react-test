import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import CategoriesIcon from 'material-ui/svg-icons/action/view-list';
import LoginIcon from 'material-ui/svg-icons/action/lock';
import HomeIcon from 'material-ui/svg-icons/action/home';



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
        <MenuItem primaryText="Главная" href="/home" onClick={this.onClick} leftIcon={<HomeIcon />} />
        <MenuItem primaryText="Задать вопрос" onClick={this.onClick} leftIcon={<AddIcon />} />        
        <MenuItem primaryText="Категории" onClick={this.onClick} leftIcon={<CategoriesIcon />} />
        <Divider />
        <MenuItem primaryText="Войти" onClick={this.onClick} rightIcon={<LoginIcon />} />
        <MenuItem primaryText="Регистрация" onClick={this.onClick} />
      </Drawer>
    )
  }
}

export default AppMenu;
