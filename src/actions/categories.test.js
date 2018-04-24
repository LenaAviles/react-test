import getCategories from './categories';
import { CAT_GET_START, CAT_GET_SUCCESS, CAT_GET_FAILED } from './categories';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
 
jest.mock('../firebase', () => ({
    firebaseCategories: { once: (val) => {
        const mockResponse = ['mock category'];        
        return Promise.resolve(mockResponse) } },
    firebaseLooper: (response) => response
}))

it('calls request and success actions if the fetch response was successful', () => {

    const store = mockStore({ items: [] });
    store.dispatch(getCategories()).then(() => {
        const expectedActions = store.getActions();        
        expect(expectedActions.length).toBe(2);
        expect(expectedActions).toContainEqual({ type: CAT_GET_START });
        expect(expectedActions).toContainEqual({ type: CAT_GET_SUCCESS, payload: ['mock category'] });
    })
});