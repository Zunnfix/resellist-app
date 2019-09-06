import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware'
import landerReducer from './reducers/landerReducer';
import productReducer from './productReducer';
import authReducer from './reducers/chartReducer';
import userReducer from './reducers/userReducer';

const root = combineReducers(
  {
    landerReducer,
    productReducer,
    authReducer,
    userReducer
  }
) 

export default createStore(root, applyMiddleware(promise));