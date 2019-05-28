import firebaseConfig from '../../config/firebaseConfig'

export const signIn = (cred: any) => {
    return (dispatch: any, ) => {


        firebaseConfig.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err: Error) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}