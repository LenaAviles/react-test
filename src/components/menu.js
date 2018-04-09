import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import CategoriesIcon from 'material-ui/svg-icons/action/view-list';
import LoginIcon from 'material-ui/svg-icons/action/lock';
import HomeIcon from 'material-ui/svg-icons/action/home';

const AppMenu = (props) => {
    return (
        <Drawer
        docked={false}
        width={200}
        open={props.open}
        onRequestChange={open => props.clickOut(open)}        
      >
        <MenuItem primaryText="Главная" onClick={this.handleClose} leftIcon={<HomeIcon />} />
        <MenuItem primaryText="Задать вопрос" onClick={this.handleClose} leftIcon={<AddIcon />} />        
        <MenuItem primaryText="Категории" onClick={this.handleClose} leftIcon={<CategoriesIcon />} />
        <Divider />
        <MenuItem primaryText="Войти" onClick={this.handleClose} rightIcon={<LoginIcon />} />
        <MenuItem primaryText="Регистрация" onClick={this.handleClose} />
      </Drawer>
    )
}

export default AppMenu;
