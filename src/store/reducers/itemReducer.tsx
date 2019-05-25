import ShoppingItem from "../../models/ShoppingItem";

const initState = {
    items: [
        new ShoppingItem("1"),
        new ShoppingItem("2"),
        new ShoppingItem("3"),
    ]
}

const itemReducer = (state = initState, action: any) => {
    return state;
}

export default itemReducer;