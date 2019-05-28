import ShoppingItem from "../../models/ShoppingItem";
import { FirebaseFirestore } from "@firebase/firestore-types";

export const createItem = (item: ShoppingItem) => {
    return (dispatch: any, getState: any,
        { getFirestore }: any) => {


        const firestore: FirebaseFirestore = getFirestore()
        const newRef = firestore.collection('shopping_items').doc()
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