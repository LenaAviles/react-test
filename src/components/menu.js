import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const AppMenu = (props) => {
    return (
        <Drawer
        docked={false}
        width={200}
        open={props.open}
        onRequestChange={open => props.clickOut(open)}        
      >
        <MenuItem onClick={this.handleClose}>Add Question</MenuItem>
        <MenuItem onClick={this.handleClose}>Questions</MenuItem>
        <MenuItem onClick={this.handleClose}>Categories</MenuItem>
        <MenuItem onClick={this.handleClose}>Login</MenuItem>
      </Drawer>
    )
}

export default AppMenu;
