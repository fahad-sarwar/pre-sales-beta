import { FIND_ADDRESS } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FIND_ADDRESS:
            console.log('API Data:',action.payload.data);
            //state.push is bad as we would be mutating the state, never do this, always return new state
            return [action.payload.data, ...state];
        default:
            break;
    }
    return state;
}