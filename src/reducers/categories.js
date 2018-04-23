import {
    CAT_GET_START,
    CAT_GET_SUCCESS,
    CAT_GET_FAILED,    
  } from "../actions/categories";
  
  const initialState = {
    items: [],
    loading: false
  };
  
  const categories = (state = initialState, action) => {
    switch (action.type) {
      case CAT_GET_START:
        return {
          ...state,
          loading: true
        };
  
      case CAT_GET_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload
        };
      case CAT_GET_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload
        };      
      default:
        return state;
    }
  };
  
  export default categories;