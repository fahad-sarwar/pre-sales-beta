import * as types from "../../../actions/actionTypes";
import initialState from "../../../reducers/initialState";

export default function reducer_findAddress(state = initialState, action) {
  switch (action.type) {
    case types.FIND_ADDRESS_STARTED:
      console.log("action: " + action.type);
      return {
        ...state,
        errorMessage: "",
        phoneNumber: action.payload.phoneNumber,
        postcode: action.payload.postcode,
        addressListStatus: "loading",
        addresses: []
      };

    case types.FIND_ADDRESS_SUCCESS:
      console.log(action.type);
      return {
        ...state,
        errorMessage: "",
        phoneNumber: action.payload.phoneNumber,
        postcode: action.payload.postcode,
        addressListStatus:
          (action.payload.addresses || []).length > 0
            ? "addresses-found"
            : "no-addresses-found",
        addresses: action.payload.addresses
      };

    case types.FIND_ADDRESS_FAILURE:
      console.log(action.type);
      return {
        ...state,
        errorMessage: "",
        phoneNumber: action.payload.phoneNumber,
        postcode: action.payload.postcode,
        addressListStatus: "no-addresses-found",
        addresses: []
      };

    default:
      return state;
  }
}
