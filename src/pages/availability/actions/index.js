import fetch from 'cross-fetch';
import Config from '../../../helpers/Config.js';
import IdentityConfig from '../../../helpers/Identity';

export const FIND_ADDRESS = 'FIND_ADDRESS';

export function findAddresses(postcode, phoneNumber) {
    const url = Config.dialogueServicesUrl + '/api/addresses?postcode=' + postcode;

    const request = {
        postcode: postcode,
        phoneNumber: phoneNumber,
        addresses: []
    };

    fetch(url, {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + IdentityConfig.accessToken,
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(
        data => request.addresses = data,
        err => console.log('Request failed', err)
    );

    return ({
        type: FIND_ADDRESS,
        payload: request
    })
}