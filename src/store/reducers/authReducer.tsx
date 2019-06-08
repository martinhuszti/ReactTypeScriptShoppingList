import { AnyAction } from "redux";

const initState = {
    authError: null
}

const authReducer = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log("login success")
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log("SIGNOUT_SUCCESS")
            return { state }
        default: return state

        case 'SINGUP_SUCCESS':
            console.log("SIGNOUT_SUCCESS")
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log("SIGNOUT_SUCCESS")
            return {
                ...state,
                authError: action.err.message
            }
    }
}
export default authReducer;