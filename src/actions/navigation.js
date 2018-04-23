export const TOGGLE_SIDE_MENU = "TOGGLE_SIDE_MENU";
export const SELECT_ITEM = "SELECT_ITEM";

export const toggleSideMenu = () =>  ({ type: TOGGLE_SIDE_MENU })

export const selectItem = (index) => ({
    type: SELECT_ITEM,
    payload: index
  });

