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
        broadbandResultsStatus: "hide",
        errorMessage: "",
        selectedInstallationAddress: {}
      };

    case types.AVAILABILITY_CHECK_STARTED:
      console.log(action.type);
      return {
        ...state,
        broadbandResultsStatus: "loading",
        errorMessage: "",
        selectedInstallationAddress: action.payload.selectedInstallationAddress
      };

    case types.ADDRESS_AVAILABILITY_CHECK_SUCCESS:
      console.log(action.type);
      return {
        ...state,
        broadbandResultsStatus: "availability-check-succeeded",
        errorMessage: "",
        selectedInstallationAddress: action.payload.selectedInstallationAddress,
        availabilityCheckResult: action.payload.availabilityCheckResult
      };

    case types.ADDRESS_AVAILABILITY_CHECK_FAILURE:
      console.log(action.type);
      return {
        ...state,
        broadbandResultsStatus: "availability-check-failure",
        errorMessage: action.payload.availabilityCheckError,
        selectedInstallationAddress: action.payload.selectedInstallationAddress
      };

    default:
      return state;
  }
}
