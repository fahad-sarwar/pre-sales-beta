
import * as types from '../../../actions/actionTypes';
import initialState from '../../../reducers/initialState';

export default function reducer_findAddress(state = initialState, action) {
    switch (action.type) {

        case types.FIND_ADDRESS:
            console.log('reducer_findAddress::action:', action.payload);
            
            return { 
                // ...state, TODO - what does this do?
                phoneNumber: action.payload.phoneNumber,
                postcode: action.payload.postcode,
                addresses: action.payload.addresses
            }

        default:
            return state;
    }
}