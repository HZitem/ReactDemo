import { combineReducers } from 'redux';
import cartReducer from './cart-reducer';
import userReducer from './user-reducer';

const allReducers = {
  shoppingCart: cartReducer,
  userReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;