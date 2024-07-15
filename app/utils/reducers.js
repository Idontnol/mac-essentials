// redux/reducers.js
import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
// Import other reducers here

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here
});

export default rootReducer;
