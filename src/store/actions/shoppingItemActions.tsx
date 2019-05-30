import ShoppingItem from "../../models/ShoppingItem";
import { FirebaseFirestore } from "@firebase/firestore-types";
import { firestore } from 'firebase/app';



export const createItem = (item: ShoppingItem) => {
    return (dispatch: any, getState: any,
        { getFirestore }: any) => {
        const firebaseFirestore: FirebaseFirestore = getFirestore()
        item.createdDate = firestore.Timestamp.fromDate(new Date())
        const newRef = firebaseFirestore.collection('shopping_items').doc()
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