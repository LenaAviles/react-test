import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import items from './menu_items';


const AppDrawer = (props) => {
    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i}>
                    <MenuItem
                        primaryText={item.text}
                        containerElement={<Link to={item.link} />}
                        onClick={() => props.itemClicked(i)}
                        leftIcon={item.icon}
                    />
                    <Divider />
                </div>
            )
        })
    }

    return (
        <Drawer
            docked={false}
            width={240}
            open={props.open}
            onRequestChange={open => props.clickOut(open)}
        >
            {showItems()}
        </Drawer>
    );
};

AppDrawer.propTypes = {
    clickOut: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
}

export default AppDrawer;