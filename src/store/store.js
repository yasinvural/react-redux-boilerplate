import AllReducer from "../reducers/index";
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const store = createStoreWithMiddleware(AllReducer);