import { firebaseQuestions, firebaseLooper } from '../firebase';

export const QUESTION_GET_START = "QUESTION_GET_START";
export const QUESTION_GET_SUCCESS = "QUESTION_GET_SUCCESS";
export const QUESTION_GET_FAILED = "QUESTION_GET_FAILED";

export const QUESTION_POST_START = "QUESTION_POST_START";
export const QUESTION_POST_SUCCESS = "QUESTION_POST_SUCCESS";
export const QUESTION_POST_FAILED = "QUESTION_POST_FAILED";

const getQuestions = () => dispatch => {
  dispatch({ type: QUESTION_GET_START });
  firebaseQuestions.limitToLast(5).once('value')
    .then(snapshot => {
      const questions = firebaseLooper(snapshot).reverse();
      dispatch({ type: QUESTION_GET_SUCCESS, payload: questions });
    })
    .catch(err => {
      dispatch({
        type: QUESTION_GET_FAILED,
        payload: err
      });
    });
};

export const addQuestion = (question) => dispatch => {
  dispatch({ type: QUESTION_POST_START });  
  firebaseQuestions.push(question)
    .then((snapshot) => {  
      question.id = snapshot.key;    
      dispatch({ type: QUESTION_POST_SUCCESS, payload: question });     
    })
    .catch(err => {      
      dispatch({
        type: QUESTION_POST_FAILED,
        payload: err
      });
    });
};

export default getQuestions;