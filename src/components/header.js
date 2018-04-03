import React from 'react';
import AppBar from 'material-ui/AppBar';
import { indigo700 }  from 'material-ui/styles/colors';

export const AppHeader = (props) => {
    return (
        <AppBar
            title="CONSILIUM"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{ backgroundColor: indigo700 }}
            onLeftIconButtonClick={ () => props.onLeftIconClick() }
        />
    )
}