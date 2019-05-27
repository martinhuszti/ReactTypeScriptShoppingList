import ShoppingItem from "../../models/ShoppingItem";

const initState = {
    items: [
        new ShoppingItem("1"),
        new ShoppingItem("2"),
        new ShoppingItem("3"),
    ]
}

const itemReducer = (state = initState, action: any) => {
    switch (action.type) {
        case 'CREATE_ITEM':
            console.log('created item', action.item)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}

export default itemReducer;