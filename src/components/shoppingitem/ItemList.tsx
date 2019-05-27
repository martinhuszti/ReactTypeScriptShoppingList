import React from 'react'
import ItemSummary from './ItemSummary';
import ShoppingItem from "../../models/ShoppingItem";

const ItemList = ({ items }: { items: ShoppingItem[] }) => {

    return (
        <div>
            {items && items.map(item => {
                return (
                    <ItemSummary item={item} key={item.id} />
                )
            })}
        </div>
    )
}

export default ItemList;