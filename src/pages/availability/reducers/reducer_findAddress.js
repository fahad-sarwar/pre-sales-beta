
import * as types from '../../../actions/actionTypes';
import initialState from '../../../reducers/initialState';

export default function reducer_findAddress(state = initialState, action) {
    
    console.log(action.type);
    
    switch (action.type) {

        case types.FIND_ADDRESS_STARTED: 
            return { 
                ...state,
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: true,
                addressErrorMessage: '',
                addresses: action.payload.addresses
            }

        case types.FIND_ADDRESS_SUCCESS:  
            
            return { 
                ...state,
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: false,
                addressErrorMessage: '',
                addresses: action.payload.addresses
            }
        

        case types.FIND_ADDRESS_FAILURE:
            
            return { 
                ...state,
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                loadingAddresses: false,
                addressErrorMessage: 'Error finding addresses.  Please try again',
                addresses: []
            }

        default:
            return state;
    }
}