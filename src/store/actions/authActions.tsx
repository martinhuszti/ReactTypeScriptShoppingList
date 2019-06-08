import firebaseConfig from '../../config/firebaseConfig'
import { firestore } from 'firebase';
import { Dispatch } from 'redux';

const firebase = firebaseConfig;


export const signIn = (cred: any) => {
    return (dispatch: any, ) => {
        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err: Error) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
    return (dispatch: any, ) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS' })
            })
    }
}

export const signUp = (newUser: any) => {
    return (dispatch: Dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.passoword
        ).then((respond) => {
            if (respond.user == null) return
            return firestore().collection('users').doc(respond.user.uid).set(newUser)
        }).then(() => {
            dispatch({ type: 'SINGUP_SUCCESS' })
        }).catch((err: ErrorEvent) => {
            dispatch({ type: 'SIGNUP_ERROR', err });
        })
    }
}
