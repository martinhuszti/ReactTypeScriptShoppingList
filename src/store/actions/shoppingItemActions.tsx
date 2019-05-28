import ShoppingItem from "../../models/ShoppingItem";

export const createItem = (item: ShoppingItem) => {
    return (dispatch: any, getState: any,
        { getFirestore }: any) => {


        const firestore = getFirestore()
        firestore.collection('shopping_items').add({
            ...item,
        })

            .then(() => {
                dispatch({ type: 'CREATE_ITEM', item })
            })

            .catch((err: Error) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
            })

    }
}