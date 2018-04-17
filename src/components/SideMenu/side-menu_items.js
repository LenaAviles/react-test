import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import CategoriesIcon from 'material-ui/svg-icons/action/view-list';
import LoginIcon from 'material-ui/svg-icons/action/lock';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { Link } from 'react-router-dom';

const SideMenuItems = (props) => {
    const items = [
        {
            text: "Главная",
            link: "/home",
            icon: <HomeIcon />
        },
        {
            text: "Задать вопрос",
            link: "/add-question",
            icon: <AddIcon />
        },
        {
            text: "Поиск",
            link: "/search",
            icon: <SearchIcon />
        },
        {
            text: "Категории",
            link: "/categories",
            icon: <CategoriesIcon />
        },
        {
            text: "Войти",
            link: "/login",
            icon: <LoginIcon />
        },
        {
            text: "Регистрация",
            link: "/registration",
            icon: <LoginIcon />
        },
    ]

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
        <div>
            {showItems()}            
        </div>
    );
};

export default SideMenuItems;