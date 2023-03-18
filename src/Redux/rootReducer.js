
import { combineReducers } from 'redux';
import cartReducer from './Reducers/cartReducer';
import loginReducer from './Reducers/loginReducer'

const rootReducer = combineReducers({
    user:loginReducer,
    cart:cartReducer
});

export default rootReducer;