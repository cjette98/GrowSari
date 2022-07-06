import { combineReducers } from 'redux';

import CartReducers from './CartReducers';
const allReducers = combineReducers({
  allCart: CartReducers,
});

export default allReducers;

export const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return allReducers(state, action);
};
