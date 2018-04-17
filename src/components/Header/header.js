import React from 'react';
import AppBar from 'material-ui/AppBar';
import { indigo700 }  from 'material-ui/styles/colors';
import logo from '../../logo.svg';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';

const AppHeader = (props) => { 
    const getLogo = () => (
        <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
        </Link>
    )    

    return (
        <AppBar
            title="CONSILIUM"            
            style={{ backgroundColor: indigo700 }}
            onRightIconButtonClick={ props.onRightIconClick }
            iconElementLeft={getLogo()}
            iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
        />
    )
}

export default AppHeader;