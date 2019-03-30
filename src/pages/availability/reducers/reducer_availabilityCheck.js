import * as types from "../../../actions/actionTypes";
import initialState from "../../../reducers/initialState";

export default function reducer_availabilityCheck(
  state = initialState,
  action
) {
  switch (action.type) {
    case types.FIND_ADDRESS_STARTED:
    case types.FIND_ADDRESS_SUCCESS:
    case types.FIND_ADDRESS_FAILURE:
      console.log(action.type);
      return {
        ...state,
        broadbandResultVisibility: "HIDE",
        errorMessage: "",
        selectedInstallationAddress: {}
      };

    case types.AVAILABILITY_CHECK_STARTED:
      console.log(action.type);
      return {
        ...state,
        broadbandResultVisibility: "LOADING",
        errorMessage: "",
        selectedInstallationAddress: action.payload.selectedInstallationAddress
      };

    case types.ADDRESS_AVAILABILITY_CHECK_SUCCESS:
      console.log(action.type);
      return {
        ...state,
        broadbandResultVisibility: "AVAILABILITY-CHECK-SUCCEEDED",
        errorMessage: "",
        selectedInstallationAddress: action.payload.selectedInstallationAddress,
        availabilityCheckResult: action.payload.availabilityCheckResult
      };

    case types.ADDRESS_AVAILABILITY_CHECK_FAILURE:
      console.log(action.type);
      return {
        ...state,
        broadbandResultVisibility: "AVAILABILITY-CHECK-FAILED",
        errorMessage: action.payload.availabilityCheckError,
        selectedInstallationAddress: action.payload.selectedInstallationAddress
      };

    default:
      return state;
  }
}
