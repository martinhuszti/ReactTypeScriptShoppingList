import { Dispatch } from 'redux';
import * as firebase from 'firebase/app'
import User from "./../../models/User"
import 'firebase/firestore'
import FamilyGroup from "./../../models/FamilyGroup"

export const signIn = (cred: any) => {
    return (dispatch: any, ) => {
        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        )
            .then(() => {
                dispatch({ type: 'LOGIN_SUCCESS' })
            })

            .catch((err: Error) => {
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

export const signUp = (newUser: User) => {
    return (dispatch: Dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
            .then((respond) => {
                newUser.password = "not_stored_removed_in_authActions"
                return firebase.firestore().collection('users').doc(respond.user.uid).set(Object.assign({}, newUser))
            })

            .then(() => {
                dispatch({ type: 'SINGUP_SUCCESS' })
            })

            .catch((err: ErrorEvent) => {
                dispatch({ type: 'SIGNUP_ERROR', err });
            })
    }
}

export const createGroup = (group: FamilyGroup, admin: User) => {
    return (dispatch: any) => {
        firebase.firestore().collection('groups').doc(group.name_id).set(Object.assign({}, group))
            .then(() => {
                admin.groupId = group.name_id
                return dispatch(signUp(admin))
            })
            .then(() => {
                dispatch({ type: 'GROUP_CREATION_SUCCESSFULL' })
            })
            .catch((err: ErrorEvent) => {
                dispatch({ type: 'GROUP_CREATION_ERROR', err });
            })
    }
}
