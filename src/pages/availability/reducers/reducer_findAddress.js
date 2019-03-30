import * as types from "../../../actions/actionTypes";
import initialState from "../../../reducers/initialState";

export default function reducer_findAddress(state = initialState, action) {
  switch (action.type) {
    case types.FIND_ADDRESS_STARTED:
      console.log("action: " + action.type);
      return {
        ...state,
        addressListStatus: "loading",
        errorMessage: "",
        phoneNumber: action.payload.phoneNumber,
        postcode: action.payload.postcode,
        addresses: []
      };

    case types.FIND_ADDRESS_SUCCESS:
      console.log(action.type);
      return {
        ...state,
        addressListStatus:
          (action.payload.addresses || []).length > 0
            ? "addresses-found"
            : "no-addresses-found",
        errorMessage: "",
        phoneNumber: action.payload.phoneNumber,
        postcode: action.payload.postcode,
        addresses: action.payload.addresses
      };

    case types.FIND_ADDRESS_FAILURE:
      console.log(action.type);
      return {
        ...state,
        addressListStatus: "no-addresses-found",
        errorMessage: "",
        phoneNumber: action.payload.phoneNumber,
        postcode: action.payload.postcode,
        addresses: []
      };

    default:
      return state;
  }
}
