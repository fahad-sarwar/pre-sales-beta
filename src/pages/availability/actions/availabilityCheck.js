import fetch from "cross-fetch";
import Config from "../../../helpers/Config.js";
import IdentityConfig from "../../../helpers/Identity";
import * as types from "../../../actions/actionTypes";

export const availabilityCheck = data => async dispatch => {
  dispatch(availabilityCheckStarted(data));

  const options = {
    method: "get",
    headers: {
      Authorization: "Bearer " + IdentityConfig.accessToken,
      Accept: "application/json"
    }
  };

  const url =
    Config.dialogueServicesUrl +
    "/Broadband?addressKey=" +
    data.selectedInstallationAddress.addressKey +
    "&districtCode=" +
    data.selectedInstallationAddress.districtCode;

  try {
    const response = await fetch(url, options);
    var result = await response.json();
    return dispatch(addressAvailabilityCheckSuccess(data, result));
  } catch (err) {
    console.log("error: " + err);
    return dispatch(addressAvailabilityCheckFailure(data, err));
  }
};

const availabilityCheckStarted = data => ({
  type: types.AVAILABILITY_CHECK_STARTED,
  payload: {
    selectedInstallationAddressIndex: data.selectedInstallationAddressIndex,
    selectedInstallationAddress: data.selectedInstallationAddress
  }
});

const addressAvailabilityCheckSuccess = (data, availabilityCheckResult) => ({
  type: types.ADDRESS_AVAILABILITY_CHECK_SUCCESS,
  payload: {
    selectedInstallationAddressIndex: data.selectedInstallationAddressIndex,
    selectedInstallationAddress: data.selectedInstallationAddress,
    availabilityCheckResult: availabilityCheckResult
  }
});

const addressAvailabilityCheckFailure = (data, error) => ({
  type: types.ADDRESS_AVAILABILITY_CHECK_FAILURE,
  payload: {
    selectedInstallationAddressIndex: data.selectedInstallationAddressIndex,
    selectedInstallationAddress: data.selectedInstallationAddress,
    availabilityCheckError: error
  }
});
