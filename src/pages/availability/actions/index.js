import fetch from 'cross-fetch';
import Config from '../../../helpers/Config.js';
import IdentityConfig from '../../../helpers/Identity';
import * as types from '../../../actions/actionTypes';

export const findAddresses = (postcode, phoneNumber) => dispatch => {
    const request = {
        postcode: postcode,
        phoneNumber: phoneNumber,
        addresses: []
    };

    getAddresses(postcode)
        .then(
            data => {
                request.addresses = data
                console.log('findAddresses::data: ' + data);
            },
            err => console.log('Request failed', err)
        );

    return dispatch(getAddressRequest(request));
};

export const getAddressRequest = request => ({ type: types.FIND_ADDRESS, payload: request});

const getAddresses = (postcode) => {
    const options = {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + IdentityConfig.accessToken,
            'Accept': 'application/json'
        }
    };

    const url = Config.dialogueServicesUrl + '/api/addresses?postcode=' + postcode;

    return fetch(url, options).then(response => response.json());  
}