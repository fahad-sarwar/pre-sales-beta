import fetch from "cross-fetch";
import Config from "../../../helpers/Config.js";
import IdentityConfig from "../../../helpers/Identity";
import * as types from "../../../actions/actionTypes";

export const findAddresses = data => async dispatch => {
  dispatch(findAddressStarted(data));

  const options = {
    method: "get",
    headers: {
      Authorization: "Bearer " + IdentityConfig.accessToken,
      Accept: "application/json"
    }
  };

  const url =
    Config.dialogueServicesUrl + "/api/addresses?postcode=" + data.postcode;

  try {
    const response = await fetch(url, options);
    var result = await response.json();
    return dispatch(findAddressSuccess(data, result));
  } catch (err) {
    console.log("error: " + err);
    return dispatch(findAddressFailure(data, err));
  }
};

const findAddressStarted = data => ({
  type: types.FIND_ADDRESS_STARTED,
  payload: {
    phoneNumber: data.phoneNumber,
    postcode: data.postcode,
    addresses: []
  }
});

const findAddressSuccess = (data, addresses) => ({
  type: types.FIND_ADDRESS_SUCCESS,
  payload: {
    phoneNumber: data.phoneNumber,
    postcode: data.postcode,
    addresses: addresses
  }
});

const findAddressFailure = (data, error) => ({
  type: types.FIND_ADDRESS_FAILURE,
  payload: {
    phoneNumber: data.phoneNumber,
    postcode: data.postcode,
    findAddressError: error
  }
});
