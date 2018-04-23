import React from 'react';

import AddIcon from 'material-ui/svg-icons/content/add-circle-outline';
import CategoriesIcon from 'material-ui/svg-icons/action/view-list';
import LoginIcon from 'material-ui/svg-icons/action/lock-outline';
import RegistrationIcon from 'material-ui/svg-icons/action/account-box';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';


const MenuItems = [
    {
        text: "Главная",
        link: "/",
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
        icon: <RegistrationIcon />
    },
];

export default MenuItems;