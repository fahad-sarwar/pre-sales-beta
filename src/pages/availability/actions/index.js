import fetch from 'cross-fetch';
import Config from '../../../helpers/Config.js';
import IdentityConfig from '../../../helpers/Identity';
import * as types from '../../../actions/actionTypes';

export const findAddresses = (postcode, phoneNumber) => async dispatch => {
    dispatch(findAddressStarted(postcode, phoneNumber));

    const options = {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + IdentityConfig.accessToken,
            'Accept': 'application/json'
        }
    };

    const url = Config.dialogueServicesUrl + '/api/addresses?postcode=' + postcode;

    try {
        const response = await fetch(url, options);
        var result = await response.json();
        console.log('result: ' + result);
        return dispatch(findAddressSuccess(postcode, phoneNumber, result));
    }
    catch (err) {
        console.log('error: ' + err);
        return dispatch(findAddressFailure(postcode, phoneNumber, err));
    }
};

const findAddressStarted = (postcode, phoneNumber) => ({
    type: types.FIND_ADDRESS_STARTED,
    payload: {
        phoneNumber: phoneNumber,
        postcode: postcode,
        addresses: []
    }
});

const findAddressSuccess = (postcode, phoneNumber, addresses) => ({
    type: types.FIND_ADDRESS_SUCCESS,
    payload: {
        phoneNumber: phoneNumber,
        postcode: postcode,
        addresses: addresses
    }
});

const findAddressFailure = (postcode, phoneNumber, error) => ({
    type: types.FIND_ADDRESS_FAILURE,
    payload: {
        phoneNumber: phoneNumber,
        postcode: postcode,
        findAddressError: error
    }
});