
import * as types from '../../../actions/actionTypes';
import initialState from '../../../reducers/initialState';

export default function reducer_findAddress(state = initialState, action) {
    
    console.log(action.type);
    
    switch (action.type) {

        case types.FIND_ADDRESS_STARTED: 
            return {
                ...state,
                errorMessages: [],
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: true,
                addresses: action.payload.addresses
            };

        case types.FIND_ADDRESS_SUCCESS:  
            return {
                ...state,
                errorMessages: [],
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: false,
                addresses: action.payload.addresses
            };        

        case types.FIND_ADDRESS_FAILURE:
            return {
                ...state,
                errorMessages: ['Error finding addresses.  Please try again'],
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: false,
                addresses: []
            };

        default:
            return state;
    }
}