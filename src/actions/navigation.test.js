import { 
    toggleSideMenu, 
    selectItem,
    TOGGLE_SIDE_MENU,
    SELECT_ITEM
 } from './navigation';
 
  it('should create an action to toggleSideMenu', () => {    
    const expectedAction = {
      type: TOGGLE_SIDE_MENU
    }
    expect(toggleSideMenu()).toEqual(expectedAction)
  });

  it('should create an action to selectItem', () => {
    const index = 0;
    const expectedAction = {
      type: SELECT_ITEM,
      payload: index
    }
    expect(selectItem(index)).toEqual(expectedAction)
  });
