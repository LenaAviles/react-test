import reducer from './questions';
import * as actions from '../actions/questions';

const questionsMock = ['question mock'];
const initialStateMock = {
    items: [],
    loading: false
  };

describe('questions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialStateMock);
  });

  it('should handle QUESTION_GET_START', () => {
    const startAction = {
      type: actions.QUESTION_GET_START
    };    
    expect(reducer({}, startAction)).toEqual({"loading": true});
  });

  it('should handle QUESTION_GET_SUCCESS', () => {
    const successAction = {
      type: actions.QUESTION_GET_SUCCESS,
      payload: questionsMock, 
    };
    const expected = {"items": questionsMock, "loading": false}
    expect(reducer({}, successAction)).toEqual(expected);
  });

  it('should handle QUESTION_GET_FAILED', () => {
    const failAction = {
      type: actions.QUESTION_GET_FAILED,
      payload: 'some error',
    };
    const expected = {"error": "some error", "loading": false}
    expect(reducer({}, failAction)).toEqual(expected);
  });
});
