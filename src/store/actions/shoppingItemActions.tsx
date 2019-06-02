import ShoppingItem from "../../models/ShoppingItem";
import firebaseConfig from '../../config/firebaseConfig'
const firebase = firebaseConfig;

export const createItem = (item: ShoppingItem) => {
    return (dispatch: any) => {
        const newRef = firebase.firestore().collection('shopping_items').doc()
        item.id = newRef.id
        newRef.set(Object.assign({}, item))

            .then(() => {
                dispatch({ type: 'CREATE_ITEM', item })
            })

            .catch((err: Error) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
            })

    }
}

export const archiveItem = (item: ShoppingItem) => {
    return (dispatch: any) => {
        firebase.firestore().collection('shopping_items').doc(item.id).delete()
            .then(() => {
                dispatch({ type: 'ITEM_ARCHIVED', item })
            })

            .catch((err: Error) => {
                dispatch({ type: 'ITEM_ARCHIVE_ERROR', err })
            })

    }
}