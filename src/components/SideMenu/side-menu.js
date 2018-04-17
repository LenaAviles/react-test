import React from 'react';
import Drawer from 'material-ui/Drawer';
import SideMenuItems from './side-menu_items';

const SideMenu = (props) => {  
    return (
      <Drawer
        docked={false}
        width={240}
        open={props.open}
        onRequestChange={open => props.clickOut(open)}        
      >
        <SideMenuItems {...props} />        
      </Drawer>
    )
  }

export default SideMenu;
