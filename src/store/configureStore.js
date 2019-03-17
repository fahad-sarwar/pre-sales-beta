import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'; 
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    // initialState = {
    //     phoneNumber: '',
    //     postCode: '',
    //     addresses: [],
    //     installationAddress: ''
    // };

    const store = createStore(
        rootReducer,
        initialState
    );

    const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(store);

    return createStoreWithMiddleware;
}