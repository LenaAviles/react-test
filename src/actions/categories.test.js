import getCategories from './categories';
import { CAT_GET_START, CAT_GET_SUCCESS, CAT_GET_FAILED } from './categories';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ items: [] });

describe('the response was successful', () => {
    jest.mock('../firebase', () => ({
        firebaseCategories: {
            once: (val) => {
                const mockResponse = ['mock category'];
                return Promise.resolve(mockResponse)
            }
        },
        firebaseLooper: (response) => response
    }))

    it('should dispatch two actions', () => {        
        store.dispatch(getCategories()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions.length).toBe(2);
        })
    });

    it('should dispatch CAT_GET_START action', () => {        
        store.dispatch(getCategories()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions).toContainEqual({ type: CAT_GET_START });
        })
    });

    it('should dispatch CAT_GET_SUCCESS action', () => {        
        store.dispatch(getCategories()).then(() => {
            const expectedActions = store.getActions();
            expect(expectedActions).toContainEqual({ type: CAT_GET_SUCCESS, payload: ['mock category'] });
        })
    });
    jest.unmock('../firebase');
});

describe('the response was unsuccessful', () => {       
    jest.mock('../firebase', () => ({
        firebaseCategories: {
            once: (val) => {
                const mockError = {message: 'error'};
                return Promise.resolve(mockError)
            }
        },
        firebaseLooper: (response) => response
    }))

    it('should dispatch two actions', () => {        
        store.dispatch(getCategories()).then(() => {
            const expectedActions = store.getActions();            
            expect(expectedActions.length).toBe(2);
        })
    });

    it('should dispatch CAT_GET_START action', () => {        
        store.dispatch(getCategories()).then(() => {
            const expectedActions = store.getActions();            
            expect(expectedActions).toContainEqual({ type: CAT_GET_START });
        })
    });

    it('should dispatch CAT_GET_FAILED action', () => {        
        store.dispatch(getCategories()).then(() => {
            const expectedActions = store.getActions();            
            expect(expectedActions).toContainEqual({ type: CAT_GET_FAILED, payload: {message: 'error'} });
        })
    });
});