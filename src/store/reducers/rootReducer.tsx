import authReducer from './authReducer'
import itemReducer from './itemReducer';
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    item: itemReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer;