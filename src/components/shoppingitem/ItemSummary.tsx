import React from 'react'
import ShoppingItem from '../../models/ShoppingItem';

const ItemSummary = ({ item }: { item: ShoppingItem }) => {
    return (
        <div className="item-list section">
            <div className="card z-depth-0 item-summary">
                <span className="card-title">{item.title}</span>
                <p>{item.quantity}</p>
                <p>{item.createdBy}</p>
                ----------
            </div>
        </div>
    )
}

export default ItemSummary;