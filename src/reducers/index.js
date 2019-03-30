import { combineReducers } from "redux";
import FindAddressReducer from "../pages/availability/reducers/reducer_findAddress";
import AvailabilityCheckReducer from "../pages/availability/reducers/reducer_availabilityCheck";

const rootReducer = combineReducers({
  addressSearch: FindAddressReducer,
  availabilityCheck: AvailabilityCheckReducer
});

export default rootReducer;
