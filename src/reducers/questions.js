import {
    QUESTION_GET_START,
    QUESTION_GET_SUCCESS,
    QUESTION_GET_FAILED,
    QUESTION_POST_START,
    QUESTION_POST_SUCCESS,
    QUESTION_POST_FAILED,
  } from "../actions/questions";
  
  const initialState = {
    items: [],
    loading: false
  };
  
  const questions = (state = initialState, action) => {
    switch (action.type) {
      case QUESTION_GET_START:
        return {
          ...state,
          loading: true
        };  
      case QUESTION_GET_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload
        };
      case QUESTION_GET_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case QUESTION_POST_START:
        return {
          ...state,
          loading: true
        };
      case QUESTION_POST_SUCCESS:
        return {
          ...state,
          loading: false,
          items: [...state.items, action.payload]
        };
      case QUESTION_POST_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default questions;