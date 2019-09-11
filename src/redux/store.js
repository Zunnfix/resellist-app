import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware'
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';

const root = combineReducers(
  {
    productReducer,
    authReducer,
    userReducer
  }
) 

export default createStore(root, applyMiddleware(promise));