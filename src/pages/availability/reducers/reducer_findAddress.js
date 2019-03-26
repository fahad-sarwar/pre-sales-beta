
import * as types from '../../../actions/actionTypes';
import initialState from '../../../reducers/initialState';

export default function reducer_findAddress(state = initialState, action) {
    
    console.log(action.type);
    
    switch (action.type) {

        case types.FIND_ADDRESS_STARTED: 
            return {
                ...state,
                errorMessage: '',
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: true,
                addresses: []
            };

        case types.FIND_ADDRESS_SUCCESS:  
            return {
                ...state,
                errorMessage: '',
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: false,
                addresses: action.payload.addresses
            };        

        case types.FIND_ADDRESS_FAILURE:
            return {
                ...state,
                //errorMessage: 'Error finding addresses.  Please try again',
                errorMessage: '',
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: false,
                addresses: []
            };

        default:
            return state;
    }
}