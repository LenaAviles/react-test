import { firebaseCategories, firebaseLooper } from '../firebase';

export const CAT_GET_START = "CAT_GET_START";
export const CAT_GET_SUCCESS = "CAT_GET_SUCCESS";
export const CAT_GET_FAILED = "CAT_GET_FAILED";

const getCategories = () => dispatch => {
  dispatch({ type: CAT_GET_START });
  return firebaseCategories.once('value')
    .then(snapshot => {
      const categories = firebaseLooper(snapshot);
      dispatch({ type: CAT_GET_SUCCESS, payload: categories });
    })
    .catch(err => {
      dispatch({
        type: CAT_GET_FAILED,
        payload: err
      });
    });  
};

export default getCategories;