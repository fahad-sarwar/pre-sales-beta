import { combineReducers } from 'redux';
import FindAddressReducer from '../pages/availability/reducers/reducer_findAddress';

const rootReducer = combineReducers({
  findAddress: FindAddressReducer
});

export default rootReducer;