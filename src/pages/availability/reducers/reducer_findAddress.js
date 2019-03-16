import { FIND_ADDRESS } from '../actions/index';

export default function(state = {}, action) {
    switch (action.type) {

        case FIND_ADDRESS:
            console.log('API Data:', action.payload.addresses);
            
            return { ...state, addresses: action.payload.addresses }

        default:
            break;
    }
    return state;
}