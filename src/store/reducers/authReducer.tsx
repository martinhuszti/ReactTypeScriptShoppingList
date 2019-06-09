import { AnyAction } from "redux";

const initState = {
    authError: null as string
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
            console.log("SIGNUP_SUCCESS")
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log("SIGNUP_ERROR")
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_RESPOND_IS_NULL':
            console.log("SIGNUP_RESPOND_IS_NULL")
            return {
                ...state,
            }
    }
}
export default authReducer;