import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware'
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

const root = combineReducers(
  {
    productReducer,
    userReducer
  }
) 

export default createStore(root, applyMiddleware(promise));