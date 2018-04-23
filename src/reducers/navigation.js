import {
  TOGGLE_SIDE_MENU,
  SELECT_ITEM,  
  } from "../actions/navigation";
  
  const initialState = {
    activeItem: 0,
    isSideMenuOpen: false
  };
  
  const navigation = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_SIDE_MENU:
        return {
          ...state,
          isSideMenuOpen: !state.isSideMenuOpen
        };  
      case SELECT_ITEM:
        return {
          ...state,          
          activeItem: action.payload
        };     
      default:
        return state;
    }
  };
  
  export default navigation;