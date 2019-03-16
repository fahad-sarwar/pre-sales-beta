import fetch from 'cross-fetch';
import Config from '../../../helpers/Config.js';
import IdentityConfig from '../../../helpers/Identity';

export const FIND_ADDRESS = 'FIND_ADDRESS';

export function findAddresses(postcode) {
    const url = Config.dialogueServicesUrl + '/api/addresses?postcode=' + postcode;

    console.log('accessToken: ' + IdentityConfig.accessToken);
    console.log('url: ' + url);

    const request = {
        addresses: []
    };

    fetch(url, {
        method: 'get',
        mode: 'cors',
        headers: new Headers({
            'Authorization': 'Bearer ' + IdentityConfig.accessToken,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Request-Method': '*',
            'Access-Control-Allow-Origin': '*'
        })
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