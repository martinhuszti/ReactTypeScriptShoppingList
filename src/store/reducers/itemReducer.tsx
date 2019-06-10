import ShoppingItem from "../../models/ShoppingItem";
import { AnyAction } from "redux";


const initState = {
    items: [
        new ShoppingItem(),
        new ShoppingItem(),
        new ShoppingItem(),
    ]
}

const itemReducer = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case 'CREATED_ITEM':
            console.log('created item', action.item)
            return state;
        case 'CREATED_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        case 'ITEM_DELETED':
            console.log('ITEM_DELETED', action.item)
            return state;
        case 'ITEM_DELETED_ERROR':
            console.log('ITEM_DELETED_ERROR', action.err)
            return state;
        case 'ITEM_ARCHIVED':
            console.log('ITEM_ARCHIVED', action.item)
            return state;
        case 'ITEM_ARCHIVED_ERROR':
            console.log('ITEM_ARCHIVED_ERROR', action.err)
            return state;

        default:
            return state;
    }
}

export default itemReducer;