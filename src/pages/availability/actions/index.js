import IdentityConfig from '../../../helpers/Identity';

export const FIND_ADDRESS = 'FIND_ADDRESS';

export function findAddresses(postcode) {
    console.log("calling diagloue services api! " + IdentityConfig.accessToken);
    
    const request = {
        addresses: []
    };

    return ({
        type: FIND_ADDRESS,
        payload: request
    })
}