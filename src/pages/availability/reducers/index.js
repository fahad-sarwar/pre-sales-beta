import { combineReducers } from 'redux';
import FindAddressReducer from './reducer_findAddress'

const rootReducer = combineReducers({
  findAddress: FindAddressReducer
});

export default rootReducer;