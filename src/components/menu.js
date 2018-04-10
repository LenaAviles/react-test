import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



class AppMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  onClick = () =>  {
    this.props.itemClicked();
    // console.log(this.props)
  }

  render() {
    return (
        <Drawer
        docked={false}
        width={200}
        open={this.props.open}
        onRequestChange={open => this.props.clickOut(open)}        
      >
        <MenuItem onClick={this.onClick}>Add Question</MenuItem>
        <MenuItem onClick={this.onClick}>Questions</MenuItem>
        <MenuItem onClick={this.onClick}>Categories</MenuItem>
        <MenuItem onClick={this.onClick}>Login</MenuItem>
      </Drawer>
    )
  }
}

export default AppMenu;
