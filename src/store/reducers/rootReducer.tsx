import authReducer from './authReducer'
import { combineReducers } from 'redux'
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemReducer,
})

export default rootReducer;