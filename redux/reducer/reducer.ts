import { combineReducers } from 'redux';
import WalletReducer from './walletreducer';

const reducer = combineReducers({
    wallet:WalletReducer
})

export default reducer;