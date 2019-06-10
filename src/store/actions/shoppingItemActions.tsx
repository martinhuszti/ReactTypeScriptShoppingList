import ShoppingItem from "../../models/ShoppingItem";
import * as firebase from 'firebase/app'
import 'firebase/firestore'

export const createItem = (item: ShoppingItem) => {
    return (dispatch: any) => {
        const newRef = firebase.firestore().collection('shopping_items').doc()
        item.id = newRef.id
        newRef.set(Object.assign({}, item))

            .then(() => {
                dispatch({ type: 'CREATED_ITEM', item })
            })

            .catch((err: Error) => {
                dispatch({ type: 'CREATED_PROJECT_ERROR', err })
            })

    }
}

export const archiveItem = (item: ShoppingItem, nickname: string) => {
    return (dispatch: any) => {
        firebase.firestore().collection('shopping_items').doc(item.id).set({
            archived: true,
            archived_at: firebase.firestore.Timestamp.now(),
            archived_by: nickname,
        }, {merge: true})
            .then(() => {
                dispatch({ type: 'ITEM_ARCHIVED', item })
            })

            .catch((err: Error) => {
                dispatch({ type: 'ITEM_ARCHIVED_ERROR', err })
            })

    }
}

export const deleteItem = (item: ShoppingItem) => {
    return (dispatch: any) => {
        firebase.firestore().collection('shopping_items').doc(item.id).delete()
            .then(() => {
                dispatch({ type: 'ITEM_DELETED', item })
            })

            .catch((err: Error) => {
                dispatch({ type: 'ITEM_DELETED_ERROR', err })
            })

    }
}